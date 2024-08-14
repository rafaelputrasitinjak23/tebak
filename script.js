let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let unlockedLevels = 1;
let username = '';

// Daftar pertanyaan dan jawaban untuk setiap level
const levels = [
    [
{ question: "Ibu kota Indonesia?", answer: "Jakarta", hint: "Kota ini terkenal dengan Monas." },
            { question: "Planet terdekat dengan Matahari?", answer: "Merkurius", hint: "Dimulai dengan huruf 'M'." },
            { question: "Jumlah hari dalam setahun?", answer: "365", hint: "Lebih dari 360 tapi kurang dari 370." },
            { question: "Gas yang kita hirup untuk bernafas?", answer: "Oksigen", hint: "Dimulai dengan huruf 'O'." },
            { question: "Ibukota Jepang?", answer: "Tokyo", hint: "Kota ini terkenal dengan Gunung Fuji." },
            { question: "Siapa nama presiden ketiga Indonesia?", answer: "Bacharuddin Jusuf Habibie", hint: "pesawat terbang N-250 Gatotkaca" },
    { question: "siapa murid paling Pintar di 12 IPA 1", answer: "Rafael", hint: "baik hati, tidak sombong, rajin menabung, pria" },
    { question: "Apa ibukota Kalimantan Timur?", answer: "Pontianak", hint: "Kota Katulistiwa" },
    { question: "Sebutkan sila kedua?", answer: "Kemanusiaan yang adil dan beradab", hint: "Sikap Adil" },
    { question: "Gunung tertinggi di Indonesia?", answer: "Puncak Jaya", hint: "Terletak di Papua" },
        // Tambahkan pertanyaan lainnya untuk Level 1
    ],
    [
                    { question: "Nama gunung tertinggi di dunia?", answer: "Everest", hint: "Gunung ini terletak di Himalaya." },
            { question: "Laut terluas di dunia?", answer: "Pasifik", hint: "Dimulai dengan huruf 'P'." },
            { question: "Jumlah warna dalam pelangi?", answer: "7", hint: "Lebih dari 6 tetapi kurang dari 8." },
            { question: "Benua terkecil di dunia?", answer: "Australia", hint: "Benua ini juga negara." },
            { question: "Nama presiden pertama Indonesia?", answer: "Soekarno", hint: "Namanya dikenal dengan panggilan 'Bung'." },
            { question: "Apa nama candi Buddha terbesar di Indonesia?", answer: "Borobudur", hint: "Terletak di Jawa Tengah" },
{ question: "Suku terbesar di Indonesia?", answer: "Suku Jawa", hint: "Banyak terdapat di pulau Jawa" },
{ question: "Bahasa resmi Indonesia?", answer: "Bahasa Indonesia", hint: "Digunakan di seluruh wilayah Indonesia" },
{ question: "Siapa yang menciptakan lagu kebangsaan Indonesia Raya?", answer: "WR Supratman", hint: "Seorang komposer dan wartawan" },
{ question: "Pulau terpadat di Indonesia?", answer: "Pulau Jawa", hint: "Terletak di bagian tengah Indonesia" },
        // Tambahkan pertanyaan lainnya untuk Level 2
    ],
    [
            { question: "Pulau yang terkenal dengan kebudayaan Hindu?", answer: "Bali", hint: "Destinasi wisata internasional" },
{ question: "Siapa tokoh pahlawan wanita dari Aceh?", answer: "Cut Nyak Dien", hint: "Berkiprah dalam perlawanan terhadap Belanda" },
{ question: "Apa nama ibukota provinsi Jawa Barat?", answer: "Bandung", hint: "Dikenal sebagai Kota Kembang" },
{ question: "Siapa penulis novel 'Bumi Manusia'?", answer: "Pramoedya Ananta Toer", hint: "Sastrawan Indonesia terkenal" },
{ question: "Apa nama tarian tradisional dari Bali?", answer: "Tari Kecak", hint: "Sering ditampilkan dalam upacara keagamaan" },
{ question: "Siapa pendiri organisasi Muhammadiyah?", answer: "KH Ahmad Dahlan", hint: "Seorang ulama dan aktivis pendidikan" },
{ question: "Sungai terpanjang di pulau Jawa?", answer: "Sungai Bengawan Solo", hint: "Menjadi inspirasi lagu" },
{ question: "Apa nama kerajaan Hindu-Buddha terbesar di Indonesia?", answer: "Majapahit", hint: "Berdiri di abad ke-13" },
{ question: "Siapa pemain bulu tangkis yang meraih medali emas pertama untuk Indonesia?", answer: "Alan Budikusuma", hint: "Meraih emas di Olimpiade Barcelona 1992" },
{ question: "Apa nama tempat ibadah umat Buddha?", answer: "Vihara", hint: "Sering ditemukan di kawasan Tionghoa" },
    ],
    [
    { question: "Apa nama perjanjian yang mengakhiri pendudukan Belanda di Indonesia?", answer: "Konferensi Meja Bundar", hint: "Diadakan di Den Haag" },
{ question: "Siapa yang merancang lambang negara Indonesia?", answer: "Sultan Hamid II", hint: "Menggabungkan berbagai unsur budaya Indonesia" },
{ question: "Suku di Indonesia yang dikenal dengan rumah adat tongkonan?", answer: "Suku Toraja", hint: "Berasal dari Sulawesi Selatan" },
{ question: "Apa nama laut yang membatasi pulau Jawa dan Kalimantan?", answer: "Laut Jawa", hint: "Terletak di utara Pulau Jawa" },
{ question: "Apa nama ibukota provinsi Sulawesi Selatan?", answer: "Makassar", hint: "Dulu dikenal dengan nama Ujung Pandang" },
{ question: "Siapa pelukis terkenal Indonesia yang dikenal dengan lukisan 'Pengantin Revolusi'?", answer: "Hendra Gunawan", hint: "Lukisannya sering menampilkan tema-tema sosial" },
{ question: "Apa nama kesultanan yang pernah berjaya di Sumatra?", answer: "Kesultanan Aceh", hint: "Salah satu kekuatan maritim di Asia Tenggara" },
{ question: "Apa nama upacara adat pemotongan kerbau di Toraja?", answer: "Rambu Solo", hint: "Dilaksanakan sebagai bagian dari upacara kematian" },
{ question: "Apa nama burung yang menjadi simbol negara Indonesia?", answer: "Garuda", hint: "Dijadikan lambang negara" },
{ question: "Apa nama makanan khas Surabaya yang terbuat dari tahu?", answer: "Tahu Tek", hint: "Disajikan dengan lontong dan bumbu kacang" },
    ],
    // Tambahkan level lainnya
];
async function loadLevels() {
    const levelsContainer = document.getElementById('levels');
    levelsContainer.innerHTML = '';

    for (let i = 0; i < levels.length; i++) {
        const levelButton = document.createElement('button');
        levelButton.textContent = `Level ${i + 1}`;
        levelButton.className = i < unlockedLevels ? 'level-button unlocked' : 'level-button locked';
        levelButton.disabled = i >= unlockedLevels;

        levelButton.addEventListener('click', () => {
            startLevel(i);
        });

        levelsContainer.appendChild(levelButton);
    }
}

