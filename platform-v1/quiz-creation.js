// Import functions that generate questions for each programming language
import { python_question_generator } from './python-questions.js';
import { java_question_generator } from './java-questions.js';
import { c_question_generator } from './c-questions.js';


// Stores which languages the user has selected
// A Set is used so the same language cannot be added twice
const selectedLanguages = new Set();


// Stores all quiz questions collected from the generators
// A Set prevents duplicate question objects from being stored
const quizQuestions = new Set();


// Tracks question text that has already been added
// This prevents duplicate questions across different generators
const seenQuestions = new Set();


// Fisher-Yates shuffle algorithm
// Randomizes the order of questions in an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the two elements
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Handles language button selection
// Adds or removes languages from the selectedLanguages set
function toggleLanguage(button) {

    // Retrieve the language stored in the button's data-language attribute
    const language = button.dataset.language;

    if (selectedLanguages.has(language)) {

        // Remove language if already selected
        selectedLanguages.delete(language);

        // Remove visual highlight from button
        button.classList.remove("active");

    } else {

        // Add language to the selection
        selectedLanguages.add(language);

        // Visually mark button as active
        button.classList.add("active");
    }
    
}


// Returns the number of tries per question selected by the user
function numTries() {

    let triesInput = document.getElementById("triesPerQuestion"); 
    
    // If input is missing or empty, default to 3 tries
    if (!triesInput || triesInput.value.trim() === "") {
        return 3;
    }

    // Convert input value to a number
    return Number(triesInput.value);
}


// Returns how many questions the user wants in the quiz
function totalQuestions() {

    let numQuestions = document.getElementById("numberOfQuestions").value;

    return Number(numQuestions);
}


// Adds questions to quizQuestions while preventing duplicates
function addQuestions(questions){

    questions.forEach(q => {

        // Only add question if we have not seen its text before
        if (!seenQuestions.has(q.question)){

            quizQuestions.add(q);

            // Record that this question text has now been used
            seenQuestions.add(q.question);
        }

    })

}


