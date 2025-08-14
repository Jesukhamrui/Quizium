import React from 'react';

const SubjectSelection = ({ selectSubject }) => {
  const subjects = [
    'Web Development',
    'Programming Languages',
    'Data Structures',
    'Operating Systems',
    'Computer Networks',
    'Algorithms'
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Choose Your Subject</h2>
      <p className="text-gray-300 mb-8">Select a computer science topic to test your knowledge</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
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
};

export default SubjectSelection;