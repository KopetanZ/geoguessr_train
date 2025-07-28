'use client';

import { useEffect, useState } from 'react';
import { getCountryCoordinate, latLngToMapPosition, continentColors } from '@/data/countryCoordinates';

interface WorldMapProps {
  countryName?: string;
  className?: string;
}

export default function WorldMap({ countryName, className = '' }: WorldMapProps) {
  const [countryPosition, setCountryPosition] = useState<{ x: number; y: number; continent: string } | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // 固定サイズの地図（800x400）
  const mapWidth = 800;
  const mapHeight = 400;

  useEffect(() => {
    if (countryName) {
      const coordinate = getCountryCoordinate(countryName);
      if (coordinate) {
        const position = latLngToMapPosition(
          coordinate.lat,
          coordinate.lng,
          mapWidth,
          mapHeight
        );
        setCountryPosition({
          x: position.x,
          y: position.y,
          continent: coordinate.continent
        });
      } else {
        console.warn(`Country coordinate not found for: ${countryName}`);
        setCountryPosition(null);
      }
    } else {
      setCountryPosition(null);
    }
  }, [countryName]);

  return (
    <div className={`relative bg-blue-50 dark:bg-blue-900 rounded-lg p-4 ${className}`}>
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          🌍 世界地図
        </h3>
        {countryName && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {countryName}の位置
          </p>
        )}
      </div>
      
      <div className="flex justify-center">
        <div className="relative">
          <svg
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            className="w-full max-w-4xl h-auto border border-gray-300 dark:border-gray-600 rounded"
            style={{ aspectRatio: '2/1' }}
          >
            {/* 世界地図の背景画像 */}
            <defs>
              <pattern id="worldMapPattern" patternUnits="userSpaceOnUse" width={mapWidth} height={mapHeight}>
                <image
                  href="/world-map.jpg"
                  width={mapWidth}
                  height={mapHeight}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    console.warn('Failed to load world map image, falling back to simple background');
                    setImageLoaded(false);
                  }}
                />
              </pattern>
            </defs>

            {/* 背景 - 地図画像または単色背景 */}
            <rect
              width={mapWidth}
              height={mapHeight}
              fill={imageLoaded ? "url(#worldMapPattern)" : "#93c5fd"}
            />

            {/* フォールバック用の簡易大陸表示（画像が読み込めない場合） */}
            {!imageLoaded && (
              <>
                {/* 経線（縦線） */}
                {Array.from({ length: 9 }, (_, i) => (
                  <line
                    key={`meridian-${i}`}
                    x1={(i * mapWidth) / 8}
                    y1="0"
                    x2={(i * mapWidth) / 8}
                    y2={mapHeight}
                    stroke="#64748b"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                ))}

                {/* 緯線（横線） */}
                {Array.from({ length: 5 }, (_, i) => (
                  <line
                    key={`parallel-${i}`}
                    x1="0"
                    y1={(i * mapHeight) / 4}
                    x2={mapWidth}
                    y2={(i * mapHeight) / 4}
                    stroke="#64748b"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.3"
                  />
                ))}

                {/* 簡易大陸表示 */}
                <text
                  x={mapWidth / 2}
                  y={mapHeight / 2}
                  textAnchor="middle"
                  fontSize="16"
                  fill="#374151"
                  opacity="0.7"
                >
                  世界地図を読み込み中...
                </text>
              </>
            )}

            {/* 赤道線（強調） */}
            <line
              x1="0"
              y1={mapHeight / 2}
              x2={mapWidth}
              y2={mapHeight / 2}
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="6,6"
              opacity="0.7"
            />
            
            {/* 本初子午線（強調） */}
            <line
              x1={mapWidth / 2}
              y1="0"
              x2={mapWidth / 2}
              y2={mapHeight}
              stroke="#eab308"
              strokeWidth="1.5"
              strokeDasharray="6,6"
              opacity="0.7"
            />

            {/* 国の位置マーカー */}
            {countryPosition && (
              <>
                {/* パルス効果の大きな円 */}
                <circle
                  cx={countryPosition.x}
                  cy={countryPosition.y}
                  r="30"
                  fill={continentColors[countryPosition.continent] || '#ef4444'}
                  opacity="0.2"
                  className="animate-ping"
                />
                
                {/* 中間サイズの円 */}
                <circle
                  cx={countryPosition.x}
                  cy={countryPosition.y}
                  r="20"
                  fill={continentColors[countryPosition.continent] || '#ef4444'}
                  opacity="0.4"
                  className="animate-pulse"
                />
                
                {/* メインマーカー */}
                <circle
                  cx={countryPosition.x}
                  cy={countryPosition.y}
                  r="10"
                  fill={continentColors[countryPosition.continent] || '#ef4444'}
                  stroke="white"
                  strokeWidth="3"
                />
                
                {/* 国名ラベル */}
                <text
                  x={countryPosition.x}
                  y={countryPosition.y - 40}
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#1f2937"
                  stroke="white"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  {countryName}
                </text>
                
                {/* 座標表示（デバッグ用） */}
                <text
                  x={countryPosition.x}
                  y={countryPosition.y + 35}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#1f2937"
                  stroke="white"
                  strokeWidth="2"
                  paintOrder="stroke"
                >
                  ({Math.round(countryPosition.x)}, {Math.round(countryPosition.y)})
                </text>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* 凡例 */}
      {countryPosition && (
        <div className="mt-3 text-center">
          <div className="inline-flex items-center space-x-2 text-sm">
            <div
              className="w-3 h-3 rounded-full border border-white"
              style={{ backgroundColor: continentColors[countryPosition.continent] || '#ef4444' }}
            />
            <span className="text-gray-600 dark:text-gray-300">
              {countryPosition.continent}
            </span>
          </div>
        </div>
      )}

      {/* 操作説明 */}
      <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
        赤い破線: 赤道 | 黄色い破線: 本初子午線
      </div>
      
      {/* デバッグ情報 */}
      {countryName && !countryPosition && (
        <div className="mt-2 text-center text-xs text-red-500">
          座標データが見つかりません: {countryName}
        </div>
      )}

      {/* 地図ソース情報 */}
      <div className="mt-2 text-center text-xs text-gray-400">
        Map: Wikimedia Commons - Equirectangular projection
      </div>
    </div>
  );
}