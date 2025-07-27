'use client';

interface ScoreBoardProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  streak: number;
}

export default function ScoreBoard({
  currentQuestion,
  totalQuestions,
  score,
  streak
}: ScoreBoardProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="text-lg font-bold text-gray-800">
          問題 {currentQuestion} / {totalQuestions}
        </div>
        <div className="flex space-x-4">
          <div className="text-sm">
            <span className="text-gray-600">スコア: </span>
            <span className="font-bold text-blue-600">{score}</span>
          </div>
          {streak > 0 && (
            <div className="text-sm">
              <span className="text-gray-600">連続正解: </span>
              <span className="font-bold text-orange-600">{streak} 🔥</span>
            </div>
          )}
        </div>
      </div>
      
      {/* プログレスバー */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}