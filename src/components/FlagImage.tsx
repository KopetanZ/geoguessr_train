'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getFlagImageSources, FlagSize, hasCountryFlag } from '@/utils/flagUtils';

interface FlagImageProps {
  countryName: string;
  size?: FlagSize;
  className?: string;
  alt?: string;
}

export default function FlagImage({ 
  countryName, 
  size = 80, 
  className = '', 
  alt 
}: FlagImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  // 国旗が利用可能かチェック
  if (!hasCountryFlag(countryName)) {
    return (
      <div className={`inline-block ${className}`} style={{ maxWidth: '100%' }}>
        <div 
          className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded max-w-full"
          style={{ width: Math.floor(size * 1.5), height: size, maxWidth: '100%' }}
        >
          <span className="text-gray-500 text-sm font-medium">
            {countryName}
          </span>
        </div>
      </div>
    );
  }

  const flagSources = getFlagImageSources(countryName, size);
  const srcArray = [flagSources.flagsapi, flagSources.flagcdn, flagSources.flagpedia, flagSources.fallback].filter(Boolean);
  const altText = alt || `${countryName}の国旗`;

  // エラー時のフォールバック表示
  if (imageError && currentSrcIndex >= srcArray.length - 1) {
    return (
      <div className={`inline-block ${className}`} style={{ maxWidth: '100%' }}>
        <div 
          className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-red-50 border-2 border-gray-300 rounded shadow-sm max-w-full"
          style={{ width: Math.floor(size * 1.5), height: size, maxWidth: '100%' }}
        >
          <div className="text-center">
            <div className="text-2xl mb-1">🏁</div>
            <span className="text-gray-600 text-xs font-medium">
              {countryName}
            </span>
          </div>
        </div>
      </div>
    );
  }

  const handleImageError = () => {
    // 開発環境でのデバッグ情報
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Flag image failed to load: ${srcArray[currentSrcIndex]} for ${countryName}`);
    }
    
    if (currentSrcIndex < srcArray.length - 1) {
      setCurrentSrcIndex(currentSrcIndex + 1);
      setImageError(false);
      setIsLoading(true);
    } else {
      setImageError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Flag image loaded successfully: ${srcArray[currentSrcIndex]} for ${countryName}`);
    }
    setIsLoading(false);
  };

  return (
    <div className={`relative inline-block ${className}`} style={{ maxWidth: '100%' }}>
      <div style={{ width: Math.floor(size * 1.5), height: size, maxWidth: '100%' }}>
        {/* ローディング状態 */}
        {isLoading && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded animate-pulse"
            style={{ width: '100%', height: '100%' }}
          >
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* 国旗画像 */}
        <Image
          src={srcArray[currentSrcIndex]}
          alt={altText}
          width={Math.floor(size * 1.5)}
          height={size}
          className={`rounded shadow-md border border-gray-200 object-cover max-w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          priority={size >= 80} // 大きい画像は優先読み込み
        />
      </div>
    </div>
  );
}