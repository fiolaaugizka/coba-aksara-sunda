/* =====================
   ELEMENT
===================== */
const flipCard = document.getElementById("flipCard");
const backImg = document.getElementById("backImg");
const bubble = document.getElementById("cepotBubble");

const startBtn = document.getElementById("startBtn");
const playBtnHeader = document.getElementById("playBtnHeader");

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const cepotWrapper = document.getElementById("cepotWrapper");
const coverSection = document.getElementById("cover");
const cardsSection = document.getElementById("cards");
const quizSection = document.getElementById("quiz");

const frontImg = document.getElementById("frontImg");
const frontLabel = document.getElementById("frontLabel");
const backLabel = document.getElementById("backLabel");

const vokalContainer = document.getElementById("vokalContainer");
const konsonanContainer = document.getElementById("konsonanContainer");

const cardElement = document.getElementById("flipCard");
const cardLabel = document.getElementById("cardLabel");

/* =====================
   AUDIO
===================== */
const soundCard = new Audio();
const quizBgm = new Audio("audio/quiz_bgm.mp3");
const sfxCorrect = new Audio("audio/correct.mp3");
const sfxWrong = new Audio("audio/wrong.mp3");

quizBgm.loop = true;

/* =====================
   STATE
===================== */
let currentCard = 0;
let isPressed = false;

let quizIndex = 0;
let score = 0;
let quizLocked = false;

