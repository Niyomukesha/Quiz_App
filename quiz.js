const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correctAnswer: "Tokyo"
    }
    
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');

let currentQuestion = 0;
let score = 0;

function buildQuiz() {
    const currentQuizData = quizData[currentQuestion];

    const quizQuestion = document.createElement('div');
    quizQuestion.classList.add('question');
    quizQuestion.innerHTML = `<p>${currentQuestion + 1}. ${currentQuizData.question}</p>`;

    const answerOptions = document.createElement('div');
    answerOptions.classList.add('answers');
    currentQuizData.answers.forEach(answer => {
        const answerLabel = document.createElement('label');
        answerLabel.innerHTML = `
            <input type="radio" name="question${currentQuestion}" value="${answer}">
            ${answer}<br>
        `;
        answerOptions.appendChild(answerLabel);
    });

    quizQuestion.appendChild(answerOptions);
    quizContainer.innerHTML = '';
    quizContainer.appendChild(quizQuestion);
}

function showNextQuestion() {
    const selectedInput = document.querySelector(`input[name="question${currentQuestion}"]:checked`);

    if (selectedInput) {
        const userAnswer = selectedInput.value;
        const correctAnswer = quizData[currentQuestion].correctAnswer;

        if (userAnswer === correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            buildQuiz();
        } else {
            showResults();
        }
    } else {
        alert('Please select an answer.');
    }
}

function showResults() {
    alert(`You scored ${score} out of ${quizData.length}`);
}

buildQuiz();

submitButton.addEventListener('click', showNextQuestion);
