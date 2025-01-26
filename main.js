// Description: This file contains the main logic for the quiz application.
        const questions = [
            // General Knowledge (Group 1)
            // Technology (Group 3)
            { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperText Machine Language", "Hyper Transfer Markup Language", "HighText Markup Language"], correctAnswer: "HyperText Markup Language" },
            { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
            { question: "Which programming language is known as the mother of all languages?", options: ["C", "Java", "Assembly", "Fortran"], correctAnswer: "C" },
            { question: "Which language is primarily used for web development?", options: ["JavaScript", "C#", "Python", "Java"], correctAnswer: "JavaScript" },
            { question: "What is the full form of PHP?", options: ["Personal Hypertext Processor", "Private Home Page", "Hypertext Preprocessor", "Preprocessor Hypertext Page"], correctAnswer: "Hypertext Preprocessor" },
            { question: "Which of the following is a Python web framework?", options: ["Flask", "Laravel", "Django", "React"], correctAnswer: "Django" },
            { question: "What does the 'box-sizing' property do in CSS?", options: ["Sets the width of the box", "Defines how padding and border are included in the element's total width", "Changes the background color of the box", "Sets the background of the box"], correctAnswer: "Defines how padding and border are included in the element's total width" },
            { question: "What is the default value of the 'position' property in CSS?", options: ["absolute", "relative", "fixed", "static"], correctAnswer: "static" },
            { question: "What does JavaScript 'JSON' stand for?", options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Node", "JavaScript Object Number"], correctAnswer: "JavaScript Object Notation" },
            { question: "What is a closure in JavaScript?", options: ["A function defined within another function", "A loop in JavaScript", "A callback function", "A type of data structure"], correctAnswer: "A function defined within another function" },
            { question: "Which programming language is commonly used for iOS app development?", options: ["Swift", "Java", "Python", "Ruby"], correctAnswer: "Swift" },
            { question: "What is an algorithm?", options: ["A type of data structure", "A sequence of steps to solve a problem", "A type of programming language", "A method for encrypting data"], correctAnswer: "A sequence of steps to solve a problem" },
            { question: "Which of the following is a type of database?", options: ["MySQL", "JavaScript", "CSS", "PHP"], correctAnswer: "MySQL" },
            { question: "Which protocol is used for secure communication over the internet?", options: ["FTP", "HTTP", "HTTPS", "SMTP"], correctAnswer: "HTTPS" },
            { question: "Which is NOT a common data structure?", options: ["Linked List", "Queue", "Matrix", "Array"], correctAnswer: "Matrix" },
            { question: "Which HTML tag is used for a line break?", options: ["<br>", "<line>", "<hr>", "<break>"], correctAnswer: "<br>" },
            { question: "Which function is used to parse a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.decode()", "JSON.toObject()"], correctAnswer: "JSON.parse()" },
            { question: "Which of these is a version control system?", options: ["Git", "React", "Django", "Angular"], correctAnswer: "Git" },
            { question: "What does the acronym 'CRUD' stand for in database management?", options: ["Create, Read, Update, Delete", "Create, Retrieve, Update, Destroy", "Create, Replace, Update, Delete", "Configure, Read, Update, Delete"], correctAnswer: "Create, Read, Update, Delete" },
            { question: "What is the main use of the 'z-index' property in CSS?", options: ["Defines the font size", "Defines the stacking order of elements", "Sets the element's opacity", "Sets the element's width"], correctAnswer: "Defines the stacking order of elements" },
            { question: "Which one of these is a JavaScript framework?", options: ["Vue.js", "CSS", "HTML", "SQL"], correctAnswer: "Vue.js" },
            { question: "Which of these is an example of a non-relational database?", options: ["MySQL", "MongoDB", "SQLite", "Oracle"], correctAnswer: "MongoDB" },
            { question: "Which HTML tag is used to define a hyperlink?", options: ["<link>", "<a>", "<url>", "<href>"], correctAnswer: "<a>" },
            { question: "What is the purpose of 'npm' in web development?", options: ["To manage Node.js packages", "To create Node.js servers", "To manage databases", "To host websites"], correctAnswer: "To manage Node.js packages" },
            { question: "What does 'DOM' stand for in JavaScript?", options: ["Document Object Model", "Data Object Model", "Document Online Management", "Data Organization Method"], correctAnswer: "Document Object Model" },
            { question: "Which of these is a client-side scripting language?", options: ["JavaScript", "PHP", "Ruby", "Java"], correctAnswer: "JavaScript" },
            { question: "What is the purpose of a CSS 'media query'?", options: ["To change the page content", "To detect device screen size and apply styles accordingly", "To optimize images", "To load external scripts"], correctAnswer: "To detect device screen size and apply styles accordingly" },
            { question: "Which of these is a Python web framework?", options: ["Django", "React", "Angular", "Node.js"], correctAnswer: "Django" },
            { question: "What is an API?", options: ["Automated Processing Interface", "Application Programming Interface", "Applied Programming Interface", "Application Protocol Interface"], correctAnswer: "Application Programming Interface" },
            { question: "What does the 'git clone' command do?", options: ["It deletes a repository", "It creates a copy of a repository", "It updates a repository", "It merges a repository"], correctAnswer: "It creates a copy of a repository" },
            { question: "What is the purpose of the 'async' keyword in JavaScript?", options: ["To make a function return a promise", "To define a function", "To wait for data from an API", "To call an API"], correctAnswer: "To make a function return a promise" },
            { question: "Which HTML element is used to embed JavaScript?", options: ["<script>", "<js>", "<javascript>", "<style>"], correctAnswer: "<script>" },
            // Technology (Group 4)
            { question: "What is the purpose of the 'let' keyword in JavaScript?", options: ["To declare a variable with block scope", "To declare a global variable", "To define a function", "To create an object"], correctAnswer: "To declare a variable with block scope" },
            { question: "Which of the following is a JavaScript library?", options: ["jQuery", "React", "Angular", "Vue.js"], correctAnswer: "jQuery" },
            { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["To refer to the current object", "To create a new object", "To define a function", "To call a function"], correctAnswer: "To refer to the current object" },
            { question: "Which of the following is a JavaScript data type?", options: ["Boolean", "String", "Number", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the purpose of the 'map' method in JavaScript?", options: ["To create a new array with the results of calling a function on each element", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To create a new array with the results of calling a function on each element" },
            { question: "Which of the following is a JavaScript framework?", options: ["React", "jQuery", "Node.js", "Django"], correctAnswer: "React" },
            { question: "What is the purpose of the 'fetch' API in JavaScript?", options: ["To make HTTP requests", "To create animations", "To manipulate the DOM", "To store data locally"], correctAnswer: "To make HTTP requests" },
            { question: "Which of the following is a JavaScript event?", options: ["click", "hover", "scroll", "resize"], correctAnswer: "click" },
            { question: "What is the purpose of the 'localStorage' object in JavaScript?", options: ["To store data locally in the browser", "To make HTTP requests", "To create animations", "To manipulate the DOM"], correctAnswer: "To store data locally in the browser" },
            { question: "Which of the following is a JavaScript method for adding elements to an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
            { question: "What is the purpose of the 'reduce' method in JavaScript?", options: ["To reduce an array to a single value", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To reduce an array to a single value" },
            { question: "Which of the following is a JavaScript data structure?", options: ["Array", "Object", "Map", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the purpose of the 'filter' method in JavaScript?", options: ["To create a new array with elements that pass a test", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To create a new array with elements that pass a test" },
            { question: "Which of the following is a JavaScript method for removing elements from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: "pop()" },
            { question: "What is the purpose of the 'find' method in JavaScript?", options: ["To return the first element that passes a test", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To return the first element that passes a test" },
            { question: "Which of the following is a JavaScript method for adding elements to the beginning of an array?", options: ["unshift()", "shift()", "push()", "pop()"], correctAnswer: "unshift()" },
            { question: "What is the purpose of the 'sort' method in JavaScript?", options: ["To sort the elements of an array", "To remove elements from an array", "To add elements to an array", "To create a new array with elements that pass a test"], correctAnswer: "To sort the elements of an array" },
            { question: "Which of the following is a JavaScript method for removing elements from the beginning of an array?", options: ["shift()", "unshift()", "push()", "pop()"], correctAnswer: "shift()" },
            { question: "What is the purpose of the 'splice' method in JavaScript?", options: ["To add or remove elements from an array", "To sort the elements of an array", "To create a new array with elements that pass a test", "To reduce an array to a single value"], correctAnswer: "To add or remove elements from an array" },
            { question: "Which of the following is a JavaScript method for adding elements to an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
            { question: "What is the purpose of the 'concat' method in JavaScript?", options: ["To merge two or more arrays", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To merge two or more arrays" },
            { question: "Which of the following is a JavaScript method for removing elements from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: "pop()" },
            { question: "What is the purpose of the 'includes' method in JavaScript?", options: ["To check if an array includes a certain element", "To sort the elements of an array", "To create a new array with elements that pass a test", "To reduce an array to a single value"], correctAnswer: "To check if an array includes a certain element" },
            { question: "Which of the following is a JavaScript method for adding elements to the beginning of an array?", options: ["unshift()", "shift()", "push()", "pop()"], correctAnswer: "unshift()" },
            { question: "What is the purpose of the 'reverse' method in JavaScript?", options: ["To reverse the order of elements in an array", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To reverse the order of elements in an array" },
            { question: "Which of the following is a JavaScript method for removing elements from the beginning of an array?", options: ["shift()", "unshift()", "push()", "pop()"], correctAnswer: "shift()" },
            { question: "What is the purpose of the 'slice' method in JavaScript?", options: ["To extract a section of an array", "To sort the elements of an array", "To create a new array with elements that pass a test", "To reduce an array to a single value"], correctAnswer: "To extract a section of an array" },
            { question: "Which of the following is a JavaScript method for adding elements to an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
            { question: "What is the purpose of the 'join' method in JavaScript?", options: ["To join all elements of an array into a string", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To join all elements of an array into a string" },
            { question: "Which of the following is a JavaScript method for removing elements from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: "pop()" },
            { question: "What is the purpose of the 'findIndex' method in JavaScript?", options: ["To return the index of the first element that passes a test", "To remove elements from an array", "To add elements to an array", "To sort the elements of an array"], correctAnswer: "To return the index of the first element that passes a test" },
            { question: "Which of the following is a JavaScript method for adding elements to the beginning of an array?", options: ["unshift()", "shift()", "push()", "pop()"], correctAnswer: "unshift()" },
            { question: "What is the purpose of the 'every' method in JavaScript?", options: ["To check if all elements in an array pass a test", "To sort the elements of an array", "To create a new array with elements that pass a test", "To reduce an array to a single value"], correctAnswer: "To check if all elements in an array pass a test" },
            { question: "Which of the following is a JavaScript method for removing elements from an array?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: "pop()" },
            { question: "What is the correct syntax for declaring a C++ variable?", options: ["variable type variable_name;", "type variable_name;", "var variable_name;", "variable_name: type;"], correctAnswer: "type variable_name;" },
            { question: "Which of the following is a correct way to define a pointer in C++?", options: ["int* ptr;", "int ptr;", "ptr int*;", "pointer int;"], correctAnswer: "int* ptr;" },
            { question: "What is the function used to find the size of a variable in C++?", options: ["sizeof()", "length()", "size()", "getSize()"], correctAnswer: "sizeof()" },
            { question: "Which of the following is used to declare a constant in C++?", options: ["constant int x = 10;", "const int x = 10;", "const x = 10;", "int const x = 10;"], correctAnswer: "const int x = 10;" },
            { question: "What does 'cin' do in C++?", options: ["It outputs data to the console", "It reads input from the console", "It clears the screen", "It creates a new variable"], correctAnswer: "It reads input from the console" },
            { question: "Which of the following is a C++ access modifier?", options: ["private", "public", "protected", "All of the above"], correctAnswer: "All of the above" },
            { question: "What does the 'new' keyword do in C++?", options: ["Allocates memory dynamically", "Deallocates memory dynamically", "Creates a new variable", "Increments the value of a variable"], correctAnswer: "Allocates memory dynamically" },
            { question: "Which of the following is the correct syntax for a for loop in C++?", options: ["for(int i = 0; i < 10; i++) {}", "for(int i = 0; i < 10; i--) {}", "for(i = 0; i < 10; i++) {}", "for(int i = 0, i < 10, i++) {}"], correctAnswer: "for(int i = 0; i < 10; i++) {}" },
            { question: "Which of the following is used to allocate memory dynamically for an array in C++?", options: ["new[]", "malloc()", "calloc()", "None of the above"], correctAnswer: "new[]" },
            { question: "What is the default value of an uninitialized static variable in C++?", options: ["0", "NULL", "undefined", "random value"], correctAnswer: "0" },
            { question: "What is the purpose of the 'this' pointer in C++?", options: ["It refers to the current instance of the class", "It points to the base class", "It stores the address of the object", "None of the above"], correctAnswer: "It refers to the current instance of the class" },
            { question: "Which of the following is a correct way to declare a constructor in C++?", options: ["class_name()", "constructor_name()", "void class_name()", "void constructor_name()"], correctAnswer: "class_name()" },
            { question: "What is the correct way to define a destructor in C++?", options: ["~class_name()", "~constructor_name()", "class_name()", "None of the above"], correctAnswer: "~class_name()" },
            { question: "Which of these operators is used for memory deallocation in C++?", options: ["free()", "delete", "remove()", "dealloc()"], correctAnswer: "delete" },
            { question: "Which of the following is a valid data type in C++?", options: ["integer", "bool", "boolean", "integer[]"], correctAnswer: "bool" },
            { question: "Which of these keywords is used to create a derived class in C++?", options: ["base", "inherit", "extends", "class"], correctAnswer: "class" },
            { question: "Which method is used to read a line of text from the user in C++?", options: ["getline()", "readLine()", "scan()", "input()"], correctAnswer: "getline()" },
            { question: "Which operator is used for pointer dereferencing in C++?", options: ["&", "*", "#", "$"], correctAnswer: "*" },
            { question: "What is the purpose of the 'friend' keyword in C++?", options: ["It grants access to private members of a class", "It creates a class", "It defines a function", "It denotes the end of a class"], correctAnswer: "It grants access to private members of a class" },
            { question: "Which of the following C++ data types is used to store a single character?", options: ["char", "string", "int", "double"], correctAnswer: "char" },
            { question: "In C++, which of the following is used to represent a string?", options: ["char[]", "char*", "string", "Both char[] and string"], correctAnswer: "Both char[] and string" },
            { question: "What is the scope of a local variable in C++?", options: ["It is limited to the function where it is declared", "It is accessible throughout the entire program", "It is accessible within the entire class", "It is global"], correctAnswer: "It is limited to the function where it is declared" },
            { question: "Which of these is the correct syntax for defining an array in C++?", options: ["int arr[5];", "int[] arr;", "array[5] int;", "array int[5];"], correctAnswer: "int arr[5];" },
            { question: "Which of these types of polymorphism exists in C++?", options: ["Compile-time polymorphism", "Run-time polymorphism", "Both compile-time and run-time polymorphism", "None of the above"], correctAnswer: "Both compile-time and run-time polymorphism" },
            { question: "Which operator is used to access members of a structure in C++?", options: [".", "->", ":", "/"], correctAnswer: "." },
            { question: "What is the return type of the 'main' function in C++?", options: ["void", "int", "char", "None of the above"], correctAnswer: "int" },
            { question: "What is the purpose of the 'continue' statement in C++?", options: ["To skip the current iteration of a loop", "To stop the execution of a loop", "To exit from a function", "To exit the program"], correctAnswer: "To skip the current iteration of a loop" },
            { question: "Which of the following is used for function overloading in C++?", options: ["Same function name with different arguments", "Same function name with different return type", "Different function names", "None of the above"], correctAnswer: "Same function name with different arguments" },

            // Data Structures (Group 5)
            //data structures
            { question: "What is the primary characteristic of an array?", options: ["It has a fixed size", "It can store different data types", "It is dynamic", "It cannot store elements in sequence"], correctAnswer: "It has a fixed size" },
            { question: "Which of the following data structures is used in recursion?", options: ["Stack", "Queue", "Linked List", "Array"], correctAnswer: "Stack" },
            { question: "Which data structure uses 'Last In First Out' (LIFO) principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: "Stack" },
            { question: "Which data structure uses 'First In First Out' (FIFO) principle?", options: ["Stack", "Queue", "Array", "Linked List"], correctAnswer: "Queue" },
            { question: "What is the time complexity of accessing an element in an array?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(1)" },
            { question: "Which of the following is true about a doubly linked list?", options: ["It can only be traversed in one direction", "It stores two pointers, one for the previous and one for the next node", "It can store data of only one type", "It is a linear data structure with no backward traversal"], correctAnswer: "It stores two pointers, one for the previous and one for the next node" },
            { question: "What is a balanced binary tree?", options: ["A tree where the left and right subtrees of every node differ in height by no more than one", "A tree with no child nodes", "A tree where every node has two child nodes", "A tree where the elements are arranged in order"], correctAnswer: "A tree where the left and right subtrees of every node differ in height by no more than one" },
            { question: "What is the time complexity of inserting an element into a binary search tree?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(n)" },
            { question: "Which of the following is NOT a type of binary tree?", options: ["Heap", "Binary Search Tree", "AVL Tree", "Doubly Linked List"], correctAnswer: "Doubly Linked List" },
            { question: "What is a hash table used for?", options: ["Sorting data", "Storing key-value pairs", "Storing sorted data", "Graph traversal"], correctAnswer: "Storing key-value pairs" },
            { question: "Which of the following is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(log n)", "O(n^2)", "O(n)"], correctAnswer: "O(n^2)" },
            { question: "Which of the following is true about a queue?", options: ["It is a FIFO data structure", "It is a LIFO data structure", "It allows direct access to any element", "It does not support deletion from the front"], correctAnswer: "It is a FIFO data structure" },
            { question: "What is the time complexity of accessing an element in a linked list?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctAnswer: "O(n)" },
            { question: "Which data structure is used to implement a breadth-first search?", options: ["Queue", "Stack", "Binary Search Tree", "Hash Table"], correctAnswer: "Queue" },
            { question: "Which data structure is used to implement depth-first search?", options: ["Queue", "Stack", "Binary Search Tree", "Heap"], correctAnswer: "Stack" },
            { question: "What is a circular linked list?", options: ["A linked list where the last node points to the first node", "A linked list where nodes are connected in a circle", "A doubly linked list with no end", "A linked list that stores elements in a circular order"], correctAnswer: "A linked list where the last node points to the first node" },
            { question: "What is the time complexity of deleting an element from the front of a queue?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: "O(1)" },
            { question: "Which of these is NOT a type of heap?", options: ["Max heap", "Min heap", "Binary heap", "AVL heap"], correctAnswer: "AVL heap" },
            { question: "In a binary search tree, what is the left child of a node?", options: ["It has a value greater than the parent node", "It has a value smaller than the parent node", "It is always a leaf node", "It has the same value as the parent node"], correctAnswer: "It has a value smaller than the parent node" },
            { question: "What is the time complexity of finding an element in a hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(1)" },
            { question: "What is the purpose of a priority queue?", options: ["To retrieve elements in the order they were added", "To retrieve elements based on their priority", "To sort elements in ascending order", "To store elements in a binary search tree"], correctAnswer: "To retrieve elements based on their priority" },
            { question: "Which of the following is a characteristic of a red-black tree?", options: ["It is a balanced binary search tree", "It is an unbalanced tree", "It allows duplicate elements", "It only allows a single child node"], correctAnswer: "It is a balanced binary search tree" },
            { question: "Which of the following is true about a deque?", options: ["It supports insertion and deletion at both ends", "It supports insertion at one end and deletion at the other", "It only supports deletion from one end", "It does not support deletion at all"], correctAnswer: "It supports insertion and deletion at both ends" },
            { question: "Which of these is a common operation on a stack?", options: ["Push", "Pop", "Peek", "All of the above"], correctAnswer: "All of the above" },
            { question: "Which of the following is the time complexity of enqueue and dequeue operations in a queue implemented using an array?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correctAnswer: "O(1)" },
            { question: "Which of the following data structures is used to implement a graph?", options: ["Array", "Linked List", "Hash Table", "None of the above"], correctAnswer: "Linked List" },
            { question: "What is the space complexity of a linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: "O(n)" },
            { question: "Which type of tree is used in implementing a binary heap?", options: ["Full Binary Tree", "Complete Binary Tree", "Perfect Binary Tree", "None of the above"], correctAnswer: "Complete Binary Tree" },

            { question: "What is the time complexity of searching for an element in an AVL tree?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correctAnswer: "O(log n)" },
            { question: "What is the primary difference between a stack and a queue?", options: ["A stack is a FIFO data structure, while a queue is LIFO", "A stack is a LIFO data structure, while a queue is FIFO", "Stacks do not allow random access, but queues do", "Stacks store elements in a sorted manner, while queues do not"], correctAnswer: "A stack is a LIFO data structure, while a queue is FIFO" },
            { question: "Which of the following is a linear data structure?", options: ["Graph", "Tree", "Linked List", "Heap"], correctAnswer: "Linked List" },
            { question: "Which operation is used to add a new node to a binary tree?", options: ["Insert", "Add", "Push", "Enqueue"], correctAnswer: "Insert" },
            { question: "Which of the following algorithms is used to find the shortest path in a graph?", options: ["Dijkstra's algorithm", "Depth-First Search", "Binary Search", "Merge Sort"], correctAnswer: "Dijkstra's algorithm" },
            { question: "What is a skip list?", options: ["A type of hash table", "A type of balanced tree", "A data structure that allows fast search", "A data structure for sorting elements"], correctAnswer: "A data structure that allows fast search" },
            //operating system

            { question: "What is the primary function of an operating system?", options: ["Manage hardware resources", "Run applications", "Provide a graphical interface", "Ensure security of data"], correctAnswer: "Manage hardware resources" },
            { question: "What is a process in an operating system?", options: ["A program that is executing", "A set of related files", "A storage unit", "A type of network connection"], correctAnswer: "A program that is executing" },
            { question: "Which of the following is NOT a part of the operating system?", options: ["Kernel", "Shell", "Compiler", "File system"], correctAnswer: "Compiler" },
            { question: "What is the role of the kernel in an operating system?", options: ["Manage system resources", "Provide network access", "Run user applications", "Provide a user interface"], correctAnswer: "Manage system resources" },
            { question: "Which of the following is used for process synchronization?", options: ["Semaphore", "Queue", "Array", "Linked List"], correctAnswer: "Semaphore" },
            { question: "What is a deadlock?", options: ["A state where two or more processes are blocked and cannot proceed", "A process waiting indefinitely for resources", "A condition where resources are allocated incorrectly", "A state where memory is fragmented"], correctAnswer: "A state where two or more processes are blocked and cannot proceed" },
            { question: "Which memory management technique allows non-contiguous allocation of memory?", options: ["Paging", "Segmentation", "Fragmentation", "Stack allocation"], correctAnswer: "Paging" },
            { question: "Which of the following is the main difference between a process and a thread?", options: ["A process has its own memory, while a thread shares memory with other threads", "A process cannot have multiple threads", "A thread is a standalone program", "A process does not consume system resources"], correctAnswer: "A process has its own memory, while a thread shares memory with other threads" },
            { question: "Which type of scheduling algorithm assigns priority to processes?", options: ["Priority Scheduling", "Round Robin", "First Come First Serve", "Shortest Job First"], correctAnswer: "Priority Scheduling" },
            { question: "What is virtual memory?", options: ["Memory used by the operating system", "Memory that is not physically available but simulated by the OS", "Memory used by applications only", "A type of external memory"], correctAnswer: "Memory that is not physically available but simulated by the OS" },

            { question: "What is the purpose of the file system in an OS?", options: ["To manage processes", "To manage memory", "To store and organize files", "To ensure security of data"], correctAnswer: "To store and organize files" },
            { question: "Which of the following is a type of file system?", options: ["NTFS", "FAT32", "ext4", "All of the above"], correctAnswer: "All of the above" },
            { question: "Which of the following describes a system call?", options: ["A request to the operating system to perform a specific task", "A function in a program", "A command to the user interface", "A request to the hardware for resources"], correctAnswer: "A request to the operating system to perform a specific task" },
            { question: "What is the purpose of the operating system's scheduler?", options: ["To manage user interfaces", "To manage process scheduling and allocation", "To manage memory allocation", "To monitor system performance"], correctAnswer: "To manage process scheduling and allocation" },
            { question: "Which of the following is the first step in a process lifecycle?", options: ["New", "Ready", "Running", "Terminated"], correctAnswer: "New" },
            { question: "What is a 'context switch' in an operating system?", options: ["Switching between multiple threads", "Switching between different operating systems", "Saving and loading the state of processes", "Switching from user mode to kernel mode"], correctAnswer: "Saving and loading the state of processes" },
            { question: "Which of the following is a type of memory management?", options: ["Contiguous allocation", "Paging", "Segmentation", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the main purpose of the operating system's file system?", options: ["Memory management", "Process scheduling", "Input and output management", "Storing, organizing, and retrieving files"], correctAnswer: "Storing, organizing, and retrieving files" },
            { question: "What is the role of 'swap space' in memory management?", options: ["Temporary storage for running processes", "Permanent storage for user data", "Memory that is used for process synchronization", "Memory used for thread management"], correctAnswer: "Temporary storage for running processes" },

            { question: "What is the main advantage of multi-threading?", options: ["Improves CPU utilization by using multiple threads in a process", "Increases the size of the memory", "Reduces the total number of processes", "None of the above"], correctAnswer: "Improves CPU utilization by using multiple threads in a process" },
            { question: "Which of the following is NOT a valid state for a process in the process lifecycle?", options: ["New", "Waiting", "Ready", "Frozen"], correctAnswer: "Frozen" },
            { question: "What is the main purpose of the operating system's kernel?", options: ["To manage system resources", "To provide a user interface", "To run user applications", "To manage network communication"], correctAnswer: "To manage system resources" },
            { question: "Which of the following is the most common type of scheduling algorithm in modern operating systems?", options: ["First Come First Serve", "Shortest Job First", "Round Robin", "Priority Scheduling"], correctAnswer: "Round Robin" },
            { question: "What is a page fault?", options: ["When a process tries to access a page that is not in memory", "When the operating system encounters an error", "When a process uses up all of its allocated memory", "When memory is fragmented"], correctAnswer: "When a process tries to access a page that is not in memory" },
            { question: "What is 'fragmentation' in memory management?", options: ["When memory is allocated in fixed-size chunks", "When free memory is broken into small pieces", "When memory is allocated dynamically", "When memory is corrupted"], correctAnswer: "When free memory is broken into small pieces" },
            { question: "Which of the following is a method for process synchronization?", options: ["Semaphore", "Mutex", "Monitor", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the main function of an interrupt in an operating system?", options: ["To handle error conditions", "To communicate with hardware devices", "To handle process scheduling", "To provide user input"], correctAnswer: "To communicate with hardware devices" },

            { question: "Which of the following is a key feature of a modern operating system?", options: ["Multitasking", "Memory protection", "File system management", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is 'memory swapping'?", options: ["Moving data between physical memory and swap space", "Increasing the size of the memory", "Allocating memory to processes", "Reducing memory usage in the system"], correctAnswer: "Moving data between physical memory and swap space" },
            { question: "What is the function of the operating system’s shell?", options: ["To manage hardware", "To provide a user interface", "To execute system calls", "To handle process scheduling"], correctAnswer: "To provide a user interface" },
            { question: "What is a system call in an operating system?", options: ["A function call used to request system services", "A hardware interrupt", "A type of kernel function", "A process scheduler function"], correctAnswer: "A function call used to request system services" },
            { question: "Which of the following is an example of a system-level operation?", options: ["File management", "Task scheduling", "Memory management", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the purpose of the operating system's memory manager?", options: ["To allocate and deallocate memory", "To manage system resources", "To provide a user interface", "To run user applications"], correctAnswer: "To allocate and deallocate memory" },
            //computer architecture
            { question: "What is the primary function of the ALU (Arithmetic Logic Unit)?", options: ["Perform arithmetic operations", "Control data flow", "Store data", "Manage memory"], correctAnswer: "Perform arithmetic operations" },
            { question: "What is the role of the Control Unit in a computer?", options: ["Fetch and execute instructions", "Perform arithmetic operations", "Store data", "Coordinate hardware components"], correctAnswer: "Fetch and execute instructions" },
            { question: "What does the term 'clock cycle' refer to in a computer?", options: ["Time taken for one instruction to execute", "The frequency at which the processor operates", "The time it takes to load data from memory", "Time taken for input-output operations"], correctAnswer: "The frequency at which the processor operates" },
            { question: "Which of the following is not a component of the CPU?", options: ["Control Unit", "Arithmetic Logic Unit", "Cache", "Hard Drive"], correctAnswer: "Hard Drive" },
            { question: "What is the purpose of a register in computer architecture?", options: ["To store instructions", "To store data temporarily for processing", "To store operating system code", "To store user files"], correctAnswer: "To store data temporarily for processing" },
            { question: "What is the function of the Program Counter (PC)?", options: ["Stores the address of the next instruction", "Stores the data value", "Stores the previous instruction", "Stores the operating system data"], correctAnswer: "Stores the address of the next instruction" },
            { question: "What is the process of converting high-level language code to machine code called?", options: ["Compilation", "Interpretation", "Encoding", "Linking"], correctAnswer: "Compilation" },
            { question: "Which type of memory is the fastest in terms of access time?", options: ["RAM", "Cache Memory", "Hard Drive", "Secondary Storage"], correctAnswer: "Cache Memory" },
            { question: "In the fetch-execute cycle, which step comes after fetching the instruction?", options: ["Decoding the instruction", "Executing the instruction", "Storing the result", "Accessing the memory"], correctAnswer: "Decoding the instruction" },
            { question: "What is a bus in computer architecture?", options: ["A pathway for data to travel between components", "A type of memory", "A data processing unit", "A peripheral device"], correctAnswer: "A pathway for data to travel between components" },

            { question: "What is the purpose of the Memory Address Register (MAR)?", options: ["Stores the address of the memory location to be accessed", "Stores the data value", "Stores the operating system code", "Stores the user files"], correctAnswer: "Stores the address of the memory location to be accessed" },
            { question: "What is the function of the Memory Data Register (MDR)?", options: ["Stores the data value being read or written", "Stores the address of the memory location", "Stores the operating system code", "Stores the user files"], correctAnswer: "Stores the data value being read or written" },
            { question: "What is the purpose of the Instruction Register (IR)?", options: ["Stores the current instruction being executed", "Stores the data value", "Stores the operating system code", "Stores the user files"], correctAnswer: "Stores the current instruction being executed" },
            { question: "What is the role of the Memory Management Unit (MMU) in a computer system?", options: ["Manages memory access and allocation", "Performs arithmetic operations", "Stores data", "Controls data flow"], correctAnswer: "Manages memory access and allocation" },
            { question: "What is the function of the Arithmetic Logic Unit (ALU) in a computer?", options: ["Performs arithmetic and logical operations", "Controls data flow", "Stores data", "Manages memory"], correctAnswer: "Performs arithmetic and logical operations" },
            { question: "What is the purpose of the Control Unit in a computer system?", options: ["Coordinates hardware components and controls data flow", "Performs arithmetic operations", "Stores data", "Manages memory"], correctAnswer: "Coordinates hardware components and controls data flow" },
            { question: "What is the function of the Program Counter (PC) in a computer system?", options: ["Stores the address of the next instruction", "Stores the data value", "Stores the previous instruction", "Stores the operating system data"], correctAnswer: "Stores the address of the next instruction" },

            //

            { question: "What is the time complexity of binary search in a sorted array?", options: ["O(n)", "O(log n)", "O(n^2)", "O(log n)"], correctAnswer: "O(log n)" },
            { question: "Which algorithm is used for sorting an array in the least amount of time on average?", options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"], correctAnswer: "Quick Sort" },
            { question: "What is the best case time complexity of merge sort?", options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], correctAnswer: "O(n log n)" },
            { question: "What does the term 'NP-complete' refer to?", options: ["A class of problems that are both NP and NP-hard", "A problem that is solvable in polynomial time", "A problem that has no solution", "A problem that is solvable in exponential time"], correctAnswer: "A class of problems that are both NP and NP-hard" },
            { question: "What is the time complexity of the Dijkstra algorithm for finding the shortest path?", options: ["O(n log n)", "O(n^2)", "O(n^3)", "O(log n)"], correctAnswer: "O(n^2)" },
            { question: "What is the time complexity of an optimal merge sort algorithm?", options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"], correctAnswer: "O(n log n)" },
            { question: "Which algorithm is used for finding the minimum spanning tree of a graph?", options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Floyd-Warshall", "Bellman-Ford"], correctAnswer: "Prim's Algorithm" },
            { question: "What is the time complexity of the brute force approach for the traveling salesman problem?", options: ["O(n^2)", "O(n!)", "O(n log n)", "O(n^3)"], correctAnswer: "O(n!)" },
            { question: "Which of the following is NOT a divide-and-conquer algorithm?", options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Binary Search"], correctAnswer: "Insertion Sort" },
            { question: "What does 'Big O' notation represent?", options: ["Time complexity", "Space complexity", "Worst-case scenario", "All of the above"], correctAnswer: "All of the above" },

            { question: "What is the time complexity of the bubble sort algorithm?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correctAnswer: "O(n^2)" },


            //
            { question: "What is the primary function of the OSI model?", options: ["To describe network protocols", "To define the physical network components", "To set standards for network communication", "All of the above"], correctAnswer: "All of the above" },
            { question: "Which layer of the OSI model is responsible for routing?", options: ["Network layer", "Transport layer", "Application layer", "Data link layer"], correctAnswer: "Network layer" },
            { question: "Which protocol is used to assign IP addresses to devices on a network?", options: ["HTTP", "FTP", "DHCP", "SMTP"], correctAnswer: "DHCP" },
            { question: "What does TCP stand for?", options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transport Control Protocol", "None of the above"], correctAnswer: "Transmission Control Protocol" },
            { question: "Which protocol is used for secure communication over a network?", options: ["HTTPS", "HTTP", "FTP", "SMTP"], correctAnswer: "HTTPS" },
            { question: "Which of the following is a type of network topology?", options: ["Star", "Bus", "Ring", "All of the above"], correctAnswer: "All of the above" },
            { question: "What is the maximum length of an Ethernet frame?", options: ["1500 bytes", "2048 bytes", "1024 bytes", "4096 bytes"], correctAnswer: "1500 bytes" },
            { question: "Which of the following is a connectionless protocol?", options: ["UDP", "TCP", "FTP", "HTTP"], correctAnswer: "UDP" },
            { question: "Which device is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "Bridge"], correctAnswer: "Router" },
            { question: "What is the main function of DNS?", options: ["To route packets", "To translate domain names into IP addresses", "To encrypt data", "To filter network traffic"], correctAnswer: "To translate domain names into IP addresses" }


        ];

        class QuizApp {
            constructor(questions) {
                this.questions = this.shuffleArray(questions).slice(0, 10);
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.playerName = '';
                this.userAnswers = [];
                this.quizContent = document.getElementById('quizContent');
            }

            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            determineGrade() {
                if (this.score < 3) {
                    return {
                        grade: "Needs Improvement",
                        message: "Keep studying! You can do better next time.",
                        color: "red"
                    };
                } else if (this.score < 5) {
                    return {
                        grade: "Nice Try",
                        message: "You're making progress! Keep learning.",
                        color: "orange"
                    };
                } else if (this.score < 7) {
                    return {
                        grade: "Good Job",
                        message: "Well done! You're getting better.",
                        color: "green"
                    };
                } else if (this.score < 9) {
                    return {
                        grade: "Excellent",
                        message: "Great work! You really know your stuff.",
                        color: "blue"
                    };
                } else {
                    return {
                        grade: "Perfect",
                        message: "Outstanding performance! You're a quiz master!",
                        color: "purple"
                    };
                }
            }

            start() {
                this.quizContent.innerHTML = `
                    <h2 style="text-align: center; font-size: 28px;">Welcome to the Quiz!</h2>
                    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
                        <input type="text" id="playerNameInput" class="name-input" placeholder="Enter your name" style="width: 80%; padding: 15px; font-size: 18px; margin-bottom: 20px;">
                        <button class="start-btn" onclick="quiz.startQuiz()" style="width: 50%; padding: 15px; font-size: 18px;">Start Quiz</button>
                    </div>
                `;
            }

            startQuiz() {
                this.playerName = document.getElementById('playerNameInput').value.trim();
                if (!this.playerName) {
                    alert('Please enter your name');
                    return;
                }
                this.renderQuestion();
            }

            renderQuestion() {
                const currentQuestion = this.questions[this.currentQuestionIndex];
                this.quizContent.innerHTML = `
                    <div class="question">${currentQuestion.question}</div>
                    <div class="options">
                        ${currentQuestion.options.map(option => `
                            <button class="option" onclick="quiz.selectOption('${option}')">${option}</button>
                        `).join('')}
                    </div>
                `;
            }

            selectOption(selectedOption) {
                const currentQuestion = this.questions[this.currentQuestionIndex];

                // Store user's answer
                this.userAnswers.push({
                    question: currentQuestion.question,
                    userAnswer: selectedOption,
                    correctAnswer: currentQuestion.correctAnswer
                });

                if (selectedOption === currentQuestion.correctAnswer) {
                    this.score++;
                }

                this.currentQuestionIndex++;

                if (this.currentQuestionIndex < this.questions.length) {
                    this.renderQuestion();
                } else {
                    this.showResult();
                }
            }

            showResult() {
                const gradeInfo = this.determineGrade();

                let reviewHTML = this.userAnswers.map((qa, index) => `
                    <div class="review-item">
                        <strong>Q${index + 1}: ${qa.question}</strong><br>
                        Your Answer: <span class="${qa.userAnswer === qa.correctAnswer ? 'correct' : 'incorrect'}">${qa.userAnswer}</span><br>
                        Correct Answer: <span class="correct">${qa.correctAnswer}</span>
                    </div>
                `).join('');

                this.quizContent.innerHTML = `
                    <div class="result">
                        <h2>Quiz Completed!</h2>
                        <p>Congratulations, ${this.playerName}!</p>
                        <p>Your Score: ${this.score} out of ${this.questions.length}</p>
                        <div class="grade" style="color: ${gradeInfo.color}">${gradeInfo.grade}</div>
                        <p>${gradeInfo.message}</p>
                        <h3>Answer Review:</h3>
                        <div>${reviewHTML}</div>
                        <button class="restart-btn" onclick="quiz.restart()">Restart Quiz</button>
                    </div>
                `;
            }

            restart() {
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.userAnswers = [];
                this.start();
            }
        }

        const quiz = new QuizApp(questions);
        quiz.start();
