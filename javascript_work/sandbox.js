import { python_question_generator } from './python_questions.js';
import { java_question_generator } from './java_questions.js';
import { c_question_generator } from './c_questions.js';

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

function numTries() {
    let tries = document.getElementById("myText").value;
    if (tries.trim() === "") {
        tries = 3;
    }
    return Number(tries);
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

    let tries = numTries();
    console.log(`Number of tries per question: ${tries}`);

    console.log([...selectedLanguages]);

    const content = document.querySelector('.quiz');
    content.innerHTML = ''; // Clear previous content

    quizQuestions.forEach(q => {
        const totalTries = tries;
        let currTries = 0;

        const question = document.createElement('p');
        question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: ${totalTries - currTries}`;

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
                submitButton.disabled = true;

                const solution = document.createElement('p');
                solution.innerHTML = `Solution: ${q.answer}`;
                content.appendChild(solution);

            } else if(totalTries === currTries + 1){
                alert(`Out of tries!`);
                question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: 0`;
                submitButton.disabled = true;
            }else {
                alert(`Incorrect!`);
                currTries++;
                console.log(currTries);
                question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: ${totalTries - currTries}`;
            }
        };


        // for (let i = 0; i < totalTries; i++) {
        //     console.log(i);
        //     submitButton.onclick = () => {
        //         const userAnswer = answerInput.value;
        //         if (userAnswer === q.answer) {
        //             alert('Correct!');
        //         } else {
        //             alert(`Incorrect! The correct answer is: ${q.answer}`);
        //             question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: ${totalTries - i}`;
        //         }
        //     };
        // }

        content.appendChild(submitButton);
    });
}

window.toggleLanguage = toggleLanguage;
window.quizCreator = quizCreator;
