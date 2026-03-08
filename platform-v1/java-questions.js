/*
This file contains all questions about the Java programming language. Some number of these questions are displayed in the website
if the user choose to be tested in the Java programming language and the number of questions to be displayed picked is greater than 0.
*/

let java_question_1 = {
    // the languages for all the questions including this one in this file have been specified to be C
    language: 'Java',

    // the type of the question lets us know if the question is a written question or a multiple choice question
    type: 'Written',

    // each question has their own level of challenge that ranges from Easy to Hard
    difficulty: 'Easy',

    // this attribute tells us what the full question is
    question: 'How to print "Hello, World!" in Java?',

    // System.out.println("Hello, World!"); is the answer for this question which means the user must input this as their answer to get it correct
    answer: 'System.out.println("Hello, World!");',
};

let java_question_2 = {
    language: 'Java',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the "void" keyword indicate in Java?',

    // as this question is multiple choice, a list of possible answers are displayed to user with this options array, and they have to pick the correct one
    options: [
        'It indicates that a method does not return a value.',
        'It indicates that a method returns a value.',
        'It indicates that a method is private.',
        'It indicates that a method is static.'
    ],

    // this the correct answer for this multiple choice questio
    solution: 'It indicates that a method does not return a value.',

    // this function takes the options array and randomizes the order of its elements, so they don't show up in the same order everytime when displayed
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },

};

let java_question_3 = {
    language: 'Java',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the static keyword mean for a method in Java?',
    options: [
        'It means the method can be accessed without creating an instance/object of the class.',
        'It means the method cannot be accessed without creating an instance/object of the class.',
        'It means the method is accessible by any other method in the same class.',
        'Makes the method belong to the class rather than any object instance.'
    ],
    solution: 'It means the method can be accessed without creating an instance/object of the class.',
    randomize: function() {
        for (let i = this.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options[i], this.options[j]] = [this.options[j], this.options[i]];
        }
    },

};

// for (let i = 0; i < questions.length; i++) {
//     questions[i].number = `Q${i + 1})`;

//     if (questions[i].randomize) {
//         questions[i].randomize();
//     }
// }

// this function stores all the Java questions in an array and returns this array when called in the quiz-creation.js file.
export function java_question_generator() {
    
    // lets anyone using the console know, that the user chose the button to be tested on Java questions
    console.log(`The Java option has been chosen.`);

    // returns an array filled with Java questions
    return [java_question_1, java_question_2, java_question_3];
};