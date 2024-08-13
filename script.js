const questions = [
    { question: "Ibu kota Indonesia?", answer: "Jakarta", hint: "Kota ini terkenal dengan Monas." },
    { question: "Planet terdekat dengan Matahari?", answer: "Merkurius", hint: "Dimulai dengan huruf 'M'." },
    { question: "Jumlah hari dalam setahun?", answer: "365", hint: "Lebih dari 360 tapi kurang dari 370." },
    { question: "Gas yang kita hirup untuk bernafas?", answer: "Oksigen", hint: "Dimulai dengan huruf 'O'." },
    { question: "Ibukota Jepang?", answer: "Tokyo", hint: "Kota ini terkenal dengan Gunung Fuji." },
    { question: "Siapa nama presiden ketiga Indonesia?", answer: "Bacharuddin Jusuf Habibie", hint: "pesawat terbang N-250 Gatotkaca" },
    { question: "siapa murid paling Pintar di 12 IPA 1", answer: "Rafael", hint: "baik hati, tidak sombong, rajin menabung, pria" },
    { question: "Apa ibukota Kalimantan Timur?", answer: "Pontianak", hint: "Kota Katulistiwa" },
    { question: "Sebutkan sila kedua?", answer: "Kemanusiaan yang adil dan beradab", hint: "Sikap Adil" },
    // ... tambahkan lebih banyak pertanyaan di sini hingga mencapai 2000
];

let currentQuestionIndex = 0;
let attempts = 0;

const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const resultElement = document.getElementById('result');
const hintElement = document.getElementById('hint');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerInput.value = '';
    resultElement.textContent = '';
    hintElement.textContent = '';
    attempts = 0;
}

document.getElementById('submit-answer').addEventListener('click', () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Jawaban benar!';
        resultElement.style.color = 'green';
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        setTimeout(loadQuestion, 2000);
    } else {
        attempts++;
        resultElement.textContent = `Jawaban salah! Anda punya ${3 - attempts} kesempatan lagi.`;
        resultElement.style.color = 'red';
        if (attempts >= 3) {
            resultElement.textContent = `Jawaban salah! Kesempatan habis. Jawaban yang benar adalah: ${questions[currentQuestionIndex].answer}`;
            setTimeout(() => {
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                loadQuestion();
            }, 3000);
        }
    }
});

document.getElementById('hint-button').addEventListener('click', () => {
    hintElement.textContent = questions[currentQuestionIndex].hint;
});

document.getElementById('give-up-button').addEventListener('click', () => {
    resultElement.textContent = `Anda menyerah. Jawaban yang benar adalah: ${questions[currentQuestionIndex].answer}`;
    resultElement.style.color = 'blue';
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }, 3000);
});

// Memulai game
loadQuestion();