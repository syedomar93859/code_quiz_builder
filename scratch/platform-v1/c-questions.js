/*
This file contains all questions about the C programming language. Some number of these questions are displayed in the website
if the user choose to be tested in the C programming language and the number of questions to be displayed picked is greater than 0.
*/

let c_question_1 = {
    // the languages for all the questions in this file including this one have been specified to be C
    language: 'C',
    
    // the type of the question lets us know if the question is a written question or a multiple choice question
    type: 'Written',
    
    // each question has their own level of challenge that ranges from Easy to Hard
    difficulty: 'Easy',
    
    // this attribute tells us what the full question is
    question: 'How to print "Hello, World!" in C?',
    
    // printf("Hello, World!"); is the answer for this question which means the user must input this as their answer to get it correct
    answer: 'printf("Hello, World!");',
};

let c_question_2 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the following declaration mean in C: const int *p;',

    // as this question is multiple choice, a list of possible answers are displayed to user with this options array, and they have to pick the correct one
    options: [
        'p is a pointer to a constant integer.',
        'p is a constant pointer to an integer.',
        'Both p and the integer are constant.',
        'The integer pointed to by p can be modified.'
    ],

    // this the correct answer for this multiple choice questio
    solution: 'p is a pointer to a constant integer.',

    // this function takes the options array and randomizes the order of its elements, so they don't show up in the same order everytime when displayed
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_3 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'Which function is commonly used to read formatted input from the keyboard in C?',
    options: [
        'scanf()',
        'fgets()',
        'getchar()',
        'read()',
        "input()",
    ],
    solution: 'scanf()',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_4 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'With the following: <br> int x = 5; <br> int *p = &x; <br> What does *p evaluate to in C?',
    options: [
        '5',
        'The memory address of x',
        'The size of x in bytes',
        'An error, as p is not initialized',
        'None of the above'
    ],
    solution: '5',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_5 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is the index of the first element in a C array?',
    options: [
        '0',
        '1',
        '-1',
        'Depends on the compiler',
    ],
    solution: '0',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_6 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does sizeof(int) return in C?',
    options: [
        'Number of bytes required to store an object of type int',
        'Number of bits used by an int',
        'Always 4',
        'The value stored in an int',
    ],
    solution: 'Number of bytes required to store an object of type int',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_7 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'Which keyword is used to define a structure in C?',
    options: [
        'struct',
        'class',
        'union',
        'object',
        'record',
    ],
    solution: 'struct',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};


let c_question_8 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'Which C function allocates a block of uninitialized memory at runtime in C?',
    options: [
        'malloc()',
        'alloc()',
        'calloc()',
        'realloc()',
        'free()',
        'memalloc()',
    ],
    solution: 'malloc()',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};


let c_question_9 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What keyword is used to prevent fall-through in a switch statement in C?',
    options: [
        'break',
        'continue',
        'return',
        'exit',
    ],
    solution: 'break',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let c_question_10 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'Which loop is guaranteed to execute at least once in C?',
    options: [
        'do-while loop',
        'while loop',
        'for loop',
        'if statement',
    ],
    solution: 'do-while loop',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};



// this function stores all the C questions in an array and returns this array when called in the quiz-creation.js file.
export function c_question_generator(){
    
    // lets anyone using the console know, that the user chose the button to be tested on C questions
    console.log(`The C option has been chosen.`);
    
    // returns an array filled with C questions
    return [c_question_1, c_question_2, c_question_3, c_question_4, c_question_5, c_question_6, 
            c_question_7, c_question_8, c_question_9, c_question_10];
};
