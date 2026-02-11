import { python_question_generator } from './python_questions.js';
import { java_question_generator } from './java_questions.js';
import { c_question_generator } from './c_questions.js';

const selectedLanguages = new Set();

const quizQuestions = new Set();

const seenQuestions = new Set();


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
    let triesInput = document.getElementById("triesPerQuestion"); 
    
    if (!triesInput || triesInput.value.trim() === "") {
        return 3; // Default value
    }
    return Number(triesInput.value);
}

function totalQuestions() {
    let numQuestions = document.getElementById("numberOfQuestions").value;
    return Number(numQuestions);
}

function addQuestions(questions){
    questions.forEach(q => {
        if (!seenQuestions.has(q.question)){
            quizQuestions.add(q);
            seenQuestions.add(q.question);
        }
    })
}


function quizCreator() {
    quizQuestions.clear();
    seenQuestions.clear();

    console.log("Creating quiz...");
    if (selectedLanguages.has('Python')) {
        addQuestions(python_question_generator());
    }
    console.log(`Current Number of Questions After Adding Python Questons: ${quizQuestions.size}`);

    if (selectedLanguages.has('Java')) {
        addQuestions(java_question_generator());
    }
    console.log(`Current Number of Questions After Adding Java Questions: ${quizQuestions.size}`);

    if (selectedLanguages.has('C')) {
        addQuestions(c_question_generator());
    }
    console.log(`Current Number of Questions After Adding C Questions: ${quizQuestions.size}`);

    let questionsArray = Array.from(quizQuestions);
    shuffleArray(questionsArray);

    let tries = numTries();
    console.log(`Number of tries per question: ${tries}`);

    const numQuestions = totalQuestions();

    console.log("Here are languages that were selected: " + [...selectedLanguages]);

    const finalQuestions = questionsArray.slice(0, numQuestions);

    const content = document.querySelector('.quiz');
    content.innerHTML = ''; // Clear previous content

    let fullMarks = finalQuestions.length;
    console.log(`Total Questions: ${finalQuestions.length}`);

    let questionsAnswered = 0;
    const totalNumQuestions = finalQuestions.length;

    finalQuestions.forEach(q => {
        let letteredChoices = [];
        const totalTries = tries;
        let currTries = 0;
        let correctChoice = 'undecided';

        console.log('Question type:', q.type);

        const question = document.createElement('p');
        if (q.type === 'Multiple Choice'){

            q.randomize();
            const choices = q.options;

            choices.forEach((choice, index) => {
                letteredChoices.push(`${String.fromCharCode(65 + index)}. ${choice}`);
                if (choice === q.solution) {
                    correctChoice = `${String.fromCharCode(65 + index)}`;
                }
            });


             question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question} <br> Choices: <br> ${letteredChoices.join('<br>')} <br> Tries Left: ${totalTries - currTries}`;


        } else if (q.type === 'Written') {
            question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: ${totalTries - currTries}`;
        }

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.placeholder = 'Enter your answer...';
        answerInput.classList.add('answer-input');

        content.appendChild(question);
        content.appendChild(answerInput);

        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';
        
        submitButton.onclick = () => {
            let mark = 0;
            const userAnswer = answerInput.value;
            if (userAnswer === q.answer || userAnswer === correctChoice) {
                alert('Correct!');
                submitButton.disabled = true;

                currTries++;

                if (q.type === 'Multiple Choice'){
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question} <br> Choices: <br> ${letteredChoices.join('<br>')} <br> Tries Left: ${totalTries - currTries}`;
                }else if(q.type === 'Written'){
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question} <br> Tries Left: ${totalTries - currTries}`;
                }

                const solution = document.createElement('p');
                if (q.type === 'Multiple Choice'){
                    solution.innerHTML = `Solution: ${correctChoice}. ${q.solution}`;
                } else if (q.type === 'Written') {
                    solution.innerHTML = `Solution: ${q.answer}`;
                }

                submitButton.insertAdjacentElement('afterend', solution);

            } else if(totalTries === currTries + 1){
                fullMarks -= (1/totalTries);
                alert(`Out of tries!`);

                if (q.type === 'Multiple Choice'){
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question} <br> Choices: <br> ${letteredChoices.join('<br>')} <br> Tries Left: 0`;
                } else if (q.type === 'Written') {
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: 0`;
                }

                submitButton.disabled = true;

                const solution = document.createElement('p');

                if (q.type === 'Multiple Choice'){
                    solution.innerHTML = `Solution: ${correctChoice}. ${q.solution}`;
                } else if (q.type === 'Written') {
                    solution.innerHTML = `Solution: ${q.answer}`;
                }

                submitButton.insertAdjacentElement('afterend', solution);


            } else {
                fullMarks -= (1/totalTries);
                alert(`Incorrect!`);
                currTries++;
                console.log(currTries);

                if (q.type === 'Multiple Choice'){
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question} <br> Choices: <br> ${letteredChoices.join('<br>')} <br> Tries Left: ${totalTries - currTries}`;
                } else if (q.type === 'Written') {
                    question.innerHTML = `Programming Language: ${q.language} <br> Question Type: ${q.type} <br> Question: ${q.question}  <br> Tries Left: ${totalTries - currTries}`;
                }

            }


            if (submitButton.disabled) { // A button only disables when a question is "done"
        questionsAnswered++;

        if (questionsAnswered === totalNumQuestions) {
            const score = document.createElement('h2');
            score.style.marginTop = "20px";
            score.innerHTML = `🏁 Quiz Complete! Final Score: ${fullMarks.toFixed(2)} / ${totalNumQuestions.toFixed(2)}`;
            content.appendChild(score);
        }
    }


            console.log(fullMarks.toFixed(2));
        };

        content.appendChild(submitButton);

        
    });
    console.log(fullMarks.toFixed(2));
}

window.toggleLanguage = toggleLanguage;
window.quizCreator = quizCreator;
