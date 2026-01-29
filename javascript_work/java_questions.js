let java_question_1 = {
    language: 'Java',
    type: 'Written Choice',
    question: 'How to print "Hello, World!" in Java?',
    answer: 'System.out.println("Hello, World!");',
};

export function java_question_generator(){
    console.log(`Programming Language: Java`);
    return java_question_1;
};
