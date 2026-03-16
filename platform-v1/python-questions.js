/*
This file contains all questions about the Python programming language. Some number of these questions are displayed in the website
if the user choose to be tested in the Python programming language and the number of questions to be displayed picked is greater than 0.
*/

let python_question_1 = {
    // the languages for all the questions in this file including this one have been specified to be Python
    language: 'Python',

    // the type of the question lets us know if the question is a written question or a multiple choice question
    type: 'Written',

    // each question has their own level of challenge that ranges from Easy to Hard
    difficulty: 'Easy',

    // this attribute tells us what the full question is
    question: 'How to print "Hello, World!" in Python?',

    // print("Hello, World!") is the answer for this question which means the user must input this as their answer to get it correct
    answer: 'print("Hello, World!")',
};

let python_question_2 = {
    language: 'Python',
    type: 'Written',
    difficulty: 'Easy',
    question: 'Write a comment in Python with this text: This is a comment',
    answer: '# This is a comment',
};

let python_question_3 = {
    language: 'Python',
    type: 'Written',
    difficulty: 'Easy',
    question: 'Write a variable x with the value of 11.',
    answer: 'x = 11',
};

let python_question_4 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the following print in Python? <br> x = 4<br>x = "Sally"<br>print(x)',

    // as this question is multiple choice, a list of possible answers are displayed to user with this options array, and they have to pick the correct one
    options: [
        '4',
        'Sally',
        'Error',
        'None',
    ],

    // this the correct answer for this multiple choice questio
    solution: 'Sally',

    // this function takes the options array and randomizes the order of its elements, so they don't show up in the same order everytime when displayed
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let python_question_5 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the float(3) function do in Python?',
    options: [
        'Converts 3 to a float',
        'Rounds 3 to the nearest integer',
        'Returns an error',
    ],
    solution: 'Converts 3 to a float',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
    
};

let python_question_6 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What is printed from the following code: <br> name = "John" <br> print(type(name))',
    options: [
        "&lt;class 'int'&gt;",
        "&lt;class 'str'&gt;",
        "&lt;class 'bool'&gt;",
        'Returns an error',
    ],
    solution: "&lt;class 'str'&gt;", // This MUST match the option exactly
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};

let python_question_7 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What happins with the code below in Python: <br> d = 7 <br> D = "Silly"',
    options: [
        "D will overwrite d",
        "d will overwrite D",
        "Neither variable will be overwritten",
        "Error shows up",
    ],
    solution: "Neither variable will be overwritten", // This MUST match the option exactly
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};

let python_question_8 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'Which of the following is a legal variable name?',
    options: [
        '5coolbird = "Scott"' ,
        'cool-bird = "Scott"',
        'cool bird = "Scott"',
        'coolBird = "Scott"', // camelCase option
        // 'cool_bird = "Scott"', 

    ],
    solution: 'coolBird = "Scott"',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};

let python_question_9 = {
    language: 'Python',
    type: 'Written',
    difficulty: 'Easy',
    question: 'How would you assign 2 values to 2 variables in one line? Make x have the value of 9 and y have the value of 13.',
    answer: 'x, y = 9, 13',
};

let python_question_10 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What happens with the code below in Python: <br> x = 5 <br> y = "John" <br> print(x + y)',
    options: [
        '5John' ,
        '5 John',
        'Error shows up',
        'Nothing happens', 

    ],
    solution: 'Error shows up',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};

let python_question_11 = {
    language: 'Python',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does range(3) return?',
    options: [
        '0,1,2' ,
        '1,2,3',
        '0,1,2,3',
        '1,2', 

    ],
    solution: '0,1,2',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },
};

let python_question_12 = {
    language: 'Python',
    type: 'Written',
    difficulty: 'Easy',
    question: 'How do you get the length of a list called my_list?',
    answer: 'len(my_list)',
};

// this function stores all the Python questions in an array and returns this array when called in the quiz-creation.js file.
export function python_question_generator(){
    
    // lets anyone using the console know, that the user chose the button to be tested on Python questions
    console.log(`The Python option has been chosen.`);
    
    // returns an array filled with Python questions
    return [python_question_1, python_question_2, python_question_3, python_question_4, python_question_5, 
            python_question_6, python_question_7, python_question_8, python_question_9, python_question_10,python_question_11,python_question_12];
};

