'use client';

import { useEffect, useState } from 'react';
import { getCountryCoordinate, latLngToMapPosition, continentColors } from '@/data/countryCoordinates';

interface WorldMapProps {
  countryName?: string;
  className?: string;
}

export default function WorldMap({ countryName, className = '' }: WorldMapProps) {
  const [countryPosition, setCountryPosition] = useState<{ x: number; y: number; continent: string } | null>(null);
  
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
        // 座標が見つからない場合のデバッグ
        console.warn(`Country coordinate not found for: ${countryName}`);
        setCountryPosition(null);
      }
    } else {
      setCountryPosition(null);
    }
  }, [countryName]);

  // 簡易的な世界地図の陸地を表現（メルカトル図法に基づく）
  const continentPaths = {
    // 北アメリカ（アラスカ、カナダ、アメリカ、メキシコ）
    northAmerica: `
      M 50 150 L 120 120 L 180 110 L 220 120 L 260 130 L 280 140 L 300 160 
      L 280 180 L 260 200 L 240 220 L 220 240 L 200 250 L 180 260 L 160 270 
      L 140 260 L 120 250 L 100 240 L 80 220 L 60 200 L 50 180 Z
    `,
    // 南アメリカ
    southAmerica: `
      M 220 280 L 240 270 L 260 280 L 270 300 L 275 330 L 280 360 L 275 380 
      L 270 390 L 250 395 L 230 390 L 220 380 L 215 360 L 210 340 L 215 320 
      L 220 300 Z
    `,
    // ヨーロッパ
    europe: `
      M 380 140 L 420 130 L 440 135 L 460 140 L 470 150 L 465 160 L 450 170 
      L 430 175 L 410 170 L 390 160 L 380 150 Z
    `,
    // アフリカ
    africa: `
      M 380 200 L 420 190 L 440 200 L 450 220 L 460 250 L 465 280 L 460 310 
      L 450 340 L 440 360 L 420 370 L 400 375 L 380 370 L 370 350 L 365 320 
      L 370 290 L 375 260 L 380 230 Z
    `,
    // アジア（ロシア、中国、インド、東南アジア）
    asia: `
      M 470 120 L 550 110 L 620 115 L 680 120 L 720 130 L 750 140 L 770 160 
      L 760 180 L 740 200 L 720 210 L 700 220 L 680 225 L 660 230 L 640 225 
      L 620 220 L 600 215 L 580 210 L 560 200 L 540 190 L 520 180 L 500 170 
      L 480 160 L 470 150 Z
    `,
    // オーストラリア・オセアニア
    oceania: `
      M 620 320 L 680 315 L 720 320 L 740 330 L 730 350 L 710 360 L 680 365 
      L 650 360 L 630 350 L 620 335 Z
    `
  };

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
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          className="w-full max-w-4xl h-auto border border-gray-300 dark:border-gray-600 rounded"
          style={{ aspectRatio: '2/1', backgroundColor: '#bfdbfe' }}
        >
          {/* 海洋の背景 */}
          <rect
            width={mapWidth}
            height={mapHeight}
            fill="#3b82f6"
            opacity="0.3"
          />

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

          {/* 赤道線（強調） */}
          <line
            x1="0"
            y1={mapHeight / 2}
            x2={mapWidth}
            y2={mapHeight / 2}
            stroke="#ef4444"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.7"
          />
          
          {/* 本初子午線（強調） */}
          <line
            x1={mapWidth / 2}
            y1="0"
            x2={mapWidth / 2}
            y2={mapHeight}
            stroke="#eab308"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.7"
          />

          {/* 大陸の描画 */}
          {Object.entries(continentPaths).map(([continent, path]) => (
            <path
              key={continent}
              d={path}
              fill="#22c55e"
              stroke="#16a34a"
              strokeWidth="1"
              opacity="0.8"
            />
          ))}

          {/* 国の位置マーカー */}
          {countryPosition && (
            <>
              {/* パルス効果の大きな円 */}
              <circle
                cx={countryPosition.x}
                cy={countryPosition.y}
                r="25"
                fill={continentColors[countryPosition.continent] || '#ef4444'}
                opacity="0.2"
                className="animate-ping"
              />
              
              {/* 中間サイズの円 */}
              <circle
                cx={countryPosition.x}
                cy={countryPosition.y}
                r="15"
                fill={continentColors[countryPosition.continent] || '#ef4444'}
                opacity="0.4"
                className="animate-pulse"
              />
              
              {/* メインマーカー */}
              <circle
                cx={countryPosition.x}
                cy={countryPosition.y}
                r="8"
                fill={continentColors[countryPosition.continent] || '#ef4444'}
                stroke="white"
                strokeWidth="2"
              />
              
              {/* 国名ラベル */}
              <text
                x={countryPosition.x}
                y={countryPosition.y - 35}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#1f2937"
                stroke="white"
                strokeWidth="3"
                paintOrder="stroke"
              >
                {countryName}
              </text>
              
              {/* 座標表示（デバッグ用） */}
              <text
                x={countryPosition.x}
                y={countryPosition.y + 25}
                textAnchor="middle"
                fontSize="10"
                fill="#6b7280"
              >
                ({Math.round(countryPosition.x)}, {Math.round(countryPosition.y)})
              </text>
            </>
          )}
        </svg>
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
    </div>
  );
}