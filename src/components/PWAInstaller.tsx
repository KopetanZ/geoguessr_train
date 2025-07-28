'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // サービスワーカーの登録
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          console.log('SW registered: ', registration);
          
          // 更新のチェック
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // 新しいバージョンが利用可能
                  console.log('New version available');
                }
              });
            }
          });
          
        } catch (error) {
          console.error('SW registration failed: ', error);
        }
      });
    }

    // PWAインストールイベントの処理
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    // インストール状態の確認
    const checkInstallState = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
        setShowInstallButton(false);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    
    checkInstallState();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
      console.error('Install prompt failed:', error);
    }
  };

  if (isInstalled || !showInstallButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">📱</div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">アプリをインストール</h3>
            <p className="text-xs opacity-90">ホーム画面に追加して、いつでも簡単にアクセス！</p>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-3">
          <button
            onClick={() => setShowInstallButton(false)}
            className="px-3 py-1 text-xs bg-blue-700 hover:bg-blue-800 rounded transition-colors"
          >
            後で
          </button>
          <button
            onClick={handleInstallClick}
            className="px-3 py-1 text-xs bg-white text-blue-600 hover:bg-gray-100 rounded font-medium transition-colors"
          >
            インストール
          </button>
        </div>
      </div>
    </div>
  );
}