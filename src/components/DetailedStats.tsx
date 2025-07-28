'use client';

import { useStats } from '@/hooks/useStats';

interface DetailedStatsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailedStats({ isOpen, onClose }: DetailedStatsProps) {
  const { stats, getAccuracy } = useStats();

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
      case 'hemisphere': return '🌍';
      case 'coverage': return '🗺️';
      case 'car-meta': return '🚗';
      case 'bollard': return '🛡️';
      case 'sign-meta': return '🚦';
      case 'script': return '📝';
      case 'advanced-meta': return '🤓';
      case 'japan-specific': return '🇯🇵';
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
      case 'hemisphere': return '半球判定';
      case 'coverage': return 'カバレッジ';
      case 'car-meta': return '車メタ';
      case 'bollard': return 'ボラード';
      case 'sign-meta': return '標識メタ';
      case 'script': return '文字・言語';
      case 'advanced-meta': return '上級メタ';
      case 'japan-specific': return '日本特化';
      default: return 'その他';
    }
  };

  // カテゴリー統計を正答率順にソート
  const sortedCategoryStats = Object.values(stats.categoryStats)
    .sort((a, b) => {
      const accuracyA = getAccuracy(a.correct, a.total);
      const accuracyB = getAccuracy(b.correct, b.total);
      return accuracyB - accuracyA;
    });

  // 弱点カテゴリー（正答率60%以下）を特定
  const weakCategories = sortedCategoryStats.filter(stat => {
    const accuracy = getAccuracy(stat.correct, stat.total);
    return accuracy < 60 && stat.total >= 3; // 3問以上解答したもののみ
  });

  // 強いカテゴリー（正答率80%以上）を特定
  const strongCategories = sortedCategoryStats.filter(stat => {
    const accuracy = getAccuracy(stat.correct, stat.total);
    return accuracy >= 80 && stat.total >= 3;
  });

  // 学習の連続日数を計算（簡易版）
  const calculateStreak = () => {
    if (stats.gameHistory.length === 0) return 0;
    
    const today = new Date();
    const uniqueDates = [...new Set(stats.gameHistory.map(game => 
      new Date(game.date).toDateString()
    ))].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    
    let streak = 0;
    for (let i = 0; i < uniqueDates.length; i++) {
      const gameDate = new Date(uniqueDates[i]);
      const expectedDate = new Date(today);
      expectedDate.setDate(today.getDate() - i);
      
      if (gameDate.toDateString() === expectedDate.toDateString()) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const learningStreak = calculateStreak();

  // 週間統計を計算
  const getWeeklyStats = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const weeklyGames = stats.gameHistory.filter(game => 
      new Date(game.date) >= weekAgo
    );
    
    const weeklyCorrect = weeklyGames.reduce((sum, game) => sum + game.score, 0);
    const weeklyTotal = weeklyGames.reduce((sum, game) => sum + game.totalQuestions, 0);
    
    return {
      games: weeklyGames.length,
      accuracy: getAccuracy(weeklyCorrect, weeklyTotal),
      questions: weeklyTotal
    };
  };

  const weeklyStats = getWeeklyStats();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* ヘッダー */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">📊 詳細統計</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* 学習概要 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🎯 学習概要</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">{learningStreak}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">連続学習日数</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-300">{weeklyStats.games}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">今週のゲーム数</div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">{weeklyStats.accuracy}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">今週の正答率</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">{stats.endlessHighScore}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">♾️ ベスト記録</div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">{stats.endlessGames}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">エンドレス回数</div>
              </div>
            </div>
          </div>

          {/* カテゴリー別正答率ランキング */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">📈 カテゴリー別正答率ランキング</h3>
            <div className="space-y-3">
              {sortedCategoryStats.map((categoryStat, index) => {
                const accuracy = getAccuracy(categoryStat.correct, categoryStat.total);
                const rankColor = index < 3 ? 'text-yellow-600' : 'text-gray-500';
                const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}位`;
                
                return (
                  <div key={categoryStat.category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`font-bold ${rankColor}`}>{rankEmoji}</span>
                        <span className="text-xl">{getCategoryIcon(categoryStat.category)}</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {getCategoryLabel(categoryStat.category)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {categoryStat.correct}/{categoryStat.total}
                        </span>
                        <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                            style={{ width: `${accuracy}%` }}
                          ></div>
                        </div>
                        <span className="font-bold text-gray-800 dark:text-white w-12 text-right">
                          {accuracy}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 弱点カテゴリーの分析 */}
          {weakCategories.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🎯 改善が必要なカテゴリー</h3>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <p className="text-red-800 dark:text-red-300 mb-3">
                  以下のカテゴリーの正答率が60%を下回っています。重点的に学習することをおすすめします：
                </p>
                <div className="space-y-2">
                  {weakCategories.map((categoryStat) => (
                    <div key={categoryStat.category} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getCategoryIcon(categoryStat.category)}</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {getCategoryLabel(categoryStat.category)}
                        </span>
                      </div>
                      <span className="text-red-600 dark:text-red-400 font-bold">
                        {getAccuracy(categoryStat.correct, categoryStat.total)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 得意カテゴリーの表彰 */}
          {strongCategories.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">🏆 得意なカテゴリー</h3>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <p className="text-green-800 dark:text-green-300 mb-3">
                  以下のカテゴリーで80%以上の高い正答率を達成しています！素晴らしいです：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {strongCategories.map((categoryStat) => (
                    <div key={categoryStat.category} className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getCategoryIcon(categoryStat.category)}</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {getCategoryLabel(categoryStat.category)}
                        </span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-bold">
                        {getAccuracy(categoryStat.correct, categoryStat.total)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 学習提案 */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">💡 学習提案</h3>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <div className="space-y-3">
                {learningStreak === 0 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">📅</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      継続的な学習のため、毎日少しずつでもクイズに挑戦してみましょう。
                    </span>
                  </div>
                )}
                {learningStreak >= 7 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">🔥</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      {learningStreak}日連続学習達成！この調子で継続しましょう。
                    </span>
                  </div>
                )}
                {weakCategories.length > 0 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">🎯</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      苦手な{weakCategories[0] ? getCategoryLabel(weakCategories[0].category) : 'カテゴリー'}から重点的に学習してみましょう。
                    </span>
                  </div>
                )}
                {stats.totalGames < 10 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">🚀</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      まずは10ゲーム達成を目指しましょう。様々な難易度に挑戦してみてください。
                    </span>
                  </div>
                )}
                {getAccuracy(stats.totalCorrect, stats.totalQuestions) >= 75 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">⚡</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      高い正答率を維持しています！タイムアタックモードで速度も鍛えてみましょう。
                    </span>
                  </div>
                )}
                {stats.endlessHighScore === 0 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">♾️</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      エンドレスモードにも挑戦してみましょう！どこまで連続で正解できるかな？
                    </span>
                  </div>
                )}
                {stats.endlessHighScore >= 20 && (
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 dark:text-blue-400">🏆</span>
                    <span className="text-blue-800 dark:text-blue-300">
                      エンドレス記録{stats.endlessHighScore}問は素晴らしいです！さらなる高みを目指しましょう。
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}