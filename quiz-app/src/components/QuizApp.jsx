import React, { useState, useRef } from 'react';
import { questionBanks } from '../data/questions';
import StartScreen from './StartScreen';
import SubjectSelection from './SubjectSelection';
import QuizQuestion from './QuizQuestion';
import ResultScreen from './ResultScreen';
import Certificate from './Certificate';

const QuizApp = () => {
  const [gameState, setGameState] = useState('start');
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
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = 800;
      canvas.height = 600;
      
      const gradient = ctx.createLinearGradient(0, 0, 800, 600);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 600);
      
      ctx.strokeStyle = '#4ecdc4';
      ctx.lineWidth = 5;
      ctx.strokeRect(20, 20, 760, 560);
      
      ctx.strokeStyle = '#ff6b6b';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, 720, 520);
      
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

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl min-h-[650px] bg-gray-900 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purplesetf-500 to-pink-400 rounded-2xl opacity-75 animate-pulse"></div>
        <div className="absolute inset-1 bg-gray-900 rounded-xl"></div>
        
        <div className="relative z-10 p-8 h-full">
          {gameState === 'start' && (
            <StartScreen 
              playerName={playerName} 
              setPlayerName={setPlayerName} 
              startQuiz={startQuiz} 
            />
          )}
          {gameState === 'subjectSelection' && (
            <SubjectSelection 
              selectSubject={selectSubject} 
            />
          )}
          {gameState === 'quiz' && (
            <QuizQuestion 
              currentQuestion={questions[currentQuestionIndex]}
              currentQuestionIndex={currentQuestionIndex}
              questions={questions}
              selectOption={selectOption}
              selectedSubject={selectedSubject}
              onExitQuiz={() => {
                setGameState('subjectSelection');
                setQuestions([]);
                setCurrentQuestionIndex(0);
                setScore(0);
                setUserAnswers([]);
              }}
            />
          )}
          {gameState === 'result' && (
            <ResultScreen 
              score={score}
              questions={questions}
              userAnswers={userAnswers}
              generateCertificate={generateCertificate}
              restart={restart}
              playerName={playerName}
              selectedSubject={selectedSubject}
            />
          )}
          {gameState === 'certificate' && (
            <Certificate 
              score={score}
              questions={questions}
              playerName={playerName}
              selectedSubject={selectedSubject}
              downloadCertificate={downloadCertificate}
              restart={restart}
              certificateRef={certificateRef}
            />
          )}
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.75;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #4ecdc4;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #45b7b8;
        }
      `}</style>
    </div>
  );
};

export default QuizApp;