/* =====================
   DATA KARTU
===================== */
const cardsData = [
  {
    id: "swara-a",
    label: "Aksara Swara",
    frontImg: "img/front_a.png",
    backImg: "img/back_a.png",
    sound: "audio/a.mp3",
    bubble: "Ini huruf vokal A 😊",
    type: "vokal"
  },
  {
    id: "swara-e2",
    label: "Aksara Swara",
    frontImg: "img/front_e2.png",
    backImg: "img/back_e2.png",
    sound: "audio/e2.mp3",
    bubble: "Ini huruf vokal É 😊",
    type: "vokal"
  },
  {
    id: "swara-e",
    label: "Aksara Swara",
    frontImg: "img/front_e.png",
    backImg: "img/back_e.png",
    sound: "audio/e.mp3",
    bubble: "Ini huruf vokal E 😊",
    type: "vokal"
  },
  {
    id: "swara-eu",
    label: "Aksara Swara",
    frontImg: "img/front_eu.png",
    backImg: "img/back_eu.png",
    sound: "audio/eu.mp3",
    bubble: "Ini huruf vokal EU 😊",
    type: "vokal"
  },
  {
    id: "swara-i",
    label: "Aksara Swara",
    frontImg: "img/front_i.png",
    backImg: "img/back_i.png",
    sound: "audio/i.mp3",
    bubble: "Ini huruf vokal I 😊",
    type: "vokal"
  },
  {
    id: "swara-o",
    label: "Aksara Swara",
    frontImg: "img/front_o.png",
    backImg: "img/back_o.png",
    sound: "audio/o.mp3",
    bubble: "Ini huruf vokal O 😊",
    type: "vokal"
  },
  {
    id: "swara-u",
    label: "Aksara Swara",
    frontImg: "img/front_u.png",
    backImg: "img/back_u.png",
    sound: "audio/u.mp3",
    bubble: "Ini huruf vokal U 😊",
    type: "vokal"
  },
  {
    id: "ba",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ba.png",
    backImg: "img/back_ba.png",
    sound: "audio/ba.mp3",
    bubble: "Ini huruf konsonan BA 😊",
    type: "konsonan"
  },
  {
    id: "ca",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ca.png",
    backImg: "img/back_ca.png",
    sound: "audio/ca.mp3",
    bubble: "Ini huruf konsonan CA 😊",
    type: "konsonan"
  },
  {
    id: "da",
    label: "Aksara Ngalagena",
    frontImg: "img/front_da.png",
    backImg: "img/back_da.png",
    sound: "audio/da.mp3",
    bubble: "Ini huruf konsonan DA 😊",
    type: "konsonan"
  },
  {
    id: "fa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_fa.png",
    backImg: "img/back_fa.png",
    sound: "audio/fa.mp3",
    bubble: "Ini huruf konsonan FA 😊",
    type: "konsonan"
  },
  {
    id: "ga",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ga.png",
    backImg: "img/back_ga.png",
    sound: "audio/ga.mp3",
    bubble: "Ini huruf konsonan GA 😊",
    type: "konsonan"
  },
  {
    id: "ha",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ha.png",
    backImg: "img/back_ha.png",
    sound: "audio/ha.mp3",
    bubble: "Ini huruf konsonan HA 😊",
    type: "konsonan"
  },
  {
    id: "ja",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ja.png",
    backImg: "img/back_ja.png",
    sound: "audio/ja.mp3",
    bubble: "Ini huruf konsonan JA 😊",
    type: "konsonan"
  },
  {
    id: "ka",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ka.png",
    backImg: "img/back_ka.png",
    sound: "audio/ka.mp3",
    bubble: "Ini huruf konsonan KA 😊",
    type: "konsonan"
  },
  {
    id: "la",
    label: "Aksara Ngalagena",
    frontImg: "img/front_la.png",
    backImg: "img/back_la.png",
    sound: "audio/la.mp3",
    bubble: "Ini huruf konsonan LA 😊",
    type: "konsonan"
  },
  {
    id: "ma",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ma.png",
    backImg: "img/back_ma.png",
    sound: "audio/ma.mp3",
    bubble: "Ini huruf konsonan MA 😊",
    type: "konsonan"
  },
  {
    id: "na",
    label: "Aksara Ngalagena",
    frontImg: "img/front_na.png",
    backImg: "img/back_na.png",
    sound: "audio/na.mp3",
    bubble: "Ini huruf konsonan NA 😊",
    type: "konsonan"
  },
  {
    id: "nga",
    label: "Aksara Ngalagena",
    frontImg: "img/front_nga.png",
    backImg: "img/back_nga.png",
    sound: "audio/nga.mp3",
    bubble: "Ini huruf konsonan NGA 😊",
    type: "konsonan"
  },
  {
    id: "nya",
    label: "Aksara Ngalagena",
    frontImg: "img/front_nya.png",
    backImg: "img/back_nya.png",
    sound: "audio/nya.mp3",
    bubble: "Ini huruf konsonan NYA 😊",
    type: "konsonan"
  },
  {
    id: "pa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_pa.png",
    backImg: "img/back_pa.png",
    sound: "audio/pa.mp3",
    bubble: "Ini huruf konsonan PA 😊",
    type: "konsonan"
  },
  {
    id: "qa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_qa.png",
    backImg: "img/back_qa.png",
    sound: "audio/qa.mp3",
    bubble: "Ini huruf konsonan QA 😊",
    type: "konsonan"
  },
  {
    id: "ra",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ra.png",
    backImg: "img/back_ra.png",
    sound: "audio/ra.mp3",
    bubble: "Ini huruf konsonan RA 😊",
    type: "konsonan"
  },
  {
    id: "sa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_sa.png",
    backImg: "img/back_sa.png",
    sound: "audio/sa.mp3",
    bubble: "Ini huruf konsonan SA 😊",
    type: "konsonan"
  },
  {
    id: "ta",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ta.png",
    backImg: "img/back_ta.png",
    sound: "audio/ta.mp3",
    bubble: "Ini huruf konsonan TA 😊",
    type: "konsonan"
  },
  {
    id: "va",
    label: "Aksara Ngalagena",
    frontImg: "img/front_va.png",
    backImg: "img/back_va.png",
    sound: "audio/va.mp3",
    bubble: "Ini huruf konsonan VA 😊",
    type: "konsonan"
  },
  {
    id: "wa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_wa.png",
    backImg: "img/back_wa.png",
    sound: "audio/wa.mp3",
    bubble: "Ini huruf konsonan WA 😊",
    type: "konsonan"
  },
  {
    id: "xa",
    label: "Aksara Ngalagena",
    frontImg: "img/front_xa.png",
    backImg: "img/back_xa.png",
    sound: "audio/xa.mp3",
    bubble: "Ini huruf konsonan XA 😊",
    type: "konsonan"
  },
  {
    id: "ya",
    label: "Aksara Ngalagena",
    frontImg: "img/front_ya.png",
    backImg: "img/back_ya.png",
    sound: "audio/ya.mp3",
    bubble: "Ini huruf konsonan YA 😊",
    type: "konsonan"
  },
  {
    id: "za",
    label: "Aksara Ngalagena",
    frontImg: "img/front_za.png",
    backImg: "img/back_za.png",
    sound: "audio/za.mp3",
    bubble: "Ini huruf konsonan ZA 😊",
    type: "konsonan"
  },
  {
    id: "pamaeh",
    label: "Aksara Rarangken",
    frontImg: "img/front_pamaeh.png",
    backImg: "img/back_pamaeh.png",
    bubble: "Ini rarangken Pamaeh",
    type: "rarangken"
  },
  {
    id: "pamepet",
    label: "Aksara Rarangken",
    frontImg: "img/front_pamepet.png",
    backImg: "img/back_pamepet.png",
    bubble: "Ini rarangken Pamepet",
    type: "rarangken"
  },
  {
    id: "pamingkal",
    label: "Aksara Rarangken",
    frontImg: "img/front_pamingkal.png",
    backImg: "img/back_pamingkal.png",
    bubble: "Ini rarangken Pamingkal",
    type: "rarangken"
  },
  {
    id: "paneleng",
    label: "Aksara Rarangken",
    frontImg: "img/front_paneleng.png",
    backImg: "img/back_paneleng.png",
    bubble: "Ini rarangken Panèlèng",
    type: "rarangken"
  },
  {
    id: "paneuleung",
    label: "Aksara Rarangken",
    frontImg: "img/front_paneuleung.png",
    backImg: "img/back_paneuleung.png",
    bubble: "Ini rarangken Paneuleung",
    type: "rarangken"
  },
  {
    id: "panghulu",
    label: "Aksara Rarangken",
    frontImg: "img/front_panghulu.png",
    backImg: "img/back_panghulu.png",
    bubble: "Ini rarangken Panghulu",
    type: "rarangken"
  },
  {
    id: "panglayar",
    label: "Aksara Rarangken",
    frontImg: "img/front_panglayar.png",
    backImg: "img/back_panglayar.png",
    bubble: "Ini rarangken Panglayar",
    type: "rarangken"
  },
  {
    id: "pangwisad",
    label: "Aksara Rarangken",
    frontImg: "img/front_pangwisad.png",
    backImg: "img/back_pangwisad.png",
    bubble: "Ini rarangken Pangwisad",
    type: "rarangken"
  },
  {
    id: "panolong",
    label: "Aksara Rarangken",
    frontImg: "img/front_panolong.png",
    backImg: "img/back_panolong.png",
    bubble: "Ini rarangken Panolong",
    type: "rarangken"
  },
  {
    id: "panyakra",
    label: "Aksara Rarangken",
    frontImg: "img/front_panyakra.png",
    backImg: "img/back_panyakra.png",
    bubble: "Ini rarangken Panyakra",
    type: "rarangken"
  },
  {
    id: "panyecek",
    label: "Aksara Rarangken",
    frontImg: "img/front_panyecek.png",
    backImg: "img/back_panyecek.png",
    bubble: "Ini rarangken Panyecek",
    type: "rarangken"
  },
  {
    id: "panyiku",
    label: "Aksara Rarangken",
    frontImg: "img/front_panyiku.png",
    backImg: "img/back_panyiku.png",
    bubble: "Ini rarangken Panyiku",
    type: "rarangken"
  }
];

