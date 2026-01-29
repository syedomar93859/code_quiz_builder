import { python_question_generator } from './python_questions.js';
import { java_question_generator } from './java_questions.js';
import { c_question_generator } from './c_questions.js';

// const python_question_generator = function(question_type, tries, question, answer){
//     console.log(`Programming Language: Python`);
//     if (question_type == 'multiple_choice'){
//         console.log('This is a multiple choice python question.');
//         console.log(`Question Type: Multiple Choice`);
//         console.log(question);
//     }else if(question_type == 'fill_in_the_blank'){
//         console.log('This is a fill in the blank python question.');
//         console.log(`Question Type: Fill in the Blank`);
//         console.log(question);
//     }else if(question_type == 'written'){
//         console.log('This is a written python question.');
//         console.log(`Question Type: Written`);
//         console.log(question);

//     }
// };

// python_question_generator('multiple_choice', 1, 'What is the output of the following code?\nprint(2 ** 3)', '8');



const selectedLanguages = new Set();

function toggleLanguage(button) {
    const language = button.dataset.language;

    if (selectedLanguages.has(language)) {
        selectedLanguages.delete(language);
        button.classList.remove("active");
    } else {
        selectedLanguages.add(language);
        button.classList.add("active");
    }
    
}


function quizCreator() {
    console.log("Creating quiz...");
    if (selectedLanguages.has('Python')) {
        python_question_generator();
    }
    if (selectedLanguages.has('Java')) {
        java_question_generator();
    }
    if (selectedLanguages.has('C')) {
        c_question_generator();
    }

    console.log([...selectedLanguages]);
}

window.toggleLanguage = toggleLanguage;
window.quizCreator = quizCreator;