function startLevel(levelIndex) {
    currentLevel = levelIndex;
    currentQuestionIndex = 0;
    document.getElementById('levels-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionData = levels[currentLevel][currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('answer-input').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('hint').textContent = '';
}

document.getElementById('submit-answer').addEventListener('click', () => {
    const answerInput = document.getElementById('answer-input').value.trim();
    const correctAnswer = levels[currentLevel][currentQuestionIndex].answer;

    if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = 'Jawaban Benar!';
        document.getElementById('result').style.color = 'green';
        score++;
        saveProgress();
        setTimeout(() => {
            currentQuestionIndex++;

            if (currentQuestionIndex < levels[currentLevel].length) {
                loadQuestion();
            } else {
                checkLevelProgression();
            }
        }, 1500);
    } else {
        document.getElementById('result').textContent = 'Jawaban salah. Coba lagi!';
        document.getElementById('result').style.color = 'red';
    }
});

document.getElementById('hint-button').addEventListener('click', () => {
    const hint = levels[currentLevel][currentQuestionIndex].hint;
    document.getElementById('hint').textContent = `Petunjuk: ${hint}`;
});

document.getElementById('give-up-button').addEventListener('click', () => {
    const correctAnswer = levels[currentLevel][currentQuestionIndex].answer;
    document.getElementById('result').textContent = `Jawaban benar adalah: ${correctAnswer}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < levels[currentLevel].length) {
        loadQuestion();
    } else {
        checkLevelProgression();
    }
});

function checkLevelProgression() {
    if (score >= 9) {
        if (currentLevel < levels.length - 1) {
            unlockedLevels = Math.max(unlockedLevels, currentLevel + 2);
            saveProgress();
            showLevelUpNotification(currentLevel + 1, currentLevel + 2);
        } else {
            alert('Selamat! Anda telah menyelesaikan semua level.');
        }
    } else {
        alert(`Anda tidak berhasil mencapai skor minimum untuk membuka level berikutnya.`);
    }

    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('levels-container').classList.remove('hidden');
    loadLevels();
}

function showLevelUpNotification(completedLevel, nextLevel) {
    document.getElementById('completed-level').textContent = completedLevel;
    document.getElementById('next-level').textContent = nextLevel;
    const notification = document.getElementById('level-up-notification');
    notification.classList.remove('hidden');

    document.getElementById('continue-button').addEventListener('click', () => {
        notification.classList.add('hidden');
        startLevel(currentLevel + 1);
    });
}

async function saveProgress() {
    const progress = {
        unlockedLevels,
        score
    };
    await fetch('/saveProgress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            progress
        }),
    });
}

async function loadProgress() {
    const response = await fetch(`/loadProgress?username=${username}`);
    const progress = await response.json();
    if (progress) {
        unlockedLevels = progress.unlockedLevels || 1;
        score = progress.score || 0;
    }
}

document.getElementById('start-game-button').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('levels-container').classList.remove('hidden');
});

document.getElementById('login-button').addEventListener('click', async () => {
    username = document.getElementById('username').value.trim();
    if (username) {
        await loadProgress();
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('start-screen').classList.remove('hidden');
    } else {
        alert('Masukkan nama Anda untuk login.');
    }
});

loadLevels();
