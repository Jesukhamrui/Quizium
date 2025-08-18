import React from 'react';

const StartScreen = ({ playerName, setPlayerName, startQuiz }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">🎓  Quiz Challenge</h2>
      <p className="text-lg text-gray-300 mb-8">Test your knowledge across various subjects!</p>
      <div className="space-y-6">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          className="w-full max-w-md mx-auto block px-6 py-4 text-lg bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
        />
        <button
          onClick={startQuiz}
          className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-colors transform hover:scale-105"
        >
          Start Quiz Journey 🚀
        </button>
      </div>
    </div>
  );
};

export default StartScreen;