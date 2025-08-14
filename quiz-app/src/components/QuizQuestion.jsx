import React, { useState, useRef } from 'react';

const questionBanks = {
  'Web Development': [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperText Machine Language", "Hyper Transfer Markup Language", "HighText Markup Language"], correctAnswer: "HyperText Markup Language" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
    { question: "Which language is primarily used for web development?", options: ["JavaScript", "C#", "Python", "Java"], correctAnswer: "JavaScript" },
    { question: "What does the 'box-sizing' property do in CSS?", options: ["Sets the width of the box", "Defines how padding and border are included in the element's total width", "Changes the background color of the box", "Sets the background of the box"], correctAnswer: "Defines how padding and border are included in the element's total width" },
    { question: "What is the default value of the 'position' property in CSS?", options: ["absolute", "relative", "fixed", "static"], correctAnswer: "static" },
    { question: "What does JavaScript 'JSON' stand for?", options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Node", "JavaScript Object Number"], correctAnswer: "JavaScript Object Notation" },
    { question: "Which HTML tag is used for a line break?", options: ["<br>", "<line>", "<hr>", "<break>"], correctAnswer: "<br>" },
    { question: "Which function is used to parse a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.decode()", "JSON.toObject()"], correctAnswer: "JSON.parse()" },
    { question: "What does 'DOM' stand for in JavaScript?", options: ["Document Object Model", "Data Object Model", "Document Online Management", "Data Organization Method"], correctAnswer: "Document Object Model" },
    { question: "Which HTML tag is used to define a hyperlink?", options: ["<link>", "<a>", "<url>", "<href>"], correctAnswer: "<a>" },
    { question: "What is the purpose of a CSS 'media query'?", options: ["To change the page content", "To detect device screen size and apply styles accordingly", "To optimize images", "To load external scripts"], correctAnswer: "To detect device screen size and apply styles accordingly" },
    { question: "Which HTML element is used to embed JavaScript?", options: ["<script>", "<js>", "<javascript>", "<style>"], correctAnswer: "<script>" },
    { question: "What is the purpose of the 'let' keyword in JavaScript?", options: ["To declare a variable with block scope", "To declare a global variable", "To define a function", "To create an object"], correctAnswer: "To declare a variable with block scope" },
    { question: "What is the purpose of the 'fetch' API in JavaScript?", options: ["To make HTTP requests", "To create animations", "To manipulate the DOM", "To store data locally"], correctAnswer: "To make HTTP requests" },
    { question: "What is the purpose of the 'localStorage' object in JavaScript?", options: ["To store data locally in the browser", "To make HTTP requests", "To create animations", "To manipulate the DOM"], correctAnswer: "To store data locally in the browser" }
  ],
  'Programming Languages': [
    { question: "Which programming language is known as the mother of all languages?", options: ["C", "Java", "Assembly", "Fortran"], correctAnswer: "C" },
    { question: "What is the full form of PHP?", options: ["Personal Hypertext Processor", "Private Home Page", "Hypertext Preprocessor", "Preprocessor Hypertext Page"], correctAnswer: "Hypertext Preprocessor" },
    { question: "Which programming language is commonly used for iOS app development?", options: ["Swift", "Java", "Python", "Ruby"], correctAnswer: "Swift" },
    { question: "What is the correct syntax for declaring a C++ variable?", options: ["variable type variable_name;", "type variable_name;", "var variable_name;", "variable_name: type;"], correctAnswer: "type variable_name;" },
    { question: "Which of the following is a correct way to define a pointer in C++?", options: ["int* ptr;", "int ptr;", "ptr int*;", "pointer int;"], correctAnswer: "int* ptr;" },
    { question: "What is the function used to find the size of a variable in C++?", options: ["sizeof()", "length()", "size()", "getSize()"], correctAnswer: "sizeof()" },
    { question: "What does 'cin' do in C++?", options: ["It outputs data to the console", "It reads input from the console", "It clears the screen", "It creates a new variable"], correctAnswer: "It reads input from the console" },
    { question: "Which of the following is a C++ access modifier?", options: ["private", "public", "protected", "All of the above"], correctAnswer: "All of the above" },
    { question: "What does the 'new' keyword do in C++?", options: ["Allocates memory dynamically", "Deallocates memory dynamically", "Creates a new variable", "Increments the value of a variable"], correctAnswer: "Allocates memory dynamically" },
    { question: "Which of these operators is used for memory deallocation in C++?", options: ["free()", "delete", "remove()", "dealloc()"], correctAnswer: "delete" },
    { question: "What is the return type of the 'main' function in C++?", options: ["void", "int", "char", "None of the above"], correctAnswer: "int" },
    { question: "What is the purpose of the 'continue' statement in C++?", options: ["To skip the current iteration of a loop", "To stop the execution of a loop", "To exit from a function", "To exit the program"], correctAnswer: "To skip the current iteration of a loop" },
    { question: "Which of the following is used for function overloading in C++?", options: ["Same function name with different arguments", "Same function name with different return type", "Different function names", "None of the above"], correctAnswer: "Same function name with different arguments" },
    { question: "Which of the following C++ data types is used to store a single character?", options: ["char", "string", "int", "double"], correctAnswer: "char" },
    { question: "What is the scope of a local variable in C++?", options: ["It is limited to the function where it is declared", "It is accessible throughout the entire program", "It is accessible within the entire class", "It is global"], correctAnswer: "It is limited to the function where it is declared" }
  ],
  'Data Structures': [
    { question: "What is the primary characteristic of an array?", options: ["It has a fixed size", "It can store different data types", "It is dynamic", "It cannot store elements in sequence"], correctAnswer: "It has a fixed size" },
    { question: "Which data structure uses 'Last In First Out' (LIFO) principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: "Stack" },
    { question: "Which data structure uses 'First In First Out' (FIFO) principle?", options: ["Stack", "Queue", "Array", "Linked List"], correctAnswer: "Queue" },
    { question: "What is the time complexity of accessing an element in an array?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(1)" },
    { question: "What is a balanced binary tree?", options: ["A tree where the left and right subtrees of every node differ in height by no more than one", "A tree with no child nodes", "A tree where every node has two child nodes", "A tree where the elements are arranged in order"], correctAnswer: "A tree where the left and right subtrees of every node differ in height by no more than one" },
    { question: "What is a hash table used for?", options: ["Sorting data", "Storing key-value pairs", "Storing sorted data", "Graph traversal"], correctAnswer: "Storing key-value pairs" },
    { question: "Which of the following is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(log n)", "O(n^2)", "O(n)"], correctAnswer: "O(n^2)" },
    { question: "What is the time complexity of accessing an element in a linked list?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctAnswer: "O(n)" },
    { question: "Which data structure is used to implement a breadth-first search?", options: ["Queue", "Stack", "Binary Search Tree", "Hash Table"], correctAnswer: "Queue" },
    { question: "Which data structure is used to implement depth-first search?", options: ["Queue", "Stack", "Binary Search Tree", "Heap"], correctAnswer: "Stack" },
    { question: "What is a circular linked list?", options: ["A linked list where the last node points to the first node", "A linked list where nodes are connected in a circle", "A doubly linked list with no end", "A linked list that stores elements in a circular order"], correctAnswer: "A linked list where the last node points to the first node" },
    { question: "What is the time complexity of deleting an element from the front of a queue?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: "O(1)" },
    { question: "In a binary search tree, what is the left child of a node?", options: ["It has a value greater than the parent node", "It has a value smaller than the parent node", "It is always a leaf node", "It has the same value as the parent node"], correctAnswer: "It has a value smaller than the parent node" },
    { question: "What is the time complexity of finding an element in a hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(1)" },
    { question: "What is the space complexity of a linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: "O(n)" }
  ],
  'Operating Systems': [
    { question: "What is the primary function of an operating system?", options: ["Manage hardware resources", "Run applications", "Provide a graphical interface", "Ensure security of data"], correctAnswer: "Manage hardware resources" },
    { question: "What is a process in an operating system?", options: ["A program that is executing", "A set of related files", "A storage unit", "A type of network connection"], correctAnswer: "A program that is executing" },
    { question: "Which of the following is NOT a part of the operating system?", options: ["Kernel", "Shell", "Compiler", "File system"], correctAnswer: "Compiler" },
    { question: "What is the role of the kernel in an operating system?", options: ["Manage system resources", "Provide network access", "Run user applications", "Provide a user interface"], correctAnswer: "Manage system resources" },
    { question: "Which of the following is used for process synchronization?", options: ["Semaphore", "Queue", "Array", "Linked List"], correctAnswer: "Semaphore" },
    { question: "What is a deadlock?", options: ["A state where two or more processes are blocked and cannot proceed", "A process waiting indefinitely for resources", "A condition where resources are allocated incorrectly", "A state where memory is fragmented"], correctAnswer: "A state where two or more processes are blocked and cannot proceed" },
    { question: "Which memory management technique allows non-contiguous allocation of memory?", options: ["Paging", "Segmentation", "Fragmentation", "Stack allocation"], correctAnswer: "Paging" },
    { question: "What is virtual memory?", options: ["Memory used by the operating system", "Memory that is not physically available but simulated by the OS", "Memory used by applications only", "A type of external memory"], correctAnswer: "Memory that is not physically available but simulated by the OS" },
    { question: "Which type of scheduling algorithm assigns priority to processes?", options: ["Priority Scheduling", "Round Robin", "First Come First Serve", "Shortest Job First"], correctAnswer: "Priority Scheduling" },
    { question: "What is the purpose of the file system in an OS?", options: ["To manage processes", "To manage memory", "To store and organize files", "To ensure security of data"], correctAnswer: "To store and organize files" },
    { question: "Which of the following is a type of file system?", options: ["NTFS", "FAT32", "ext4", "All of the above"], correctAnswer: "All of the above" },
    { question: "What is a 'context switch' in an operating system?", options: ["Switching between multiple threads", "Switching between different operating systems", "Saving and loading the state of processes", "Switching from user mode to kernel mode"], correctAnswer: "Saving and loading the state of processes" },
    { question: "What is the main advantage of multi-threading?", options: ["Improves CPU utilization by using multiple threads in a process", "Increases the size of the memory", "Reduces the total number of processes", "None of the above"], correctAnswer: "Improves CPU utilization by using multiple threads in a process" },
    { question: "What is a page fault?", options: ["When a process tries to access a page that is not in memory", "When the operating system encounters an error", "When a process uses up all of its allocated memory", "When memory is fragmented"], correctAnswer: "When a process tries to access a page that is not in memory" },
    { question: "Which of the following is a method for process synchronization?", options: ["Semaphore", "Mutex", "Monitor", "All of the above"], correctAnswer: "All of the above" }
  ],
  'Computer Networks': [
    { question: "What is the primary function of the OSI model?", options: ["To describe network protocols", "To define the physical network components", "To set standards for network communication", "All of the above"], correctAnswer: "All of the above" },
    { question: "Which layer of the OSI model is responsible for routing?", options: ["Network layer", "Transport layer", "Application layer", "Data link layer"], correctAnswer: "Network layer" },
    { question: "Which protocol is used to assign IP addresses to devices on a network?", options: ["HTTP", "FTP", "DHCP", "SMTP"], correctAnswer: "DHCP" },
    { question: "What does TCP stand for?", options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transport Control Protocol", "None of the above"], correctAnswer: "Transmission Control Protocol" },
    { question: "Which protocol is used for secure communication over a network?", options: ["HTTPS", "HTTP", "FTP", "SMTP"], correctAnswer: "HTTPS" },
    { question: "Which of the following is a type of network topology?", options: ["Star", "Bus", "Ring", "All of the above"], correctAnswer: "All of the above" },
    { question: "What is the maximum length of an Ethernet frame?", options: ["1500 bytes", "2048 bytes", "1024 bytes", "4096 bytes"], correctAnswer: "1500 bytes" },
    { question: "Which of the following is a connectionless protocol?", options: ["UDP", "TCP", "FTP", "HTTP"], correctAnswer: "UDP" },
    { question: "Which device is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "Bridge"], correctAnswer: "Router" },
    { question: "What is the main function of DNS?", options: ["To route packets", "To translate domain names into IP addresses", "To encrypt data", "To filter network traffic"], correctAnswer: "To translate domain names into IP addresses" },
    { question: "Which of these is a secure communication protocol?", options: ["FTP", "HTTP", "HTTPS", "Telnet"], correctAnswer: "HTTPS" },
    { question: "What does IP stand for in networking?", options: ["Internet Protocol", "Internal Protocol", "Interface Protocol", "Information Protocol"], correctAnswer: "Internet Protocol" },
    { question: "Which port is commonly used for HTTP traffic?", options: ["21", "25", "80", "443"], correctAnswer: "80" },
    { question: "What is the purpose of a subnet mask?", options: ["To hide network addresses", "To identify network and host portions of an IP address", "To encrypt network traffic", "To route packets"], correctAnswer: "To identify network and host portions of an IP address" },
    { question: "Which of the following is a private IP address range?", options: ["192.168.x.x", "172.16.x.x", "10.x.x.x", "All of the above"], correctAnswer: "All of the above" }
  ],
  'Algorithms': [
    { question: "What is the time complexity of binary search in a sorted array?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correctAnswer: "O(log n)" },
    { question: "Which algorithm is used for sorting an array in the least amount of time on average?", options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"], correctAnswer: "Quick Sort" },
    { question: "What is the best case time complexity of merge sort?", options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], correctAnswer: "O(n log n)" },
    { question: "What does the term 'NP-complete' refer to?", options: ["A class of problems that are both NP and NP-hard", "A problem that is solvable in polynomial time", "A problem that has no solution", "A problem that is solvable in exponential time"], correctAnswer: "A class of problems that are both NP and NP-hard" },
    { question: "What is the time complexity of the Dijkstra algorithm for finding the shortest path?", options: ["O(n log n)", "O(n^2)", "O(n^3)", "O(log n)"], correctAnswer: "O(n^2)" },
    { question: "Which algorithm is used for finding the minimum spanning tree of a graph?", options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Floyd-Warshall", "Bellman-Ford"], correctAnswer: "Prim's Algorithm" },
    { question: "What is the time complexity of the brute force approach for the traveling salesman problem?", options: ["O(n^2)", "O(n!)", "O(n log n)", "O(n^3)"], correctAnswer: "O(n!)" },
    { question: "Which of the following is NOT a divide-and-conquer algorithm?", options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Binary Search"], correctAnswer: "Insertion Sort" },
    { question: "What does 'Big O' notation represent?", options: ["Time complexity", "Space complexity", "Worst-case scenario", "All of the above"], correctAnswer: "All of the above" },
    { question: "What is the time complexity of the bubble sort algorithm?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correctAnswer: "O(n^2)" },
    { question: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"], correctAnswer: "Merge Sort" },
    { question: "What is the space complexity of merge sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correctAnswer: "O(n)" },
    { question: "Which algorithm is used for topological sorting?", options: ["DFS", "BFS", "Dijkstra", "Prim's"], correctAnswer: "DFS" },
    { question: "What is the time complexity of heap sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correctAnswer: "O(n log n)" },
    { question: "Which data structure is optimal for implementing Dijkstra's algorithm?", options: ["Queue", "Stack", "Priority Queue", "Hash Table"], correctAnswer: "Priority Queue" }
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