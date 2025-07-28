'use client';

import { useEffect } from 'react';
import { CategoryStats, DifficultyLevel, GameMode } from '@/types/quiz';
import { useStats } from '@/hooks/useStats';

interface GameCompleteProps {
  score: number;
  totalQuestions: number;
  categoryStats: CategoryStats[];
  difficulty?: DifficultyLevel;
  timeSpent?: number;
  gameMode?: GameMode;
  isEndlessMode?: boolean;
  onRestart: () => void;
}

export default function GameComplete({
  score,
  totalQuestions,
  categoryStats,
  difficulty,
  timeSpent = 0,
  gameMode,
  isEndlessMode,
  onRestart
}: GameCompleteProps) {
  const { recordGameResult, stats } = useStats();

  // ゲーム結果を統計に記録
  useEffect(() => {
    recordGameResult(score, totalQuestions, categoryStats, difficulty, timeSpent, gameMode);
  }, [score, totalQuestions, categoryStats, difficulty, timeSpent, gameMode, recordGameResult]);
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  const getPerformanceMessage = (score: number, isEndless: boolean = false) => {
    if (isEndless) {
      if (score >= 50) return { message: "レジェンド級！♾️", color: "text-purple-600" };
      if (score >= 30) return { message: "エキスパート！🏆", color: "text-yellow-600" };
      if (score >= 20) return { message: "上級者！🎉", color: "text-green-600" };
      if (score >= 10) return { message: "いい感じ！👏", color: "text-blue-600" };
      if (score >= 5) return { message: "頑張りました！💪", color: "text-orange-600" };
      return { message: "次回頑張ろう！📚", color: "text-red-600" };
    } else {
      if (percentage === 100) return { message: "パーフェクト！🏆", color: "text-yellow-600" };
      if (percentage >= 80) return { message: "素晴らしい！🎉", color: "text-green-600" };
      if (percentage >= 60) return { message: "よくできました！👏", color: "text-blue-600" };
      if (percentage >= 40) return { message: "頑張りました！💪", color: "text-orange-600" };
      return { message: "次回頑張ろう！📚", color: "text-red-600" };
    }
  };

  const performance = getPerformanceMessage(score, isEndlessMode);
  const isNewHighScore = isEndlessMode && score > stats.endlessHighScore;

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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {isEndlessMode ? '♾️ エンドレス終了！' : 'ゲーム完了！'}
        </h1>
        <p className={`text-2xl font-bold ${performance.color}`}>
          {performance.message}
        </p>
        {isNewHighScore && (
          <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-2 animate-pulse">
            🎉 新記録達成！ 🎉
          </p>
        )}
      </div>

      {/* スコア表示 */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
        {isEndlessMode ? (
          <>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {score} 問正解
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              エンドレス記録: {score} 連続
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              ハイスコア: {Math.max(score, stats.endlessHighScore)} 問
            </div>
          </>
        ) : (
          <>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-xl text-gray-600 dark:text-gray-300">
              正答率: {percentage}%
            </div>
          </>
        )}
      </div>

      {/* カテゴリー別成績 */}
      {categoryStats.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">カテゴリー別成績</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {categoryStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getCategoryIcon(stat.category)}</span>
                    <span className="font-medium text-gray-800 dark:text-white">{getCategoryLabel(stat.category)}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-800 dark:text-white">{stat.correct}</span>
                    <span className="text-gray-600 dark:text-gray-300">/{stat.total}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                    style={{ width: `${(stat.correct / stat.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* アクションボタン */}
      <div className="space-y-3">
        <button
          onClick={onRestart}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors text-white ${
            isEndlessMode 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isEndlessMode ? 'エンドレス再挑戦 ♾️' : 'もう一度プレイ 🎮'}
        </button>
        
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>Geoguessrでの国判別スキルアップに役立ちましたか？</p>
          <p className="mt-1">
            {isEndlessMode 
              ? 'エンドレスモードでさらに記録を伸ばしましょう！♾️' 
              : 'さらに練習して、より多くの国を覚えましょう！🌍'
            }
          </p>
        </div>
      </div>
    </div>
  );
}