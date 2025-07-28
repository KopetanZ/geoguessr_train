'use client';

interface ScoreBoardProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  streak: number;
  lives?: number;
  isEndlessMode?: boolean;
}

export default function ScoreBoard({
  currentQuestion,
  totalQuestions,
  score,
  streak,
  lives,
  isEndlessMode
}: ScoreBoardProps) {
  const progress = isEndlessMode ? 100 : (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="text-lg font-bold text-gray-800 dark:text-white">
          {isEndlessMode ? (
            `問題 ${currentQuestion} - ♾️ エンドレス`
          ) : (
            `問題 ${currentQuestion} / ${totalQuestions}`
          )}
        </div>
        <div className="flex space-x-4">
          <div className="text-sm">
            <span className="text-gray-600 dark:text-gray-300">スコア: </span>
            <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span>
          </div>
          {isEndlessMode && lives !== undefined && (
            <div className="text-sm">
              <span className="text-gray-600 dark:text-gray-300">ライフ: </span>
              <span className="font-bold text-red-600 dark:text-red-400">
                {'❤️'.repeat(lives)}{'🤍'.repeat(3 - lives)}
              </span>
            </div>
          )}
          {streak > 0 && (
            <div className="text-sm">
              <span className="text-gray-600 dark:text-gray-300">連続正解: </span>
              <span className="font-bold text-orange-600 dark:text-orange-400">{streak} 🔥</span>
            </div>
          )}
        </div>
      </div>
      
      {/* プログレスバー - エンドレスモードでは表示しない */}
      {!isEndlessMode && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      
      {/* エンドレスモード用のインジケーター */}
      {isEndlessMode && (
        <div className="flex justify-center">
          <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
            ♾️ 無限挑戦モード - 3回間違えるとゲーム終了
          </div>
        </div>
      )}
    </div>
  );
}