/* =====================
   RENDER GRID
===================== */
function renderCards() {
  vokalContainer.innerHTML = "";
  konsonanContainer.innerHTML = "";

  cardsData.forEach((card, index) => {
    if (card.type === "rarangken") return; // ❌ jangan masuk sini

    const btn = document.createElement("button");
    btn.className = "grid-card";
    btn.id = card.id; // ✅ INI WAJIB
    btn.innerHTML = `
      <img src="${card.frontImg}">
      <span>${card.label}</span>
    `;

    btn.addEventListener("click", () => {
  currentCard = index;
  loadCard(currentCard);
  scrollToFlipCard(); // ✅ FIX
});

    if (card.type === "vokal") {
      vokalContainer.appendChild(btn);
    } else if (card.type === "konsonan") {
      konsonanContainer.appendChild(btn);
    }
  });
}

function renderRarangkenMenu() {
  const container = document.getElementById("rarangkenContainer");
  if (!container) return;

  container.innerHTML = "";

  cardsData.forEach((card, index) => {
    if (card.type !== "rarangken") return;

    const btn = document.createElement("button");
    btn.className = "grid-card rarangken-card";
    btn.id = card.id; // ✅ INI WAJIB
    btn.innerHTML = `
      <img src="${card.frontImg}">
      <span>${card.label}</span>
    `;

    btn.addEventListener("click", () => {
  currentCard = index;
  loadCard(currentCard);
  scrollToFlipCard(); // ✅ FIX
});

    container.appendChild(btn);
  });
}

