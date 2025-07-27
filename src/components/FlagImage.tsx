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
  size = 128, 
  className = '', 
  alt 
}: FlagImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 国旗が利用可能かチェック
  if (!hasCountryFlag(countryName)) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded ${className}`}
        style={{ width: size, height: Math.floor(size * 0.67) }}
      >
        <span className="text-gray-500 text-sm font-medium">
          {countryName}
        </span>
      </div>
    );
  }

  const flagSources = getFlagImageSources(countryName, size);
  const altText = alt || `${countryName}の国旗`;

  // エラー時のフォールバック表示
  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gradient-to-br from-blue-50 to-red-50 border-2 border-gray-300 rounded shadow-sm ${className}`}
        style={{ width: size, height: Math.floor(size * 0.67) }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">🏁</div>
          <span className="text-gray-600 text-xs font-medium">
            {countryName}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: Math.floor(size * 0.67) }}>
      {/* ローディング状態 */}
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded animate-pulse"
          style={{ width: size, height: Math.floor(size * 0.67) }}
        >
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* 国旗画像 */}
      <Image
        src={flagSources.webp}
        alt={altText}
        width={size}
        height={Math.floor(size * 0.67)}
        className={`rounded shadow-md border border-gray-200 object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
        priority={size >= 128} // 大きい画像は優先読み込み
      />
    </div>
  );
}