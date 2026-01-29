let c_question_1 = {
    language: 'C',
    type: 'Written Choice',
    question: 'How to print "Hello, World!" in C?',
    answer: 'printf("Hello, World!");',
};

export function c_question_generator(){
    console.log(`Programming Language: C`);
    return c_question_1;
};