/* =====================
   AUTO SCROLL KE KARTU
===================== */
function scrollToFlipCard() {
  const target = document.getElementById("flipTarget");
  if (!target) return;

  requestAnimationFrame(() => {
    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      100;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
}

/* =====================
   CEPOT VISIBILITY
===================== */
function updateCepotVisibility() {
  const coverBottom = coverSection.getBoundingClientRect().bottom;
  cepotWrapper.classList.toggle("show", coverBottom <= 80);
}

window.addEventListener("scroll", updateCepotVisibility);

/* =====================
   NAVIGASI
===================== */
document.querySelectorAll("[data-scroll]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    scrollToSection(link.dataset.scroll);
    mobileNav.classList.add("hidden");
  });
});

/* MOBILE MENU */
menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

/* =====================
   FLIP CARD
===================== */
flipCard?.addEventListener("click", e => {
  if (e.target === backImg) return;

  if (!flipCard.classList.contains("flipped")) {
    flipCard.classList.add("flipped");
    bubble.textContent = "Tekan dan tahan kartunya ya 👆";
  }
});

backImg.addEventListener("click", e => {
  if (cardsData[currentCard].type === "rarangken") return;

  e.stopPropagation();

  if (!isPressed) {
    flipCard.classList.remove("flipped");
    bubble.textContent = "Ayo, coba kartu lainnya 😊";
  }
});

/* =====================
   PRESS & HOLD
===================== */
function startPress(e) {
  if (cardsData[currentCard].type === "rarangken") return;

  e.stopPropagation();
  isPressed = true;

  backImg.classList.add("press", "jump");
  bubble.textContent = "Dengarkan suaranya ya 👂";

  const card = cardsData[currentCard];
if (card?.sound) {
  soundCard.src = card.sound;
  soundCard.currentTime = 0;
  soundCard.play();
}
}

function stopPress() {
  backImg.classList.remove("press", "jump");

  soundCard.pause();
  soundCard.currentTime = 0;

  setTimeout(() => {
    isPressed = false;
  }, 100);
}


/* =====================
   FLIP BALIK
===================== */
backImg.addEventListener("click", e => {
  e.stopPropagation();

  if (!isPressed) {
    flipCard.classList.remove("flipped");
    bubble.textContent = "Ayo, coba kartu lainnya 😊";
  }
});

/* =====================
   AUDIO END
===================== */
soundCard.addEventListener("ended", () => {
  stopPress();
  bubble.textContent = "Wah, hebat sekali! 🎉";
});

/* =====================
   LOAD KARTU
===================== */
function loadCard(index) {
  setCepotMessage("📖 Yuk pelajari kartu ini!");

  const card = cardsData[index];

  frontImg.src = card.frontImg;
  backImg.src = card.backImg;

  frontLabel.textContent = card.label;
  backLabel.textContent = card.label;

  flipCard.classList.remove("flipped", "press", "jump", "silent");

  // RESET SEMUA HANDLER
  frontImg.onclick = null;
  backImg.onclick = null;
  backImg.onmousedown = null;
  backImg.onmouseup = null;
  backImg.onmouseleave = null;
  backImg.ontouchstart = null;
  backImg.ontouchend = null;

  // ===== RARANGKEN =====
  if (card.type === "rarangken") {
    soundCard.pause();
    soundCard.currentTime = 0;

    backImg.classList.remove("press", "jump");
    flipCard.classList.add("silent");

    setCepotMessage(`🧩 Rarangken ${card.label}`);

    frontImg.onclick = () => {
      flipCard.classList.add("flipped");
      setCepotMessage(`📘 ${card.bubble}`);
    };

    backImg.onclick = () => {
      flipCard.classList.remove("flipped");
      setCepotMessage(`🧩 Rarangken ${card.label}`);
    };

    return;
  }

  // ================= NORMAL (VOKAL / KONSONAN) =================
  soundCard.src = card.sound;

  setCepotMessage(card.bubble);

  backImg.onmousedown = startPress;
  backImg.onmouseup = stopPress;
  backImg.onmouseleave = stopPress;
  backImg.ontouchstart = startPress;
  backImg.ontouchend = stopPress;

  backImg.onclick = e => {
    e.stopPropagation();
    if (!isPressed) {
      flipCard.classList.remove("flipped");
      setCepotMessage("Ayo, coba kartu lainnya 😊");
    }
  };
}

