'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProblemImage, checkImageExists, getFallbackImageForCategory } from '@/utils/imageUtils';

interface ProblemImageProps {
  imageId: string;
  className?: string;
  size?: {
    width: number;
    height: number;
  };
}

export default function ProblemImage({ 
  imageId, 
  className = '',
  size = { width: 400, height: 300 }
}: ProblemImageProps) {
  const [imageExists, setImageExists] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const imageData = getProblemImage(imageId);

  useEffect(() => {
    if (imageData?.url) {
      checkImageExists(imageData.url).then((exists) => {
        setImageExists(exists);
        setIsLoading(false);
      });
    } else {
      setImageExists(false);
      setIsLoading(false);
    }
  }, [imageData?.url]);

  // 画像データが見つからない場合
  if (!imageData) {
    return (
      <div className={`flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-lg ${className}`}>
        <div 
          className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400"
          style={{ width: size.width, height: size.height }}
        >
          <span className="text-4xl mb-2">📷</span>
          <span className="text-sm">画像が見つかりません</span>
        </div>
      </div>
    );
  }

  // ローディング中
  if (isLoading) {
    return (
      <div className={`flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse ${className}`}>
        <div 
          className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400"
          style={{ width: size.width, height: size.height }}
        >
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
          <span className="text-sm">読み込み中...</span>
        </div>
      </div>
    );
  }

  // 画像が存在しない場合のフォールバック
  if (!imageExists) {
    const fallbackIcon = getFallbackImageForCategory(imageData.category);
    return (
      <div className={`flex justify-center items-center bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900 dark:to-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600 ${className}`}>
        <div 
          className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300"
          style={{ width: size.width, height: size.height }}
        >
          <span className="text-6xl mb-3">{fallbackIcon}</span>
          <span className="text-sm font-medium text-center px-4">
            {imageData.description || imageData.alt}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {imageData.country && `${imageData.country}で見られる特徴`}
          </span>
        </div>
      </div>
    );
  }

  // 実際の画像を表示
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <Image
        src={imageData.url}
        alt={imageData.alt}
        width={size.width}
        height={size.height}
        className="object-cover w-full h-full"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageExists(false);
          setIsLoading(false);
        }}
        priority={true}
      />
      
      {/* 画像の説明オーバーレイ */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-white text-sm font-medium">
          {imageData.description}
        </p>
        {imageData.country && (
          <p className="text-white/80 text-xs mt-1">
            📍 {imageData.country}
          </p>
        )}
      </div>
    </div>
  );
}