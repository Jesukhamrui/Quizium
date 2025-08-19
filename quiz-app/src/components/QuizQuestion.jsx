import React from 'react';

const QuizQuestion = ({ currentQuestion, currentQuestionIndex, questions, selectOption, selectedSubject, onExitQuiz }) => {
  if (!currentQuestion) return null;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-cyan-400 font-medium">{selectedSubject}</span>
          <span className="text-gray-300">Question {currentQuestionIndex + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-white mb-8 leading-relaxed">
          {currentQuestion.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectOption(option)}
              className="bg-transparent border-2 border-gray-600 text-gray-300 p-4 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all transform hover:scale-105 text-left"
            >
              <span className="font-medium text-cyan-400 mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          ))}
        </div>
        <button
          className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all"
          onClick={typeof onExitQuiz === 'function' ? onExitQuiz : undefined}
        >
          Exit Quiz / Back to Subjects
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