/* =====================
   SCROLL & LOCK
===================== */
function scrollToSection(id) {
  if (quizLocked && id !== "quiz") {
    setCepotMessage("Selesaikan quiz dulu ya 😊");
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (id === "quiz") {
    setCepotMessage("Pilih huruf yang sesuai ya 😊");
  }
}

//* START GAME & EVENT */
function startGame() {
  scrollToSection("cards");
}

document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const playBtnHeader = document.getElementById("playBtnHeader");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const cekSusunanBtn = document.getElementById("cekSusunanBtn");

  startBtn?.addEventListener("click", startGame);
  playBtnHeader?.addEventListener("click", startGame);
  startQuizBtn?.addEventListener("click", startQuiz);
  cekSusunanBtn?.addEventListener("click", cekSusunan);

});

/* QUIZ GAME */
const quizHuruf = [
  {
    aksara: "img/front_ka.png",
    jawaban: "ka",
    opsi: ["ka", "ga", "nga", "pa"]
  },
  {
    aksara: "img/front_fa.png",
    jawaban: "fa",
    opsi: ["sa", "ra", "fa", "pa"]
  },
  {
    aksara: "img/front_ma.png",
    jawaban: "ma",
    opsi: ["va", "fa", "za", "ma"]
  },
  {
    aksara: "img/front_za.png",
    jawaban: "za",
    opsi: ["za", "xa", "fa", "ma"]
  },
  {
    aksara: "img/front_nga.png",
    jawaban: "nga",
    opsi: ["nga", "nya", "sa", "ya"]
  },
  {
    aksara: "img/front_nya.png",
    jawaban: "nya",
    opsi: ["nga", "wa", "qa", "nya"]
  },
  {
    aksara: "img/front_a.png",
    jawaban: "a",
    opsi: ["eu", "i", "a", "e"]
  },
  {
    aksara: "img/front_o.png",
    jawaban: "o",
    opsi: ["è", "o", "a", "i"]
  },
  {
    aksara: "img/front_i.png",
    jawaban: "i",
    opsi: ["e", "i", "eu", "o"]
  },
  {
    aksara: "img/front_eu.png",
    jawaban: "eu",
    opsi: ["o", "i", "a", "eu"]
  }
];

/* =====================
   LOAD QUIZ
===================== */
function startQuiz() {
  console.log("Tombol Mulai Quiz ditekan");

  const quizSection = document.getElementById("quiz");
  if (!quizSection) {
    console.error("Section quiz tidak ditemukan");
    return;
  }

  quizLocked = true;
  quizIndex = 0;
  score = 0;

  // 🔒 KUNCI SCROLL
  document.body.classList.add("quiz-lock");

  // ❌ SEMBUNYIKAN KARTU
  document.getElementById("cards")?.classList.add("cards-hidden");

  // UI
  document.getElementById("startQuizBtn").classList.add("hidden");
  document.getElementById("endQuizBtn").classList.remove("hidden");
  document.getElementById("quizAksara").classList.remove("hidden");
  document.getElementById("quizOptions").classList.remove("hidden");

  // tampilkan quiz
  quizSection.classList.add("quiz-active");

  // 🔊 PLAY SOUND QUIZ (AMAN)
  const quizSound = document.getElementById("quizSound");
  if (quizSound) {
    quizSound.currentTime = 0;
    quizSound.loop = true;
    quizSound.play().catch(() => {});
  }

  // audio aman (user interaction)
  try {
    quizBgm.currentTime = 0;
    quizBgm.play();
  } catch (e) {
    console.warn("Audio diblokir browser");
  }

  quizSection.scrollIntoView({ behavior: "smooth" });
  loadQuiz();
}

