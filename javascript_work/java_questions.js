let java_question_1 = {
    language: 'Java',
    type: 'Written',
    question: 'How to print "Hello, World!" in Java?',
    answer: 'System.out.println("Hello, World!");',
};

let java_question_2 = {
    language: 'Java',
    type: 'Multiple Choice',
    question: 'What does the "void" keyword indicate in Java?',
    options: [
        'A: It indicates that a method does not return a value.',
        'B: It indicates that a method returns a value.',
        'C: It indicates that a method is private.',
        'D: It indicates that a method is static.'
    ],
    answer: 'A',
    solution: 'A: It indicates that a method does not return a value.'
};

export function java_question_generator(){
    console.log(`Programming Language: Java`);
    return [java_question_1, java_question_2];
};
