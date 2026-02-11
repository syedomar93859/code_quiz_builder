let java_question_1 = {
    language: 'Java',
    type: 'Written',
    difficulty: 'Easy',
    question: 'How to print "Hello, World!" in Java?',
    answer: 'System.out.println("Hello, World!");',
};

let java_question_2 = {
    language: 'Java',
    type: 'Multiple Choice',
    difficulty: 'Easy',
    question: 'What does the "void" keyword indicate in Java?',
    options: [
        'It indicates that a method does not return a value.',
        'It indicates that a method returns a value.',
        'It indicates that a method is private.',
        'It indicates that a method is static.'
    ],
    solution: 'It indicates that a method does not return a value.',
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

export function java_question_generator(){
    console.log(`The Java option has been chosen.`);
    return [java_question_1, java_question_2, java_question_3];
};
