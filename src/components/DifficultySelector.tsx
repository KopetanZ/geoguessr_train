'use client';

import { useState } from 'react';
import { DifficultyLevel, GameMode } from '@/types/quiz';

interface DifficultySelectorProps {
  onStartGame: (difficulty?: DifficultyLevel, gameMode?: GameMode) => void;
}

export default function DifficultySelector({ onStartGame }: DifficultySelectorProps) {
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode>('normal');
  const difficultyOptions = [
    {
      level: undefined,
      title: '🌍 すべて',
      description: '全難易度からランダム出題',
      color: 'from-purple-500 to-indigo-600',
      hoverColor: 'hover:from-purple-600 hover:to-indigo-700',
      questions: '51問から出題'
    },
    {
      level: 'easy' as DifficultyLevel,
      title: '🟢 簡単',
      description: '有名な国・基本的な問題',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700',
      questions: '17問から出題'
    },
    {
      level: 'medium' as DifficultyLevel,
      title: '🟡 普通',
      description: '中程度の知識が必要',
      color: 'from-yellow-500 to-orange-600',
      hoverColor: 'hover:from-yellow-600 hover:to-orange-700',
      questions: '19問から出題'
    },
    {
      level: 'hard' as DifficultyLevel,
      title: '🔴 難しい',
      description: '専門的な知識が必要',
      color: 'from-red-500 to-pink-600',
      hoverColor: 'hover:from-red-600 hover:to-pink-700',
      questions: '15問から出題'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* タイトルセクション */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          🎯 ゲーム設定
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          ゲームモードと難易度を選択してください
        </p>

        {/* ゲームモード選択 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">🎮 ゲームモード</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedGameMode('normal')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedGameMode === 'normal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              📚 ノーマル
            </button>
            <button
              onClick={() => setSelectedGameMode('timeattack')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedGameMode === 'timeattack'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              ⚡ タイムアタック
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {selectedGameMode === 'normal' ? (
              '制限時間30秒、落ち着いて解答できます'
            ) : (
              '制限時間15秒、速答でボーナスポイント！'
            )}
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">📊 問題内容</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <span>🏁 国旗 (14問)</span>
              <span>📞 電話番号 (13問)</span>
              <span>💬 言語 (5問)</span>
              <span>🏛️ 建築 (3問)</span>
              <span>🛣️ 道路 (6問)</span>
              <span>⚡ インフラ (5問)</span>
              <span>🌲 自然 (3問)</span>
              <span>🏪 企業 (2問)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 難易度選択カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {difficultyOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onStartGame(option.level, selectedGameMode)}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${option.color} ${option.hoverColor} text-white p-6 transform transition-all duration-200 hover:scale-105 hover:shadow-xl`}
          >
            <div className="relative z-10">
              <div className="text-2xl font-bold mb-2">{option.title}</div>
              <div className="text-lg mb-3">{option.description}</div>
              <div className="text-sm opacity-90 mb-4">{option.questions}</div>
              
              {/* 難易度の特徴 */}
              <div className="text-xs opacity-80">
                {option.level === undefined && '初心者から上級者まで楽しめる'}
                {option.level === 'easy' && '地理の基礎知識があれば解ける'}
                {option.level === 'medium' && 'Geoguessrプレイヤー向け'}
                {option.level === 'hard' && '地理マニア・エキスパート向け'}
              </div>
            </div>
            
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
          </button>
        ))}
      </div>

      {/* 説明セクション */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎮 ゲームについて</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-700 mb-1">📝 問題形式</p>
            <p>各問題は4択形式で、制限時間は30秒です。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">🏆 スコア</p>
            <p>正解すると1点、連続正解でボーナスポイントがあります。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">📚 学習効果</p>
            <p>各問題に詳しい解説と豆知識が付いています。</p>
          </div>
          <div>
            <p className="font-medium text-gray-700 mb-1">🌍 実践的</p>
            <p>Geoguessrで実際に役立つ知識を身につけられます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}