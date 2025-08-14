import React from 'react';

const ResultScreen = ({ score, questions, userAnswers, generateCertificate, restart, playerName, selectedSubject }) => {
  const determineGrade = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage < 30) {
      return { grade: "Needs Improvement", message: "Keep studying! You can do better next time.", color: "#ff6b6b" };
    } else if (percentage < 50) {
      return { grade: "Fair", message: "You're making progress! Keep learning.", color: "#ffa726" };
    } else if (percentage < 70) {
      return { grade: "Good", message: "Well done! You're getting better.", color: "#66bb6a" };
    } else if (percentage < 90) {
      return { grade: "Excellent", message: "Great work! You really know your stuff.", color: "#42a5f5" };
    } else {
      return { grade: "Outstanding", message: "Perfect performance! You're a quiz master!", color: "#ab47bc" };
    }
  };

  const gradeInfo = determineGrade();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">🎉 Quiz Completed!</h2>
        <p className="text-xl text-gray-300 mb-2">Congratulations, <span className="text-cyan-400 font-bold">{playerName}</span>!</p>
        <p className="text-lg text-gray-300">Subject: <span className="text-purple-400 font-semibold">{selectedSubject}</span></p>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-8 mb-8">
        <div className="text-6xl font-bold mb-4" style={{ color: gradeInfo.color }}>
          {score}/{questions.length}
        </div>
        <div className="text-2xl font-bold mb-2" style={{ color: gradeInfo.color }}>
          {percentage}% - {gradeInfo.grade}
        </div>
        <p className="text-lg text-gray-300">{gradeInfo.message}</p>
      </div>
      
      <div className="space-x-4 mb-8">
        <button
          onClick={generateCertificate}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105"
        >
          🏆 Get Certificate
        </button>
        <button
          onClick={restart}
          className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105"
        >
          🔄 Take Another Quiz
        </button>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">📝 Answer Review</h3>
        <div className="max-h-64 overflow-y-auto space-y-3">
          {userAnswers.map((qa, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-left">
              <p className="text-white font-medium mb-2">
                <span className="text-cyan-400">Q{index + 1}:</span> {qa.question}
              </p>
              <div className="space-y-1">
                <p>
                  <span className="text-gray-300">Your Answer:</span>{' '}
                  <span className={qa.userAnswer === qa.correctAnswer ? "text-green-400" : "text-red-400"}>
                    {qa.userAnswer}
                  </span>
                  {qa.userAnswer === qa.correctAnswer ? ' ✅' : ' ❌'}
                </p>
                {qa.userAnswer !== qa.correctAnswer && (
                  <p>
                    <span className="text-gray-300">Correct Answer:</span>{' '}
                    <span className="text-green-400">{qa.correctAnswer}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;