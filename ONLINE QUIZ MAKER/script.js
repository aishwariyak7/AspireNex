let quizzes = [];

function addQuestion() {
    const questionsContainer = document.getElementById('questions-container');
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
        <input type="text" placeholder="Question">
        <input type="text" placeholder="Option 1">
        <input type="text" placeholder="Option 2">
        <input type="text" placeholder="Option 3">
        <input type="text" placeholder="Option 4">
        <input type="number" placeholder="Correct Option (1-4)">
        <button class="delete-btn" onclick="deleteQuestion(this)">Delete</button>
    `;
    questionsContainer.appendChild(questionDiv);
}

function deleteQuestion(buttonElement) {
    const questionDiv = buttonElement.parentNode;
    questionDiv.remove();
}

function saveQuiz() {
    const title = document.getElementById('quiz-title').value;
    const questionsContainer = document.getElementById('questions-container');
    const questionElements = questionsContainer.getElementsByClassName('question');
    const questions = [];

    for (let questionElement of questionElements) {
        const inputs = questionElement.getElementsByTagName('input');
        const question = {
            questionText: inputs[0].value,
            options: [inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value],
            correctAnswer: parseInt(inputs[5].value) - 1
        };
        questions.push(question);
    }

    const quiz = {
        title: title,
        questions: questions
    };

    quizzes.push(quiz);
    displayQuizzes();
    switchToSection('quiz-list-section');
}


function displayQuizzes() {
    const quizList = document.getElementById('quiz-list');
    quizList.innerHTML = '';

    quizzes.forEach((quiz, index) => {
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = quiz.title;
        a.onclick = () => takeQuiz(index);
        a.classList.add('quiz-link');
        quizList.appendChild(a);
    });
}

function takeQuiz(quizIndex) {
    const quiz = quizzes[quizIndex];
    const quizTitleDisplay = document.getElementById('quiz-title-display');
    const quizQuestions = document.getElementById('quiz-questions');

    quizTitleDisplay.textContent = quiz.title;
    quizQuestions.innerHTML = '';

    quiz.questions.forEach((question, questionIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${question.questionText}</p>
            <div class="options">
                ${question.options.map((option, optionIndex) => `
                    <label>
                        <input type="radio" name="question-${questionIndex}" value="${optionIndex}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizQuestions.appendChild(questionDiv);
    });

    switchToSection('take-quiz-section');
}


function submitQuiz() {
    const quizTitleDisplay = document.getElementById('quiz-title-display').textContent;
    const quiz = quizzes.find(q => q.title === quizTitleDisplay);
    const quizQuestions = document.getElementById('quiz-questions');
    const questionElements = quizQuestions.getElementsByClassName('question');
    let score = 0;

    for (let i = 0; i < questionElements.length; i++) {
        const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === quiz.questions[i].correctAnswer) {
            score++;
        }
    }

    document.getElementById('quiz-result').textContent = `Your score: ${score} out of ${quiz.questions.length}`;

    const resultMessage = document.getElementById('result-message');
    if (score === quiz.questions.length) {
        resultMessage.textContent = "Excellent! You got all answers correct!";
    } else if (score > quiz.questions.length / 2) {
        resultMessage.textContent = "Great job! You scored above average.";
    } else {
        resultMessage.textContent = "Good effort! Try again to improve your score.";
    }

    switchToSection('result-section');
}

function goHome() {
    switchToSection('quiz-list-section');
}

function switchToSection(sectionId) {
    document.getElementById('create-quiz-section').style.display = 'none';
    document.getElementById('quiz-list-section').style.display = 'none';
    document.getElementById('take-quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuizzes();
    switchToSection('create-quiz-section');
});
