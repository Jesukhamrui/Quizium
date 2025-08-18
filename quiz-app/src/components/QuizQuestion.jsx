import React, { useState, useRef } from 'react';
import { questionBanks } from '../data/questions';

const QuizApp = () => {
  const [gameState, setGameState] = useState('start'); // start, subjectSelection, quiz, result, certificate
  const [selectedSubject, setSelectedSubject] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const certificateRef = useRef(null);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

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

  const startQuiz = () => {
    if (!playerName.trim()) {
      alert('Please enter your name');
      return;
    }
    setGameState('subjectSelection');
  };

  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    const shuffledQuestions = shuffleArray(questionBanks[subject]).slice(0, 10);
    setQuestions(shuffledQuestions);
    setGameState('quiz');
  };

  const selectOption = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    const newAnswer = {
      question: currentQuestion.question,
      userAnswer: selectedOption,
      correctAnswer: currentQuestion.correctAnswer
    };
    
    setUserAnswers(prev => [...prev, newAnswer]);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const generateCertificate = () => {
    setGameState('certificate');
  };

  const downloadCertificate = () => {
    if (certificateRef.current) {
      // Create a canvas to convert the certificate to image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      canvas.width = 800;
      canvas.height = 600;
      
      // Fill background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 800, 600);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 600);
      
      // Add border
      ctx.strokeStyle = '#4ecdc4';
      ctx.lineWidth = 5;
      ctx.strokeRect(20, 20, 760, 560);
      
      // Add decorative border
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, 720, 520);
      
      // Add text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Certificate of Achievement', 400, 120);
      
      ctx.font = '24px Arial';
      ctx.fillText('This certifies that', 400, 180);
      
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#4ecdc4';
      ctx.fillText(playerName, 400, 240);
      
      ctx.font = '24px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`has successfully completed the ${selectedSubject} Quiz`, 400, 300);
      
      ctx.fillText(`with a score of ${score}/${questions.length}`, 400, 340);
      
      const gradeInfo = determineGrade();
      ctx.font = 'bold 28px Arial';
      ctx.fillStyle = gradeInfo.color;
      ctx.fillText(`Grade: ${gradeInfo.grade}`, 400, 400);
      
      ctx.font = '18px Arial';
      ctx.fillStyle = '#cccccc';
      ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, 400, 480);
      
      // Download the image
      const link = document.createElement('a');
      link.download = `${playerName}_${selectedSubject}_Certificate.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const restart = () => {
    setGameState('start');
    setSelectedSubject('');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
  };

  const renderStartScreen = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">🎓  Quiz Challenge</h2>
      <p className="text-lg text-gray-300 mb-8">Test your knowledge across various  subjects!</p>
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
  
  
  const renderSubjectSelection = (questionBanks, selectSubject) => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Choose Your Subject</h2>
      <p className="text-gray-300 mb-8">Select a  topic to test your knowledge</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(questionBanks).map((subject) => (
          <button
            key={subject}
            onClick={() => selectSubject(subject)}
            className="bg-gray-700 hover:bg-cyan-400 hover:text-gray-900 text-white p-6 rounded-lg border-2 border-gray-600 hover:border-cyan-400 transition-all transform hover:scale-105 text-lg font-medium"
          >
            {subject === 'Web Development' && '🌐 '}
            {subject === 'Programming Languages' && '💻 '}
            {subject === 'Data Structures' && '📊 '}
            {subject === 'Operating Systems' && '⚙️ '}
            {subject === 'Computer Networks' && '🔗 '}
            {subject === 'Algorithms' && '🧮 '}
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
  
  const renderQuiz = (questions, currentQuestionIndex, selectedSubject, selectOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    // ...existing code...
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
  
  const renderResult = (score, questions, playerName, selectedSubject, determineGrade, generateCertificate, restart) => {
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
          <p className="text-lg text-gray-300 mb-2">{gradeInfo.message}</p>
        </div>
        <button
          onClick={generateCertificate}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors transform hover:scale-105 mb-4"
        >
          Generate Certificate 🏆
        </button>
        <button
          onClick={restart}
          className="bg-gray-700 hover:bg-gray-800 text-gray-300 font-semibold px-8 py-4 rounded-full text-lg transition-colors transform hover:scale-105"
        >
          Restart Quiz
        </button>
      </div>
    );
  };
  
  const renderCertificate = (certificateRef, playerName, selectedSubject, score, questions, determineGrade, downloadCertificate, restart) => {
    const gradeInfo = determineGrade();
    return (
      <div ref={certificateRef} className="text-center bg-gray-900 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">🏆 Certificate of Achievement</h2>
        <p className="text-xl text-gray-300 mb-2">This certifies that</p>
        <div className="text-2xl font-bold text-cyan-400 mb-2">{playerName}</div>
        <p className="text-lg text-gray-300 mb-2">
          has successfully completed the <span className="text-purple-400 font-semibold">{selectedSubject}</span> Quiz
        </p>
        <p className="text-lg text-gray-300 mb-2">
          with a score of <span className="font-bold text-cyan-400">{score}/{questions.length}</span>
        </p>
        <div className="text-xl font-bold mb-2" style={{ color: gradeInfo.color }}>
          Grade: {gradeInfo.grade}
        </div>
        <p className="text-lg text-gray-300 mb-2">{gradeInfo.message}</p>
        <p className="text-gray-400 mb-4">Date: {new Date().toLocaleDateString()}</p>
        <button
          onClick={downloadCertificate}
          className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-colors transform hover:scale-105 mb-4"
        >
          Download Certificate
        </button>
        <button
          onClick={restart}
          className="bg-gray-700 hover:bg-gray-800 text-gray-300 font-semibold px-8 py-4 rounded-full text-lg transition-colors transform hover:scale-105"
        >
          Restart Quiz
        </button>
      </div>
    );
  };
  
  // Replace the return statement with updated calls to helper functions
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-2xl p-8">
        {gameState === 'start' && renderStartScreen()}
        {gameState === 'subjectSelection' && renderSubjectSelection(questionBanks, selectSubject)}
        {gameState === 'quiz' && renderQuiz(questions, currentQuestionIndex, selectedSubject, selectOption)}
        {gameState === 'result' && renderResult(score, questions, playerName, selectedSubject, determineGrade, generateCertificate, restart)}
        {gameState === 'certificate' && renderCertificate(certificateRef, playerName, selectedSubject, score, questions, determineGrade, downloadCertificate, restart)}
      </div>
    </div>
  );
};

export default QuizApp;