function setCepotMessage(text) {
  if (!bubble) return;
  bubble.innerHTML = text;
}

function loadQuiz() {
  if (quizIndex >= quizHuruf.length) {
    endQuizManual();
    return;
  }

  const q = quizHuruf[quizIndex];
  const aksaraImg = document.getElementById("quizAksara");
  const options = document.getElementById("quizOptions");

  aksaraImg.src = q.aksara;
  options.innerHTML = "";

  q.opsi.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    options.appendChild(btn);
  });

  setCepotMessage("Pilih jawaban yang benar ya 😊");
}

/* =====================
   CHECK ANSWER
===================== */
function setCepotMood(type, message) {
  const img = document.getElementById("cepotImg");
  const bubble = document.getElementById("cepotBubble");

  if (!img || !bubble) return;

  let src = "img/cepot.png";

  if (type === "happy") src = "img/cepot_happy.png";
  if (type === "sad") src = "img/cepot_sad.png";

  img.src = "";
  setTimeout(() => {
    img.classList.remove("happy", "sad");
img.classList.add(type);

img.src = src;

  }, 10);

  if (message) bubble.innerHTML = message;
}

function resetCepotImage() {
  const img = document.getElementById("cepotImg");
  if (!img) return;

  img.src = "img/cepot.png";
}

function checkAnswer(ans) {
  const q = quizHuruf[quizIndex];

  if (!q) return;

  if (ans === q.jawaban) {
  score += 10;
  sfxCorrect.play();
  setCepotMood("happy", "🎉 Hebat! Jawaban kamu benar!");
    quizIndex++;
    setTimeout(loadQuiz, 700);
  } else {
    sfxWrong.currentTime = 0;
    sfxWrong.play();
    setCepotMood("sad", "❌ Hmm… belum tepat, coba lagi ya!");
  }
}

/* =====================
   END QUIZ
===================== */
function endQuizManual() {
  quizLocked = false;

  const quizSound = document.getElementById("quizSound");
  if (quizSound) {
    quizSound.pause();
    quizSound.currentTime = 0;
  }

  // 🔓 BUKA SCROLL
  document.body.classList.remove("quiz-lock");

  // 📦 TAMPILKAN KARTU LAGI
  document.getElementById("cards")
    ?.classList.remove("cards-hidden");

  document.getElementById("startQuizBtn").classList.remove("hidden");
  document.getElementById("endQuizBtn").classList.add("hidden");
  document.getElementById("quizAksara").classList.add("hidden");
  document.getElementById("quizOptions").classList.add("hidden");

  quizSound.pause();
quizSound.currentTime = 0;

  setCepotMessage(
    `🧸 Quiz dihentikan!\nSkor kamu: ${score}\n` +
    "Kita bisa main lagi nanti 💕"
  );
  resetCepotImage(); // ⬅️ HANYA GAMBAR
}

/* =====================
   INIT (AMAN)
===================== */
window.addEventListener("DOMContentLoaded", () => {
  renderCards();
  renderRarangkenMenu();
  loadCard(currentCard);

  startBtn?.addEventListener("click", startGame);
  playBtnHeader?.addEventListener("click", startGame);

  document.getElementById("startQuizBtn")?.addEventListener("click", startQuiz);
  document.getElementById("endQuizBtn")?.addEventListener("click", endQuizManual);
  document.getElementById("cekSusunanBtn")?.addEventListener("click", cekSusunan);

  console.log("APP READY ✅");
});

/* QUIZ GAME 2 */
document.getElementById("susunBtn")
  ?.addEventListener("click", susunKata);

/* === BATASI INPUT MAKSIMAL 20 HURUF === */
document.getElementById("susunInput")
  ?.addEventListener("input", batasiInput20);

