const userInput = prompt("Please enter your name:");

const python_question_generator = function(question_type, tries, question, answer){
    console.log(`Programming Language: Python`);
    if (question_type == 'multiple_choice'){
        console.log('This is a multiple choice python question.');
        console.log(`Question Type: Multiple Choice`);
        console.log(question);
    }else if(question_type == 'fill_in_the_blank'){
        console.log('This is a fill in the blank python question.');
        console.log(`Question Type: Fill in the Blank`);
        console.log(question);
    }else if(question_type == 'written'){
        console.log('This is a written python question.');
        console.log(`Question Type: Written`);
        console.log(question);

    }
};

python_question_generator('multiple_choice', 1, 'What is the output of the following code?\nprint(2 ** 3)', '8');

// const python_question_1 = function(){
//     console.log("What is the output of the following code?");
//     console.log("print(2 ** 3)");
//     console.log("a) 8");
//     console.log("b) 9");
//     console.log("c) 6");
//     console.log("d) Error");
// };


// python_question_1();


// const password = 'p@ss12';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8 || password.includes('@') && password.length >=  5 ) {
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough!');
// }