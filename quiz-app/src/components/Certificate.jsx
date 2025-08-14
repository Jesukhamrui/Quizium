import React, { useRef } from 'react';

const Certificate = ({ score, questions, playerName, selectedSubject, downloadCertificate, restart }) => {
  const certificateRef = useRef(null);
  
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
      <div
        ref={certificateRef}
        className="bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-cyan-400 rounded-xl p-12 mx-auto max-w-2xl shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          boxShadow: '0 0 50px rgba(78, 205, 196, 0.3)'
        }}
      >
        <div className="border-2 border-pink-400 rounded-lg p-8">
          <div className="text-center space-y-6">
            <div className="text-6xl">🏆</div>
            <h1 className="text-4xl font-bold text-white">Certificate of Achievement</h1>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded"></div>
            
            <p className="text-lg text-gray-300">This certifies that</p>
            
            <h2 className="text-3xl font-bold text-cyan-400">{playerName}</h2>
            
            <p className="text-lg text-gray-300">
              has successfully completed the <br />
              <span className="text-purple-400 font-bold text-xl">{selectedSubject}</span> Quiz
            </p>
            
            <div className="space-y-2">
              <p className="text-xl text-white">
                Score: <span className="font-bold">{score}/{questions.length}</span> ({percentage}%)
              </p>
              <p className="text-2xl font-bold" style={{ color: gradeInfo.color }}>
                Grade: {gradeInfo.grade}
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                Awarded on {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <div className="mt-4 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="h-px bg-gray-400 w-24 mx-auto mb-1"></div>
                  <p className="text-xs text-gray-400">Computer Science Quiz</p>
                </div>
                <div className="text-center">
                  <div className="h-px bg-gray-400 w-24 mx-auto mb-1"></div>
                  <p className="text-xs text-gray-400">Achievement Authority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-x-4">
          <button
            onClick={downloadCertificate}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105"
          >
            📱 Download Certificate
          </button>
          <button
            onClick={restart}
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105"
          >
            🔄 Take Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;