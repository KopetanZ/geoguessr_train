'use client';

import { useGameLogic } from '@/hooks/useGameLogic';
import QuizCard from '@/components/QuizCard';
import ScoreBoard from '@/components/ScoreBoard';
import GameComplete from '@/components/GameComplete';

export default function Home() {
  const {
    gameState,
    currentQuestion,
    streak,
    categoryStats,
    handleAnswer,
    nextQuestion,
    restartGame,
  } = useGameLogic(10);

  if (!currentQuestion && !gameState.isGameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">クイズを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              🌍 Geoguesser トレーニング
            </h1>
            <p className="text-gray-600 mt-1">
              国旗・言語・電話番号・建築で国を当てよう！
            </p>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {gameState.isGameComplete ? (
          <GameComplete
            score={gameState.score}
            totalQuestions={gameState.totalQuestions}
            categoryStats={categoryStats}
            onRestart={restartGame}
          />
        ) : (
          <>
            <ScoreBoard
              currentQuestion={gameState.currentQuestionIndex + 1}
              totalQuestions={gameState.totalQuestions}
              score={gameState.score}
              streak={streak}
            />
            
            <QuizCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={gameState.selectedAnswer}
              showAnswer={gameState.showAnswer}
              timeRemaining={gameState.timeRemaining}
            />

            {gameState.showAnswer && (
              <div className="text-center mt-6">
                <button
                  onClick={nextQuestion}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
                >
                  {gameState.currentQuestionIndex + 1 === gameState.totalQuestions
                    ? '結果を見る 📊'
                    : '次の問題へ ➡️'}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          <p className="mb-2">
            🎮 Geoguessrでの国判別スキルを向上させよう！
          </p>
          <p className="text-sm">
            国旗、言語、電話番号、建築様式を覚えて、より正確な推測を身に着けましょう。
          </p>
        </div>
      </footer>
    </div>
  );
}
