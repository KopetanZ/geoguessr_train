'use client';

import { useState, useEffect, useCallback } from 'react';

interface OfflineStorageHook {
  isOnline: boolean;
  saveToCache: (key: string, data: unknown) => Promise<void>;
  loadFromCache: (key: string) => Promise<unknown>;
  clearCache: () => Promise<void>;
  getCacheSize: () => Promise<number>;
}

export function useOfflineStorage(): OfflineStorageHook {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // 初期状態を設定
    setIsOnline(navigator.onLine);

    // オンライン状態の変更を監視
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // IndexedDBを使用したオフラインキャッシュ
  const openDB = useCallback((): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('GeoguesserTraining', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // オブジェクトストアを作成
        if (!db.objectStoreNames.contains('cache')) {
          const store = db.createObjectStore('cache', { keyPath: 'key' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }, []);

  const saveToCache = useCallback(async (key: string, data: unknown): Promise<void> => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['cache'], 'readwrite');
      const store = transaction.objectStore('cache');
      
      const cacheEntry = {
        key,
        data,
        timestamp: Date.now(),
        size: JSON.stringify(data).length
      };
      
      await new Promise((resolve, reject) => {
        const request = store.put(cacheEntry);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      console.log(`[OfflineStorage] Saved to cache: ${key}`);
    } catch (error) {
      console.error('[OfflineStorage] Error saving to cache:', error);
      // フォールバック: localStorage
      try {
        localStorage.setItem(`cache_${key}`, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      } catch (localStorageError) {
        console.error('[OfflineStorage] localStorage fallback failed:', localStorageError);
      }
    }
  }, [openDB]);

  const loadFromCache = useCallback(async (key: string): Promise<unknown> => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['cache'], 'readonly');
      const store = transaction.objectStore('cache');
      
      const result = await new Promise((resolve, reject) => {
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      if (result) {
        console.log(`[OfflineStorage] Loaded from cache: ${key}`);
        return (result as { data: unknown }).data;
      }
      
      return null;
    } catch (error) {
      console.error('[OfflineStorage] Error loading from cache:', error);
      // フォールバック: localStorage
      try {
        const cached = localStorage.getItem(`cache_${key}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          return parsed.data;
        }
      } catch (localStorageError) {
        console.error('[OfflineStorage] localStorage fallback failed:', localStorageError);
      }
      return null;
    }
  }, [openDB]);

  const clearCache = useCallback(async (): Promise<void> => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['cache'], 'readwrite');
      const store = transaction.objectStore('cache');
      
      await new Promise((resolve, reject) => {
        const request = store.clear();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      console.log('[OfflineStorage] Cache cleared');
    } catch (error) {
      console.error('[OfflineStorage] Error clearing cache:', error);
    }
  }, [openDB]);

  const getCacheSize = useCallback(async (): Promise<number> => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['cache'], 'readonly');
      const store = transaction.objectStore('cache');
      
      const count = await new Promise((resolve, reject) => {
        const request = store.count();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      return count as number;
    } catch (error) {
      console.error('[OfflineStorage] Error getting cache size:', error);
      return 0;
    }
  }, [openDB]);

  return {
    isOnline,
    saveToCache,
    loadFromCache,
    clearCache,
    getCacheSize
  };
}