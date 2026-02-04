let python_question_1 = {
    language: 'Python',
    type: 'Written',
    difficulty: 'Easy',
    question: 'How to print "Hello, World!" in Python?',
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
    options: [
        '4',
        'Sally',
        'Error',
        'None',
    ],
    solution: 'Sally',
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



export function python_question_generator(){
    console.log(`Programming Language: Python`);
    return [python_question_1, python_question_2, python_question_3, python_question_4, python_question_5];
};

