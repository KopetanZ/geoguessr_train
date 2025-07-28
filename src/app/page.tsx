'use client';

import { useState, useEffect } from 'react';
import { DifficultyLevel, GameMode } from '@/types/quiz';
import { useGameLogic } from '@/hooks/useGameLogic';
import QuizCard from '@/components/QuizCard';
import ScoreBoard from '@/components/ScoreBoard';
import GameComplete from '@/components/GameComplete';
import DifficultySelector from '@/components/DifficultySelector';
import ThemeToggle from '@/components/ThemeToggle';
import StatsModal from '@/components/StatsModal';
import DetailedStats from '@/components/DetailedStats';
import AudioToggle from '@/components/AudioToggle';

export default function Home() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | undefined>(undefined);
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode>('normal');
  const [gameStarted, setGameStarted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showDetailedStats, setShowDetailedStats] = useState(false);

  const {
    gameState,
    currentQuestion,
    streak,
    categoryStats,
    handleAnswer,
    nextQuestion,
    restartGame,
  } = useGameLogic(10, selectedDifficulty, selectedGameMode);

  const handleStartGame = (difficulty?: DifficultyLevel, gameMode: GameMode = 'normal') => {
    setSelectedDifficulty(difficulty);
    setSelectedGameMode(gameMode);
    setGameStarted(true);
  };

  const handleRestartGame = () => {
    restartGame();
    setGameStarted(false);
    setSelectedDifficulty(undefined);
    setSelectedGameMode('normal');
  };

  // Enterキーで次の問題へ進む
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && gameState.showAnswer && gameStarted) {
        nextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.showAnswer, gameStarted, nextQuestion]);

  // ゲーム開始前の難易度選択画面
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowStats(true)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="統計を表示"
                >
                  📊
                </button>
                <button
                  onClick={() => setShowDetailedStats(true)}
                  className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-blue-600 dark:text-blue-400"
                  aria-label="詳細統計を表示"
                >
                  📈
                </button>
              </div>
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  🌍 Geoguesser トレーニング
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  国旗・言語・電話番号・建築で国を当てよう！
                </p>
              </div>
              <div className="flex space-x-2">
                <AudioToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <DifficultySelector onStartGame={handleStartGame} />
        </main>
      </div>
    );
  }

  // ローディング画面
  if (!currentQuestion && !gameState.isGameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">クイズを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* ヘッダー */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => setShowStats(true)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="統計を表示"
              >
                📊
              </button>
              <button
                onClick={() => setShowDetailedStats(true)}
                className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-blue-600 dark:text-blue-400"
                aria-label="詳細統計を表示"
              >
                📈
              </button>
            </div>
            <div className="text-center flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                🌍 Geoguesser トレーニング
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                国旗・言語・電話番号・建築で国を当てよう！
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                💡 キーボード: 1-4キーで回答、Enterで次へ
              </p>
            </div>
            <div className="flex space-x-2">
              <AudioToggle />
              <ThemeToggle />
            </div>
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
            difficulty={selectedDifficulty}
            gameMode={selectedGameMode}
            isEndlessMode={gameState.isEndlessMode}
            onRestart={handleRestartGame}
          />
        ) : (
          <>
            <ScoreBoard
              currentQuestion={gameState.currentQuestionIndex + 1}
              totalQuestions={gameState.totalQuestions}
              score={gameState.score}
              streak={streak}
              lives={gameState.lives}
              isEndlessMode={gameState.isEndlessMode}
            />
            
            <QuizCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={gameState.selectedAnswer}
              showAnswer={gameState.showAnswer}
              timeRemaining={gameState.timeRemaining}
              gameMode={gameState.gameMode}
            />

            {gameState.showAnswer && (
              <div className="text-center mt-6">
                <button
                  onClick={nextQuestion}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>
                      {gameState.currentQuestionIndex + 1 === gameState.totalQuestions
                        ? '結果を見る 📊'
                        : '次の問題へ ➡️'}
                    </span>
                    <span className="text-sm opacity-80 bg-white bg-opacity-20 px-2 py-1 rounded">
                      Enter
                    </span>
                  </div>
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
          <p className="mb-2">
            🎮 Geoguessrでの国判別スキルを向上させよう！
          </p>
          <p className="text-sm">
            国旗、言語、電話番号、建築様式を覚えて、より正確な推測を身に着けましょう。
          </p>
        </div>
      </footer>

      {/* 統計モーダル */}
      <StatsModal 
        isOpen={showStats} 
        onClose={() => setShowStats(false)}
        onOpenDetailedStats={() => setShowDetailedStats(true)}
      />
      
      {/* 詳細統計モーダル */}
      <DetailedStats isOpen={showDetailedStats} onClose={() => setShowDetailedStats(false)} />
    </div>
  );
}
