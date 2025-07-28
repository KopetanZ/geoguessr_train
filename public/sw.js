// サービスワーカー v1.1.0
const CACHE_NAME = 'geoguesser-training-v1.1.0';
const STATIC_CACHE_NAME = 'geoguesser-static-v1.1.0';
const DYNAMIC_CACHE_NAME = 'geoguesser-dynamic-v1.1.0';

// キャッシュするリソース
const STATIC_RESOURCES = [
  '/',
  '/manifest.json',
  '/browserconfig.xml',
  // Next.js の静的ファイルは自動的にキャッシュされる
];

// キャッシュから除外するパス
const EXCLUDED_PATHS = [
  '/api/',
  '/_next/webpack-hmr',
  '/_next/static/chunks/',
  '/sw.js',
  '/workbox-'
];

// インストール時の処理
self.addEventListener('install', (event) => {
  console.log('[SW] Install event');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static resources');
        return cache.addAll(STATIC_RESOURCES);
      })
      .then(() => {
        // 新しいサービスワーカーを即座にアクティブ化
        return self.skipWaiting();
      })
  );
});

// アクティベート時の処理
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 古いキャッシュを削除
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // すべてのクライアントを即座にコントロール下に置く
        return self.clients.claim();
      })
  );
});

// ネットワークリクエストの処理
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 除外パスのチェック
  if (EXCLUDED_PATHS.some(path => url.pathname.startsWith(path))) {
    return;
  }
  
  // GET リクエストのみ処理
  if (request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // キャッシュにある場合はそれを返す
        if (response) {
          console.log('[SW] Serving from cache:', request.url);
          return response;
        }
        
        // ネットワークから取得を試行
        return fetch(request)
          .then((networkResponse) => {
            // レスポンスが正常な場合のみキャッシュ
            if (networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              
              caches.open(DYNAMIC_CACHE_NAME)
                .then((cache) => {
                  console.log('[SW] Caching new resource:', request.url);
                  cache.put(request, responseClone);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.log('[SW] Network fetch failed:', error);
            
            // オフライン時のフォールバック
            if (url.pathname === '/' || url.pathname.startsWith('/_next/')) {
              return caches.match('/');
            }
            
            // 他のリクエストの場合はオフラインページを返す
            return new Response(
              JSON.stringify({
                error: 'オフラインです',
                message: 'インターネット接続を確認してください'
              }),
              {
                status: 503,
                statusText: 'Service Unavailable',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
          });
      })
  );
});

// バックグラウンド同期（将来の拡張用）
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // 統計データの同期など、将来的な実装
    console.log('[SW] Background sync completed');
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// プッシュ通知の処理（将来の拡張用）
self.addEventListener('push', (event) => {
  console.log('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : '新しい問題が追加されました！',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '今すぐプレイ',
        icon: '/icon-72x72.png'
      },
      {
        action: 'close',
        title: '閉じる',
        icon: '/icon-72x72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Geoguesser トレーニング', options)
  );
});

// 通知クリック時の処理
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification click received');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// エラーハンドリング
self.addEventListener('error', (event) => {
  console.error('[SW] Error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});