'use client';

import { useEffect, useRef, useState } from 'react';
import { getCountryCoordinate, latLngToMapPosition, continentColors } from '@/data/countryCoordinates';

interface WorldMapProps {
  countryName?: string;
  className?: string;
}

export default function WorldMap({ countryName, className = '' }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 800, height: 400 });
  const [countryPosition, setCountryPosition] = useState<{ x: number; y: number; continent: string } | null>(null);

  useEffect(() => {
    if (countryName) {
      const coordinate = getCountryCoordinate(countryName);
      if (coordinate) {
        const position = latLngToMapPosition(
          coordinate.lat,
          coordinate.lng,
          mapDimensions.width,
          mapDimensions.height
        );
        setCountryPosition({
          x: position.x,
          y: position.y,
          continent: coordinate.continent
        });
      }
    } else {
      setCountryPosition(null);
    }
  }, [countryName, mapDimensions]);

  // ウィンドウリサイズに対応
  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const width = Math.min(rect.width || 800, 800);
        const height = width / 2; // 2:1のアスペクト比
        setMapDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 世界地図のSVGパス（簡略化された大陸の形状）
  const worldMapPaths = {
    // 北アメリカ大陸
    northAmerica: "M 120 180 L 180 160 L 220 170 L 260 150 L 280 160 L 300 180 L 290 220 L 270 240 L 250 250 L 200 260 L 150 250 L 120 220 Z",
    // 南アメリカ大陸
    southAmerica: "M 250 260 L 280 270 L 290 300 L 295 350 L 280 380 L 260 390 L 240 380 L 230 350 L 235 320 L 245 290 Z",
    // ヨーロッパ
    europe: "M 380 160 L 420 150 L 440 160 L 450 180 L 440 200 L 420 210 L 400 200 L 380 190 Z",
    // アフリカ大陸
    africa: "M 360 220 L 400 210 L 420 230 L 430 270 L 420 320 L 400 350 L 380 360 L 360 350 L 350 320 L 355 280 L 360 240 Z",
    // アジア大陸
    asia: "M 450 140 L 550 130 L 600 140 L 650 150 L 680 170 L 700 200 L 680 230 L 650 240 L 600 230 L 550 220 L 500 210 L 450 190 Z",
    // オーストラリア
    oceania: "M 620 320 L 680 310 L 700 330 L 690 350 L 650 360 L 620 350 Z"
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
          ref={svgRef}
          viewBox={`0 0 ${mapDimensions.width} ${mapDimensions.height}`}
          className="w-full max-w-4xl h-auto border border-gray-300 dark:border-gray-600 rounded bg-blue-100 dark:bg-blue-800"
          style={{ aspectRatio: '2/1' }}
        >
          {/* 海洋の背景 */}
          <rect
            width="100%"
            height="100%"
            fill="currentColor"
            className="text-blue-200 dark:text-blue-700"
          />

          {/* 経線・緯線 */}
          <defs>
            <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-300 dark:text-blue-600" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* 大陸の描画 */}
          {Object.entries(worldMapPaths).map(([continent, path]) => (
            <path
              key={continent}
              d={path}
              fill="currentColor"
              className="text-green-400 dark:text-green-600"
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}

          {/* 国の位置マーカー */}
          {countryPosition && (
            <>
              {/* パルス効果の円 */}
              <circle
                cx={countryPosition.x}
                cy={countryPosition.y}
                r="20"
                fill={continentColors[countryPosition.continent] || '#ef4444'}
                opacity="0.3"
                className="animate-ping"
              />
              <circle
                cx={countryPosition.x}
                cy={countryPosition.y}
                r="15"
                fill={continentColors[countryPosition.continent] || '#ef4444'}
                opacity="0.5"
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
                y={countryPosition.y - 25}
                textAnchor="middle"
                className="text-sm font-bold fill-gray-800 dark:fill-white"
                style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
              >
                {countryName}
              </text>
            </>
          )}

          {/* 赤道線 */}
          <line
            x1="0"
            y1={mapDimensions.height / 2}
            x2={mapDimensions.width}
            y2={mapDimensions.height / 2}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="text-red-400 dark:text-red-500"
            opacity="0.6"
          />
          
          {/* 本初子午線 */}
          <line
            x1={mapDimensions.width / 2}
            y1="0"
            x2={mapDimensions.width / 2}
            y2={mapDimensions.height}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="text-yellow-500 dark:text-yellow-400"
            opacity="0.6"
          />
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
    </div>
  );
}