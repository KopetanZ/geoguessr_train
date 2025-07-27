'use client';

import { CategoryStats } from '@/types/quiz';

interface GameCompleteProps {
  score: number;
  totalQuestions: number;
  categoryStats: CategoryStats[];
  onRestart: () => void;
}

export default function GameComplete({
  score,
  totalQuestions,
  categoryStats,
  onRestart
}: GameCompleteProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = (percentage: number) => {
    if (percentage === 100) return { message: "パーフェクト！🏆", color: "text-yellow-600" };
    if (percentage >= 80) return { message: "素晴らしい！🎉", color: "text-green-600" };
    if (percentage >= 60) return { message: "よくできました！👏", color: "text-blue-600" };
    if (percentage >= 40) return { message: "頑張りました！💪", color: "text-orange-600" };
    return { message: "次回頑張ろう！📚", color: "text-red-600" };
  };

  const performance = getPerformanceMessage(percentage);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'flag': return '🏁';
      case 'language': return '💬';
      case 'phone': return '📞';
      case 'architecture': return '🏛️';
      default: return '❓';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'flag': return '国旗';
      case 'language': return '言語';
      case 'phone': return '電話番号';
      case 'architecture': return '建築';
      default: return 'その他';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ゲーム完了！</h1>
        <p className={`text-2xl font-bold ${performance.color}`}>
          {performance.message}
        </p>
      </div>

      {/* スコア表示 */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {score} / {totalQuestions}
        </div>
        <div className="text-xl text-gray-600">
          正答率: {percentage}%
        </div>
      </div>

      {/* カテゴリー別成績 */}
      {categoryStats.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">カテゴリー別成績</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {categoryStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getCategoryIcon(stat.category)}</span>
                    <span className="font-medium">{getCategoryLabel(stat.category)}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">{stat.correct}</span>
                    <span className="text-gray-600">/{stat.total}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
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
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          もう一度プレイ 🎮
        </button>
        
        <div className="text-sm text-gray-600">
          <p>Geoguessrでの国判別スキルアップに役立ちましたか？</p>
          <p className="mt-1">さらに練習して、より多くの国を覚えましょう！🌍</p>
        </div>
      </div>
    </div>
  );
}