function batasiInput20(e) {
  const input = e.target;
  const valid = input.value.replace(/[^a-zA-Zéèu\s]/g, "");

  if (valid.length > 20) {
    input.value = valid.slice(0, 20);
    setCepotMessage("⚠️ Maksimal 20 huruf saja");
  } else {
    input.value = valid;
  }
}

/* === KONSONAN (PRIORITAS MAJEMUK) === */
const KONSONAN_SET = [
  "ng","ny","kh","sy",
  "b","c","d","f","g","h","j","k","l","m",
  "n","p","q","r","s","t","v","w","x","y","z"
];

/* === GET KARTU === */
function getKonsonan(key) {
  return cardsData.find(c =>
    c.type === "konsonan" &&
    c.frontImg.toLowerCase().includes(`_${key}`)
  );
}

function getVokal(key) {
  return cardsData.find(c =>
    c.type === "vokal" &&
    c.frontImg.toLowerCase().includes(`_${key}`)
  );
}

function getRarangken(name) {
  return cardsData.find(c =>
    c.type === "rarangken" &&
    c.frontImg.toLowerCase().includes(`_${name}`)
  );
}

/* === MAIN === */
function susunKata() {
  const input = document.getElementById("susunInput").value
    .toLowerCase()
    .trim();

  const hasil = document.getElementById("hasilSusun");
  hasil.innerHTML = "";

  if (!input) {
    setCepotMessage("Ketik kata dulu ya 😊");
    return;
  }

  /* === PETA VOKAL → RARANGKEN === */
  const vokalMap = {
    a: null,
    i: "panghulu",
    u: "panyiku",
    e: "pamepet",
    é: "paneleng",
    eu: "paneuleung",
    o: "panolong"
  };

  const kataList = input.split(/\s+/);

  kataList.forEach(kata => {
    const baris = document.createElement("div");
    baris.className = "susun-row";

    let i = 0;
    let prevIsKonsonan = false;

    while (i < kata.length) {
      const sisa = kata.slice(i);

      /* === AKSARA SWARA (VOKAL BERDIRI) === */
      const vokalKey = Object.keys(vokalMap)
        .sort((a, b) => b.length - a.length)
        .find(v => sisa.startsWith(v));

      if (vokalKey && !prevIsKonsonan) {
        const vokal = getVokal(vokalKey);
        if (vokal) {
          const img = document.createElement("img");
          img.src = vokal.frontImg;
          img.className = "susun-card";
          baris.appendChild(img);
        }
        i += vokalKey.length;
        prevIsKonsonan = false;
        continue;
      }

      /* === KONSONAN === */
      const konsonanKey = KONSONAN_SET
        .sort((a, b) => b.length - a.length)
        .find(k => sisa.startsWith(k));

      if (!konsonanKey) {
        i++;
        prevIsKonsonan = false;
        continue;
      }

      const konsonan = getKonsonan(konsonanKey);
      if (!konsonan) {
        i++;
        prevIsKonsonan = false;
        continue;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "susun-card-wrapper";

      const base = document.createElement("img");
      base.src = konsonan.frontImg;
      base.className = "susun-card";
      wrapper.appendChild(base);
      baris.appendChild(wrapper);

      i += konsonanKey.length;
      prevIsKonsonan = true;

      /* === RARANGKEN (VOKAL SETELAH KONSONAN) === */
      const vokalSetelah = Object.keys(vokalMap)
        .sort((a, b) => b.length - a.length)
        .find(v => kata.slice(i).startsWith(v));

      if (vokalSetelah && vokalMap[vokalSetelah]) {
        const r = getRarangken(vokalMap[vokalSetelah]);
        if (r) {
          const img = document.createElement("img");
          img.src = r.frontImg;
          img.className = "susun-rarangken";
          wrapper.appendChild(img);
        }
        i += vokalSetelah.length;
        prevIsKonsonan = false;
      }
    }

    hasil.appendChild(baris);
  });

  setCepotMessage("Inilah hasil tulisan Aksara Sunda nya ✨");
}

/* =====================
   AUTO SCROLL DARI QR
   (TAMBAHKAN DI SINI)
===================== */
window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const target = document.getElementById(hash);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  target.classList.add("highlight");

  setTimeout(() => {
    target.classList.remove("highlight");
  }, 3000);
});