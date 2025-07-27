'use client';

import { QuizQuestion } from '@/types/quiz';
import FlagImage from './FlagImage';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showAnswer: boolean;
  timeRemaining: number;
}

export default function QuizCard({
  question,
  onAnswer,
  selectedAnswer,
  showAnswer,
  timeRemaining
}: QuizCardProps) {
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
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* カテゴリーとタイマー */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getCategoryIcon(question.category)}</span>
          <span className="text-sm font-medium text-gray-600">
            {getCategoryLabel(question.category)}
          </span>
        </div>
        <div className={`font-bold text-lg ${timeRemaining <= 10 ? 'text-red-500' : 'text-blue-600'}`}>
          ⏱️ {timeRemaining}s
        </div>
      </div>

      {/* 問題文 */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">
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
              buttonClass += "bg-green-100 border-green-500 text-green-800";
            } else if (option === selectedAnswer && option !== question.answer) {
              buttonClass += "bg-red-100 border-red-500 text-red-800";
            } else {
              buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
            }
          } else {
            if (option === selectedAnswer) {
              buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
            } else {
              buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showAnswer && onAnswer(option)}
              disabled={showAnswer}
              className={buttonClass}
            >
              <span className="font-bold mr-2">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* 解答と豆知識 */}
      {showAnswer && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="mb-3">
            <h3 className="font-bold text-green-700 mb-2">✅ 正解: {question.answer}</h3>
            <p className="text-gray-700 mb-3">{question.explanation}</p>
          </div>
          <div className="border-t pt-3">
            <h4 className="font-bold text-blue-700 mb-2">💡 豆知識</h4>
            <p className="text-gray-700">{question.funFact}</p>
          </div>
        </div>
      )}
    </div>
  );
}