
const openWhen = [
  { title: "Open when you're sad 🥺",         text: "Tuja baby nehmi ithe ahe tula happy karnya sathi.Me maja 100% denar ahe majya shavu kadhiach sad feel na hou and jevha asa zala tr me tula khush karu nehmi 😘💗.I am always here to make you happpy my baby girl and I'll try my best to always make you happy🙂‍↔️❤️ " },
  { title: "Open when you miss me 💭",        text: "O miss karteys mala 😚.Me pn khup miss kartoy tula shavu 🤧💗 He bagh maja photo mg kami miss karshil 😁😉",img:"Aadu.jpeg" },
  { title: "Open when you're angry 😤",       text: "Raag aalay majya bala 🤧.He ghe baala ek tight hug 🙂‍↔️🫂 ",img:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWgzNXdwa2I0eXpqcXlwcmVsNDdtOGhoaGNpZzA2engwYmtrOWdyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KG5oq4vesf9r8JbBEN/giphy.gif" },
  { title: "Open when you doubt yourself ✨", text: "Tu na bala saglayat perfect ahes aani tu tujyva slef var kadhiach doubt nako ghet jau tu je pn kartis tya madhe me tula nehmi support karil majaya bala 🙂‍↔️❤️." }
];

const boosts = [
  "Tu na khup sundar ahes 🙂‍↔️💗 fakt face ni nahi tr mana ni pn khup jast sundar ahes bala 😘🫂",
  "Jevha tu mala tujya feelings sangtlya tevha tr mala yevda changla vatla hota yevda loving feel zala hota na bala khup 💗🙂‍↔️. Asa vatat hota haa moment kadhi sampuach nahi Tuje ek ek words yar sagle khup important aani special ahet majya sathi 🤧❤️",
  "Me tujya var prem karto bala karan jasa tu mala treat kartes mala yevda special feel karvtis tuje small efforts pn majya sathi khup special ahet 🤧🫂.Aani tuje eyes yarrrrr asa vatat bagat ach rahav 🙂‍↔️💗",
  "Bala ek divshi me tujyashi lagna karnar ahe 🙂‍↔️🫂 aani sagle festival small things sagla sagla manje sagla sobat celebrate karu best asanar he sagla aani me tula sagla deil je tula hava asel me maja best try karil ki tu khuppp jast khush ashil majayasobat😘❤️ ",
   "Tuja happy face baghun ach maja mood changla hoto asach nehmii hasat raha baby girl 😘😘🫂🫂💗"
];


const cardsEl = document.getElementById('cards');
const letter = document.getElementById('letter');
const letterText = document.getElementById('letterText');

// Part 1: Open-when cards
openWhen.forEach(item => {
  const b = document.createElement('button');
  b.className = 'card';
  b.textContent = item.title;
  b.addEventListener('click', () => {
    letter.hidden = true;
    void letter.offsetWidth;            // animation restart ke liye
    letterText.textContent = item.text;
    const letterImg = document.getElementById('letterImg');
if (item.img) {
  letterImg.src = item.img;
  letterImg.hidden = false;
} else {
  letterImg.hidden = true;
}
    letter.hidden = false;
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    hearts(6);
  });
  cardsEl.appendChild(b);
});

// Part 2: Mood booster
const boostBtn = document.getElementById('boost');
const boostMsg = document.getElementById('boostMsg');
let last = -1;

boostBtn.addEventListener('click', () => {
  let i;
  do { i = Math.floor(Math.random() * boosts.length); }
  while (i === last && boosts.length > 1);   // same message do baar nahi aayega
  last = i;
  boostMsg.classList.remove('pop');
  void boostMsg.offsetWidth;
  boostMsg.textContent = boosts[i];
  boostMsg.classList.add('pop');
  boostBtn.textContent = "Ek aur 💖";
  hearts(14);
});

// Floating hearts
function hearts(n) {
  const set = ['❤️', '💖', '💕', '💗', '🌸'];
  for (let k = 0; k < n; k++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = set[Math.floor(Math.random() * set.length)];
    h.style.left = Math.random() * 95 + 'vw';
    h.style.fontSize = (18 + Math.random() * 26) + 'px';
    h.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');
    h.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3200);
  }
}