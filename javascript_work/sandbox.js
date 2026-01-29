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

const quizQuestions = new Set();

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
        quizQuestions.add(python_question_generator());
    }
    if (selectedLanguages.has('Java')) {
        quizQuestions.add(java_question_generator());
    }
    if (selectedLanguages.has('C')) {
        quizQuestions.add(c_question_generator());
    }

    console.log([...selectedLanguages]);

    const content = document.querySelector('.quiz');
    content.innerHTML = ''; // Clear previous content

    quizQuestions.forEach(q => {
        const question = document.createElement('p');
        question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}`;
        
        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.placeholder = 'Enter your answer...';
        answerInput.classList.add('answer-input');

        content.appendChild(question);
        content.appendChild(answerInput);

        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';
        submitButton.onclick = () => {
            const userAnswer = answerInput.value;
            if (userAnswer === q.answer) {
                alert('Correct!');
            } else {
                alert(`Incorrect! The correct answer is: ${q.answer}`);
            }
        };

        content.appendChild(submitButton);
    });
}

window.toggleLanguage = toggleLanguage;
window.quizCreator = quizCreator;
