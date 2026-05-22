/* ============================
   PARTICULAS FUTURISTAS
============================ */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#22d3ee", "#ec4899", "#a855f7"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#22d3ee", "opacity": 0.3, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
  },
  "retina_detect": true
});


/* ============================
   BOTÓN NEON ON / OFF
============================ */
const toggleChip = document.getElementById('toggleChip');

toggleChip.addEventListener('click', () => {
  document.body.classList.toggle('no-anim');
  const isOff = document.body.classList.contains('no-anim');
  toggleChip.textContent = isOff ? 'NEON OFF' : 'NEON ON';
  toggleChip.classList.toggle('off', isOff);
});


/* ============================
   VOZ FLUIDA + RÁPIDA + NATURAL
============================ */
function speak(text) {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }

  const clean = text
    .replace(/\s+/g, " ")
    .replace(/[,.;:]+/g, ",")
    .trim();

  const utter = new SpeechSynthesisUtterance(clean);

  const isEnglish = /[a-zA-Z]/.test(clean);

  utter.lang = isEnglish ? "en-US" : "es-CL";
  utter.rate = isEnglish ? 1.55 : 1.90;
  utter.pitch = 1.05;
  utter.volume = 1;

  utter.onstart = () => {
    speechSynthesis.pause();
    speechSynthesis.resume();
  };

  speechSynthesis.speak(utter);
}
