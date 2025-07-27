'use client';

import { useEffect } from 'react';
import { QuizQuestion } from '@/types/quiz';
import FlagImage from './FlagImage';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showAnswer: boolean;
  timeRemaining: number;
  gameMode?: 'normal' | 'timeattack';
}

export default function QuizCard({
  question,
  onAnswer,
  selectedAnswer,
  showAnswer,
  timeRemaining,
  gameMode = 'normal'
}: QuizCardProps) {
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

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return { label: '簡単', color: 'bg-green-100 text-green-800' };
      case 'medium': return { label: '普通', color: 'bg-yellow-100 text-yellow-800' };
      case 'hard': return { label: '難しい', color: 'bg-red-100 text-red-800' };
      default: return { label: '？', color: 'bg-gray-100 text-gray-800' };
    }
  };

  // キーボードショートカット (1-4キー)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showAnswer) return; // 答えが表示されている時は無効
      
      const key = event.key;
      if (['1', '2', '3', '4'].includes(key)) {
        const optionIndex = parseInt(key) - 1;
        if (optionIndex < question.options.length) {
          onAnswer(question.options[optionIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [question.options, onAnswer, showAnswer]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* カテゴリーとタイマー */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getCategoryIcon(question.category)}</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {getCategoryLabel(question.category)}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBadge(question.difficulty).color}`}>
            {getDifficultyBadge(question.difficulty).label}
          </span>
        </div>
        <div className="text-right">
          <div className={`font-bold text-lg ${timeRemaining <= 5 ? 'text-red-500 animate-pulse' : 'text-blue-600 dark:text-blue-400'}`}>
            {gameMode === 'timeattack' ? '⚡' : '⏱️'} {timeRemaining}s
          </div>
          {gameMode === 'timeattack' && !showAnswer && (
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              速答ボーナス: +{Math.floor(timeRemaining / 5)}
            </div>
          )}
        </div>
      </div>

      {/* 問題文 */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        {question.question}
      </h2>

      {/* 国旗画像表示 */}
      {question.imageUrl === 'flag' && question.flagCountry ? (
        <div className="flex justify-center mb-6">
          <FlagImage 
            countryName={question.flagCountry}
            size={120}
            className="shadow-lg"
          />
        </div>
      ) : question.imageUrl && question.imageUrl !== 'flag' ? (
        <div className="text-6xl text-center mb-6">
          {question.imageUrl}
        </div>
      ) : null}

      {/* 選択肢 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {question.options.map((option, index) => {
          let buttonClass = "p-4 rounded-lg border-2 transition-all duration-200 font-medium text-left ";
          
          if (showAnswer) {
            if (option === question.answer) {
              buttonClass += "bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-300";
            } else if (option === selectedAnswer && option !== question.answer) {
              buttonClass += "bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-300";
            } else {
              buttonClass += "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300";
            }
          } else {
            if (option === selectedAnswer) {
              buttonClass += "bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-800 dark:text-blue-300";
            } else {
              buttonClass += "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-300 dark:hover:border-blue-500";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showAnswer && onAnswer(option)}
              disabled={showAnswer}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </div>
                <span className="text-xs opacity-60 ml-2">
                  {index + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 解答と豆知識 */}
      {showAnswer && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="mb-3">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ 正解: {question.answer}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{question.explanation}</p>
          </div>
          <div className="border-t dark:border-gray-600 pt-3">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">💡 豆知識</h4>
            <p className="text-gray-700 dark:text-gray-300">{question.funFact}</p>
          </div>
        </div>
      )}
    </div>
  );
}