// Main function responsible for creating the quiz
function quizCreator() {

    // Reset stored questions before generating a new quiz
    quizQuestions.clear();
    seenQuestions.clear();

    console.log("Creating quiz...");

    // Add Python questions if Python was selected
    if (selectedLanguages.has('Python')) {
        addQuestions(python_question_generator());
    }

    console.log(`Current Number of Questions After Adding Python Questons: ${quizQuestions.size}`);

    // Add Java questions
    if (selectedLanguages.has('Java')) {
        addQuestions(java_question_generator());
    }

    console.log(`Current Number of Questions After Adding Java Questions: ${quizQuestions.size}`);

    // Add C questions
    if (selectedLanguages.has('C')) {
        addQuestions(c_question_generator());
    }

    console.log(`Current Number of Questions After Adding C Questions: ${quizQuestions.size}`);


    // Convert Set into an array so it can be shuffled and sliced
    let questionsArray = Array.from(quizQuestions);

    shuffleArray(questionsArray);

    // Retrieve quiz settings
    let tries = numTries();
    console.log(`Number of tries per question: ${tries}`);

    const numQuestions = totalQuestions();

    console.log("Here are languages that were selected: " + [...selectedLanguages]);

    // Select only the number of questions requested by the user
    const finalQuestions = questionsArray.slice(0, numQuestions);


    // Get the quiz container element from the page
    const content = document.querySelector('.quiz');

    // Clear previous quiz content
    content.innerHTML = '';


    // Total marks available equals number of questions
    let fullMarks = finalQuestions.length;

    console.log(`Total Questions: ${finalQuestions.length}`);

    // Track progress through the quiz
    let questionsAnswered = 0;
    const totalNumQuestions = finalQuestions.length;


    // Create HTML elements for each question
    finalQuestions.forEach(q => {

        let letteredChoices = [];

        const totalTries = tries;
        let currTries = 0;

        let correctChoice = 'undecided';

        console.log('Question type:', q.type);

        // Create question container
        const question = document.createElement('p');


        // MULTIPLE CHOICE QUESTION HANDLING
        if (q.type === 'Multiple Choice'){

            // Randomize the order of answer options
            q.randomize();

            const choices = q.options;

            choices.forEach((choice, index) => {

                // Label options A, B, C, D
                letteredChoices.push(`${String.fromCharCode(65 + index)}. ${choice}`);

                // Determine which letter corresponds to the correct answer
                if (choice === q.solution) {
                    correctChoice = `${String.fromCharCode(65 + index)}`;
                }

            });


            // Display question and choices
            question.innerHTML =
            `<h3>Program Language: ${q.language}
            <br><small>Question Type: ${q.type}</small></h3>
            ${q.question}
            <br> ${letteredChoices.join('<br>')}
            <br> <em>Tries Left: ${totalTries - currTries}</em>`;


        } 
        
        // WRITTEN QUESTION HANDLING
        else if (q.type === 'Written') {

            question.innerHTML =
            `<h3>Program Language: ${q.language}
            <br><small>Question Type: ${q.type}</h3>
            ${q.question}
            <br> <em>Tries Left:${totalTries - currTries}</em>`;
        }


        // Create input box where user enters answer
        const answerInput = document.createElement('input');

        answerInput.type = 'text';
        answerInput.placeholder = 'Enter your answer...';

        answerInput.classList.add('answer-input');

        // Add question and input box to page
        content.appendChild(question);
        content.appendChild(answerInput);


        // Create submit button for answer
        const submitButton = document.createElement('button');
        submitButton.innerHTML = 'Submit';
        
        submitButton.onclick = () => {
            let mark = 0;
            const userAnswer = answerInput.value;
            if (userAnswer === q.answer || userAnswer.toUpperCase() === correctChoice) {
                alert('Correct!');
                submitButton.style.backgroundColor = 'green'; /* This is to make things green when answer is right.*/
                submitButton.style.color = 'white'; /* This is to make the word insdie the box white */
                submitButton.innerHTML = 'Correct!'; /* the word itself */

                answerInput.style.backgroundColor = '#ecfdf5'; /* THis is for the input boxes, and make it green*/
                answerInput.style.borderColor = 'green';
                submitButton.disabled = true;

                currTries++;

                if (q.type === 'Multiple Choice'){
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> ${letteredChoices.join('<br>')} <br> <em>Tries Left: ${totalTries - currTries}</em>`;
                }else if(q.type === 'Written'){
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> <em>Tries Left: ${totalTries - currTries}</em>`;
                }

                const solution = document.createElement('div'); /* Changed to division as <p> made it look weird*/
                if (q.type === 'Multiple Choice'){
                    solution.innerHTML = `Solution: ${correctChoice}. ${q.solution}`;
                } else if (q.type === 'Written') {
                    solution.innerHTML = `Solution: ${q.answer}`;
                }

                submitButton.insertAdjacentElement('afterend', solution);

            } else if(totalTries === currTries + 1){
                fullMarks -= (1/totalTries);
                alert(`Out of tries!`);

                submitButton.style.backgroundColor = 'red'; /* This is to make the button red when user is out of tries.*/
                submitButton.style.color = 'white'; /* This is to make the word insdie the box white */
                submitButton.innerHTML = 'Wrong!'; /* the word itself */

                answerInput.style.backgroundColor = '#fef2f2'; /* THis is for the input boxes, and make it red*/
                answerInput.style.borderColor = 'red';
                submitButton.disabled = true;

                if (q.type === 'Multiple Choice'){
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> ${letteredChoices.join('<br>')} <br> <em>Tries Left: 0</em>`;
                } else if (q.type === 'Written') {
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> <em>Tries Left: 0</em>`;
                }

                submitButton.disabled = true;

                const solution = document.createElement('div'); /* Changed to division as <p> made it look weird*/

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
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> ${letteredChoices.join('<br>')} <br> <em>Tries Left: ${totalTries - currTries}</em>`;
                } else if (q.type === 'Written') {
                    question.innerHTML = `<h3>Program Language: ${q.language}  <br><small>Question Type: ${q.type}</small></h3> ${q.question} <br> <em>Tries Left: ${totalTries - currTries}</em>`;
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
