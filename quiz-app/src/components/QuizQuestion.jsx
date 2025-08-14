import React, { useState, useRef } from 'react';

const questionBanks = {
  'Web Development': [
    // ...existing questions...
  ],
  'Programming Languages': [
    // ...existing questions...
  ],
  'Data Structures': [
    // ...existing questions...
  ],
  'Operating Systems': [
    // ...existing questions...
  ],
  'Computer Networks': [
    // ...existing questions...
  ],
  'Algorithms': [
    // ...existing questions...
  ],

  
  'Computer Architecture': [
    { question: "What is the basic unit of a computer's CPU?", options: ["Register", "Cache", "ALU", "RAM"], correctAnswer: "ALU" },
    { question: "Which memory is directly accessible by the CPU?", options: ["RAM", "ROM", "Cache", "Hard Disk"], correctAnswer: "Cache" },
    { question: "What does 'RISC' stand for?", options: ["Reduced Instruction Set Computer", "Random Integrated System Chip", "Rapid Instruction Set Computer", "Reliable Integrated System Chip"], correctAnswer: "Reduced Instruction Set Computer" },
    { question: "Which component performs arithmetic and logic operations?", options: ["ALU", "CU", "RAM", "ROM"], correctAnswer: "ALU" },
    { question: "What is the function of the control unit?", options: ["Directs operations of the processor", "Stores data", "Performs calculations", "Manages input/output"], correctAnswer: "Directs operations of the processor" },
    { question: "Which bus connects CPU to memory?", options: ["Data bus", "Address bus", "Control bus", "All of the above"], correctAnswer: "All of the above" },
    { question: "What is pipelining in CPU architecture?", options: ["Executing multiple instructions simultaneously", "Storing data in cache", "Increasing clock speed", "Connecting multiple CPUs"], correctAnswer: "Executing multiple instructions simultaneously" },
    { question: "Which type of memory is non-volatile?", options: ["ROM", "RAM", "Cache", "Register"], correctAnswer: "ROM" },
    { question: "What is the purpose of a register?", options: ["Temporary data storage in CPU", "Permanent data storage", "External storage", "Network communication"], correctAnswer: "Temporary data storage in CPU" },
    { question: "Which architecture uses fewer instructions?", options: ["RISC", "CISC", "MISC", "SISC"], correctAnswer: "RISC" }
  ],
  'Databases': [
    { question: "What is a database?", options: ["A collection of organized data", "A programming language", "A hardware device", "An operating system"], correctAnswer: "A collection of organized data" },
    { question: "Which language is used to manage databases?", options: ["SQL", "HTML", "CSS", "Python"], correctAnswer: "SQL" },
    { question: "What is a table in a database?", options: ["A collection of rows and columns", "A single value", "A function", "A query"], correctAnswer: "A collection of rows and columns" },
    { question: "What is a primary key?", options: ["A unique identifier for a record", "A duplicate value", "A foreign key", "A column with NULL values"], correctAnswer: "A unique identifier for a record" },
    { question: "Which database model organizes data in tables?", options: ["Relational", "Hierarchical", "Network", "Object-oriented"], correctAnswer: "Relational" },
    { question: "What is normalization?", options: ["Organizing data to reduce redundancy", "Increasing redundancy", "Creating indexes", "Backing up data"], correctAnswer: "Organizing data to reduce redundancy" },
    { question: "Which command is used to retrieve data?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correctAnswer: "SELECT" },
    { question: "What is a foreign key?", options: ["A key that links two tables", "A key that is always unique", "A key that is never NULL", "A key used for indexing"], correctAnswer: "A key that links two tables" },
    { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], correctAnswer: "MongoDB" },
    { question: "Which SQL clause is used to filter results?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], correctAnswer: "WHERE" }
  ],
  'Artificial Intelligence': [
    { question: "What is Artificial Intelligence?", options: ["Simulation of human intelligence by machines", "A programming language", "A type of hardware", "A database system"], correctAnswer: "Simulation of human intelligence by machines" },
    { question: "Which of the following is a branch of AI?", options: ["Machine Learning", "Web Development", "Database Management", "Networking"], correctAnswer: "Machine Learning" },
    { question: "What is the Turing Test used for?", options: ["Testing machine intelligence", "Testing software speed", "Testing database performance", "Testing network security"], correctAnswer: "Testing machine intelligence" },
    { question: "Which language is popular for AI programming?", options: ["Python", "HTML", "CSS", "PHP"], correctAnswer: "Python" },
    { question: "What is an expert system?", options: ["A computer system that emulates decision-making of a human expert", "A database system", "A web server", "A network protocol"], correctAnswer: "A computer system that emulates decision-making of a human expert" },
    { question: "What is natural language processing?", options: ["Interaction between computers and human language", "Image processing", "Database management", "Network communication"], correctAnswer: "Interaction between computers and human language" },
    { question: "Which of the following is a type of AI?", options: ["Weak AI", "Strong AI", "Both", "None"], correctAnswer: "Both" },
    { question: "What is a neural network?", options: ["A computing system inspired by the human brain", "A network protocol", "A database model", "A web framework"], correctAnswer: "A computing system inspired by the human brain" },
    { question: "Which AI technique is used for learning from data?", options: ["Machine Learning", "Database Management", "Web Development", "Networking"], correctAnswer: "Machine Learning" },
    { question: "What is the goal of AI?", options: ["To create intelligent machines", "To build websites", "To manage databases", "To secure networks"], correctAnswer: "To create intelligent machines" }
  ],
  'Cybersecurity': [
    { question: "What is cybersecurity?", options: ["Protection of computer systems from theft or damage", "Building websites", "Programming languages", "Database management"], correctAnswer: "Protection of computer systems from theft or damage" },
    { question: "What is a firewall?", options: ["A network security device", "A programming language", "A database", "A web server"], correctAnswer: "A network security device" },
    { question: "What does 'phishing' mean?", options: ["Fraudulent attempt to obtain sensitive information", "Building websites", "Programming", "Database management"], correctAnswer: "Fraudulent attempt to obtain sensitive information" },
    { question: "What is malware?", options: ["Malicious software", "A programming language", "A database", "A web server"], correctAnswer: "Malicious software" },
    { question: "What is encryption?", options: ["Converting data into a secure format", "Building websites", "Programming", "Database management"], correctAnswer: "Converting data into a secure format" },
    { question: "What is a VPN?", options: ["Virtual Private Network", "Very Powerful Network", "Virtual Public Network", "Verified Private Network"], correctAnswer: "Virtual Private Network" },
    { question: "What is two-factor authentication?", options: ["Using two methods to verify identity", "Using two passwords", "Using two databases", "Using two servers"], correctAnswer: "Using two methods to verify identity" },
    { question: "What is a DDoS attack?", options: ["Distributed Denial of Service", "Database Denial of Service", "Domain Denial of Service", "Data Denial of Service"], correctAnswer: "Distributed Denial of Service" },
    { question: "What is the purpose of antivirus software?", options: ["Detect and remove malware", "Build websites", "Manage databases", "Program computers"], correctAnswer: "Detect and remove malware" },
    { question: "What is social engineering?", options: ["Manipulating people to gain confidential information", "Building websites", "Programming", "Database management"], correctAnswer: "Manipulating people to gain confidential information" }
  ],
  'Cloud Computing': [
    { question: "What is cloud computing?", options: ["Delivery of computing services over the internet", "Building websites", "Programming languages", "Database management"], correctAnswer: "Delivery of computing services over the internet" },
    { question: "Which of the following is a cloud service model?", options: ["IaaS", "PaaS", "SaaS", "All of the above"], correctAnswer: "All of the above" },
    { question: "What does SaaS stand for?", options: ["Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service"], correctAnswer: "Software as a Service" },
    { question: "Which company provides AWS?", options: ["Amazon", "Google", "Microsoft", "IBM"], correctAnswer: "Amazon" },
    { question: "What is virtualization?", options: ["Creating virtual versions of resources", "Building websites", "Programming", "Database management"], correctAnswer: "Creating virtual versions of resources" },
    { question: "What is a public cloud?", options: ["Cloud services offered over the public internet", "Private cloud", "Hybrid cloud", "Community cloud"], correctAnswer: "Cloud services offered over the public internet" },
    { question: "What is the main benefit of cloud computing?", options: ["Scalability", "Building websites", "Programming", "Database management"], correctAnswer: "Scalability" },
    { question: "What is a private cloud?", options: ["Cloud infrastructure operated solely for one organization", "Public cloud", "Hybrid cloud", "Community cloud"], correctAnswer: "Cloud infrastructure operated solely for one organization" },
    { question: "What is multi-tenancy in cloud computing?", options: ["Multiple users sharing the same resources", "Single user access", "Multiple databases", "Multiple servers"], correctAnswer: "Multiple users sharing the same resources" },
    { question: "Which of the following is NOT a cloud provider?", options: ["AWS", "Azure", "Google Cloud", "Oracle Database"], correctAnswer: "Oracle Database" }
  ],
  'Software Engineering': [
    { question: "What is software engineering?", options: ["Application of engineering to software development", "Building websites", "Programming languages", "Database management"], correctAnswer: "Application of engineering to software development" },
    { question: "Which model is known as the classic life cycle model?", options: ["Waterfall", "Agile", "Spiral", "V-Model"], correctAnswer: "Waterfall" },
    { question: "What is the first phase of SDLC?", options: ["Requirement analysis", "Design", "Implementation", "Testing"], correctAnswer: "Requirement analysis" },
    { question: "What does UML stand for?", options: ["Unified Modeling Language", "Universal Modeling Language", "Unified Markup Language", "Universal Markup Language"], correctAnswer: "Unified Modeling Language" },
    { question: "What is agile methodology?", options: ["Iterative and incremental development", "Linear development", "Waterfall model", "Spiral model"], correctAnswer: "Iterative and incremental development" },
    { question: "What is version control?", options: ["Managing changes to source code", "Building websites", "Programming", "Database management"], correctAnswer: "Managing changes to source code" },
    { question: "Which tool is commonly used for version control?", options: ["Git", "Python", "HTML", "CSS"], correctAnswer: "Git" },
    { question: "What is refactoring?", options: ["Improving code without changing its functionality", "Building websites", "Programming", "Database management"], correctAnswer: "Improving code without changing its functionality" },
    { question: "What is a software requirement?", options: ["A condition that must be met by software", "A programming language", "A database", "A web server"], correctAnswer: "A condition that must be met by software" },
    { question: "What is software testing?", options: ["Process of evaluating software for errors", "Building websites", "Programming", "Database management"], correctAnswer: "Process of evaluating software for errors" }
  ],
  'Machine Learning': [
    { question: "What is machine learning?", options: ["A field of AI that enables computers to learn from data", "Building websites", "Programming languages", "Database management"], correctAnswer: "A field of AI that enables computers to learn from data" },
    { question: "Which of the following is a type of machine learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "All of the above"], correctAnswer: "All of the above" },
    { question: "What is a dataset?", options: ["A collection of data", "A programming language", "A database", "A web server"], correctAnswer: "A collection of data" },
    { question: "What is a feature in machine learning?", options: ["An individual measurable property of data", "A programming language", "A database", "A web server"], correctAnswer: "An individual measurable property of data" },
    { question: "What is overfitting?", options: ["Model fits training data too well and fails to generalize", "Model fits data poorly", "Model is too simple", "Model is too complex"], correctAnswer: "Model fits training data too well and fails to generalize" },
    { question: "Which algorithm is used for classification?", options: ["Decision Tree", "Linear Regression", "K-Means", "Apriori"], correctAnswer: "Decision Tree" },
    { question: "What is regression in machine learning?", options: ["Predicting continuous values", "Predicting categories", "Clustering data", "Reducing data"], correctAnswer: "Predicting continuous values" },
    { question: "What is a neural network?", options: ["A computing system inspired by the human brain", "A network protocol", "A database model", "A web framework"], correctAnswer: "A computing system inspired by the human brain" },
    { question: "What is the purpose of training data?", options: ["To teach the model patterns", "To test the model", "To validate the model", "To deploy the model"], correctAnswer: "To teach the model patterns" },
    { question: "What is a confusion matrix?", options: ["A table used to evaluate classification models", "A database table", "A web page", "A network diagram"], correctAnswer: "A table used to evaluate classification models" }
  ]
};
questionBanks['DBMS'] = [
    { question: "What does DBMS stand for?", options: ["Database Management System", "Data Base Model System", "Data Management System", "Database Modeling System"], correctAnswer: "Database Management System" },
    { question: "Which language is used to query databases?", options: ["SQL", "HTML", "Python", "C++"], correctAnswer: "SQL" },
    { question: "Which of the following is NOT a type of database model?", options: ["Hierarchical", "Network", "Relational", "Procedural"], correctAnswer: "Procedural" },
    { question: "What is a primary key?", options: ["A unique identifier for a record", "A foreign key", "A duplicate value", "A column with NULL values"], correctAnswer: "A unique identifier for a record" },
    { question: "Which command is used to remove all records from a table in SQL?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correctAnswer: "TRUNCATE" },
    { question: "What is normalization?", options: ["Organizing data to reduce redundancy", "Increasing redundancy", "Creating indexes", "Backing up data"], correctAnswer: "Organizing data to reduce redundancy" },
    { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], correctAnswer: "MongoDB" },
    { question: "What is a foreign key?", options: ["A key that links two tables", "A key that is always unique", "A key that is never NULL", "A key used for indexing"], correctAnswer: "A key that links two tables" },
    { question: "Which SQL clause is used to filter results?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], correctAnswer: "WHERE" },
    { question: "Which of the following is an ACID property?", options: ["Atomicity", "Consistency", "Isolation", "All of the above"], correctAnswer: "All of the above" }
];

questionBanks['C++'] = [
    { question: "Who developed C++?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"], correctAnswer: "Bjarne Stroustrup" },
    { question: "Which of the following is used to define a class in C++?", options: ["class", "struct", "object", "define"], correctAnswer: "class" },
    { question: "What is the default access specifier for class members in C++?", options: ["private", "public", "protected", "internal"], correctAnswer: "private" },
    { question: "Which operator is used for object dereferencing?", options: ["->", ".", "::", "&"], correctAnswer: "->" },
    { question: "What is function overloading?", options: ["Same function name with different parameters", "Same function name with same parameters", "Different function names", "None of the above"], correctAnswer: "Same function name with different parameters" },
    { question: "Which header file is required for input/output operations?", options: ["iostream", "stdio.h", "conio.h", "math.h"], correctAnswer: "iostream" },
    { question: "What is the use of 'new' keyword?", options: ["Dynamic memory allocation", "Static memory allocation", "Function declaration", "Class definition"], correctAnswer: "Dynamic memory allocation" },
    { question: "Which of the following is not a C++ data type?", options: ["float", "double", "real", "int"], correctAnswer: "real" },
    { question: "What is the scope resolution operator?", options: ["::", ".", "->", ":"], correctAnswer: "::" },
    { question: "Which of the following is used to prevent inheritance?", options: ["final", "static", "const", "virtual"], correctAnswer: "final" }
];

questionBanks['Python'] = [
    { question: "Who developed Python?", options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], correctAnswer: "Guido van Rossum" },
    { question: "Which of the following is used to define a function in Python?", options: ["def", "function", "fun", "define"], correctAnswer: "def" },
    { question: "What is the output of print(2 ** 3)?", options: ["8", "6", "9", "5"], correctAnswer: "8" },
    { question: "Which of the following is a mutable data type?", options: ["list", "tuple", "str", "int"], correctAnswer: "list" },
    { question: "How do you start a comment in Python?", options: ["#", "//", "/*", "--"], correctAnswer: "#" },
    { question: "Which keyword is used for exception handling?", options: ["try", "catch", "except", "finally"], correctAnswer: "try" },
    { question: "What is the output of len('Python')?", options: ["6", "5", "7", "8"], correctAnswer: "6" },
    { question: "Which of the following is used to import a module?", options: ["import", "include", "require", "using"], correctAnswer: "import" },
    { question: "What is the result of 10 // 3?", options: ["3", "3.33", "4", "0"], correctAnswer: "3" },
    { question: "Which of the following is a Python web framework?", options: ["Django", "Spring", "Rails", "Laravel"], correctAnswer: "Django" }
];

questionBanks['JavaScript'] = [
    { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Google", "Apple"], correctAnswer: "Netscape" },
    { question: "Which symbol is used for single-line comments?", options: ["//", "#", "/*", "--"], correctAnswer: "//" },
    { question: "Which method is used to parse a string to integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInt()"], correctAnswer: "parseInt()" },
    { question: "Which keyword is used to declare a variable with block scope?", options: ["let", "var", "const", "static"], correctAnswer: "let" },
    { question: "What is the output of '2' + 2?", options: ["22", "4", "NaN", "Error"], correctAnswer: "22" },
    { question: "Which function is used to execute code after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], correctAnswer: "setTimeout()" },
    { question: "Which object is used for browser storage?", options: ["localStorage", "sessionStorage", "cookie", "All of the above"], correctAnswer: "All of the above" },
    { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
    { question: "Which operator is used for strict equality?", options: ["===", "==", "=", "!=="], correctAnswer: "===" },
    { question: "Which event is triggered when a user clicks an element?", options: ["onclick", "onchange", "onload", "onhover"], correctAnswer: "onclick" }
];

questionBanks['React JS'] = [
    { question: "Who developed React JS?", options: ["Facebook", "Google", "Microsoft", "Apple"], correctAnswer: "Facebook" },
    { question: "What is a component in React?", options: ["Reusable piece of UI", "Database", "Server", "CSS file"], correctAnswer: "Reusable piece of UI" },
    { question: "Which hook is used for state management?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: "useState" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "JavaScript Extension", "Java Syntax", "JavaScript Xtra"], correctAnswer: "JavaScript XML" },
    { question: "Which method is used to render React elements?", options: ["ReactDOM.render()", "render()", "display()", "show()"], correctAnswer: "ReactDOM.render()" },
    { question: "Which hook is used for side effects?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: "useEffect" },
    { question: "How do you pass data from parent to child?", options: ["props", "state", "context", "ref"], correctAnswer: "props" },
    { question: "Which hook is used to access context?", options: ["useContext", "useState", "useEffect", "useRef"], correctAnswer: "useContext" },
    { question: "What is the default export keyword in React?", options: ["export default", "export", "module.exports", "require"], correctAnswer: "export default" },
    { question: "Which lifecycle method is called after component mounts?", options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentWillUnmount"], correctAnswer: "componentDidMount" }
];

questionBanks['NodeJS'] = [
    { question: "Who developed NodeJS?", options: ["Ryan Dahl", "Brendan Eich", "Guido van Rossum", "James Gosling"], correctAnswer: "Ryan Dahl" },
    { question: "NodeJS is based on which engine?", options: ["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"], correctAnswer: "V8" },
    { question: "Which module is used to create a server?", options: ["http", "fs", "url", "path"], correctAnswer: "http" },
    { question: "Which function is used to read a file asynchronously?", options: ["fs.readFile", "fs.readFileSync", "fs.open", "fs.writeFile"], correctAnswer: "fs.readFile" },
    { question: "Which command is used to initialize a NodeJS project?", options: ["npm init", "node init", "npm start", "node start"], correctAnswer: "npm init" },
    { question: "Which module is used for file system operations?", options: ["fs", "http", "os", "path"], correctAnswer: "fs" },
    { question: "Which method is used to export a module?", options: ["module.exports", "export", "require", "import"], correctAnswer: "module.exports" },
    { question: "Which module is used to handle paths?", options: ["path", "fs", "http", "os"], correctAnswer: "path" },
    { question: "Which method is used to install packages?", options: ["npm install", "node install", "npm add", "node add"], correctAnswer: "npm install" },
    { question: "Which module is used for creating child processes?", options: ["child_process", "process", "os", "cluster"], correctAnswer: "child_process" }
];

questionBanks['Java'] = [
    { question: "Who developed Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], correctAnswer: "James Gosling" },
    { question: "Which keyword is used to inherit a class?", options: ["extends", "implements", "inherits", "super"], correctAnswer: "extends" },
    { question: "Which method is the entry point of a Java program?", options: ["main", "start", "init", "run"], correctAnswer: "main" },
    { question: "Which keyword is used to define a constant?", options: ["final", "const", "static", "immutable"], correctAnswer: "final" },
    { question: "Which of the following is not a primitive data type?", options: ["String", "int", "float", "char"], correctAnswer: "String" },
    { question: "Which package is automatically imported in every Java program?", options: ["java.lang", "java.util", "java.io", "java.net"], correctAnswer: "java.lang" },
    { question: "Which keyword is used to create an object?", options: ["new", "create", "object", "instance"], correctAnswer: "new" },
    { question: "Which exception is thrown when dividing by zero?", options: ["ArithmeticException", "NullPointerException", "IOException", "ClassNotFoundException"], correctAnswer: "ArithmeticException" },
    { question: "Which method is used to compare strings?", options: ["equals()", "compare()", "==", "compareTo()"], correctAnswer: "equals()" },
    { question: "Which keyword is used for interface implementation?", options: ["implements", "extends", "interface", "inherit"], correctAnswer: "implements" }
];

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
    setPlayerName('');
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
      <p className="text-gray-300 mb-8">Select a computer science topic to test your knowledge</p>
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
