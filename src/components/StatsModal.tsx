'use client';

import { useStats } from '@/hooks/useStats';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StatsModal({ isOpen, onClose }: StatsModalProps) {
  const { stats, resetStats, getAccuracy } = useStats();

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'flag': return '🏁';
      case 'language': return '💬';
      case 'phone': return '📞';
      case 'architecture': return '🏛️';
      case 'road': return '🛣️';
      case 'infrastructure': return '⚡';
      case 'nature': return '🌲';
      case 'business': return '🏪';
      default: return '❓';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'flag': return '国旗';
      case 'language': return '言語';
      case 'phone': return '電話番号';
      case 'architecture': return '建築';
      case 'road': return '道路・標識';
      case 'infrastructure': return '公共物';
      case 'nature': return '自然・植物';
      case 'business': return '企業・店舗';
      default: return 'その他';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢 簡単';
      case 'medium': return '🟡 普通';
      case 'hard': return '🔴 難しい';
      default: return difficulty;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* ヘッダー */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">📊 統計</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* 全体統計 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🎯 全体成績</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">{stats.totalGames}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">ゲーム数</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-300">
                  {getAccuracy(stats.totalCorrect, stats.totalQuestions)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">全体正答率</div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">{stats.bestScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">最高スコア</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">{stats.totalQuestions}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">総問題数</div>
              </div>
            </div>
          </div>

          {/* カテゴリー別統計 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">📈 カテゴリー別成績</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.values(stats.categoryStats).map((categoryStat) => (
                <div key={categoryStat.category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{getCategoryIcon(categoryStat.category)}</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {getCategoryLabel(categoryStat.category)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {categoryStat.correct}/{categoryStat.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                      style={{ width: `${getAccuracy(categoryStat.correct, categoryStat.total)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    正答率: {getAccuracy(categoryStat.correct, categoryStat.total)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 難易度別統計 */}
          {Object.keys(stats.difficultyStats).length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">⚡ 難易度別成績</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.values(stats.difficultyStats).map((difficultyStat) => (
                  <div key={difficultyStat.category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                        {getDifficultyLabel(difficultyStat.category)}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {getAccuracy(difficultyStat.correct, difficultyStat.total)}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {difficultyStat.correct}/{difficultyStat.total} 問正解
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 最近のゲーム履歴 */}
          {stats.gameHistory.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">📝 最近のゲーム</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {stats.gameHistory.slice(0, 10).map((game) => (
                  <div key={game.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {game.score}/{game.totalQuestions}
                      </span>
                      {game.difficulty && (
                        <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">
                          {getDifficultyLabel(game.difficulty)}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(game.date).toLocaleDateString('ja-JP')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 統計リセットボタン */}
          <div className="text-center pt-4 border-t dark:border-gray-700">
            <button
              onClick={() => {
                if (confirm('統計データをリセットしますか？この操作は取り消せません。')) {
                  resetStats();
                }
              }}
              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm"
            >
              🗑️ 統計をリセット
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}