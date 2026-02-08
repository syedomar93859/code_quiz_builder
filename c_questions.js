let c_question_1 = {
    language: 'C',
    type: 'Written',
    difficulty: 'Easy',
    question: 'How to print "Hello, World!" in C?',
    answer: 'printf("Hello, World!");',
};

let c_question_2 = {
    language: 'C',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the following declaration mean in C: const int *p;',
    options: [
        'p is a pointer to a constant integer.',
        'p is a constant pointer to an integer.',
        'Both p and the integer are constant.',
        'The integer pointed to by p can be modified.'
    ],
    solution: 'p is a pointer to a constant integer.',
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
        'do-while loop"',
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




export function c_question_generator(){
    console.log(`Programming Language: C`);
    return [c_question_1, c_question_2, c_question_3, c_question_4, c_question_5, c_question_6, c_question_7, c_question_8, c_question_9, c_question_10];
};
