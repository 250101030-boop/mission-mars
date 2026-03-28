// const person = document.querySelector(".person");
// const infoBox = document.querySelector(".info-box");
// const btn = document.getElementById("launchBtn");

// window.addEventListener("scroll", () => {
//   if(window.scrollY > 200){
//     person.classList.add("show");
//     infoBox.classList.add("show");
//   }
// });

const heroBg = document.querySelector(".hero-bg");
const person = document.querySelector(".person");
const infoBox = document.querySelector(".info-box");
const personSection = document.querySelector(".person-section");

const btn= document.querySelector(".next-btn");

// ================= HERO EFFECT =================
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let progress = scrollY / window.innerHeight;

  heroBg.style.filter = `blur(${progress * 8}px)`;
  heroBg.style.transform = `scale(${1 + progress * 0.1})`;

  const rect = personSection.getBoundingClientRect();

  if (
    rect.top < window.innerHeight * 0.7 &&
    rect.bottom > window.innerHeight * 0.3
  ) {
    person.classList.add("show");
    infoBox.classList.add("show");
  } else {
    person.classList.remove("show");
    infoBox.classList.remove("show");
  }
});
// ================= STEP SYSTEM =================
const steps = document.querySelectorAll(".step");
let currentStep = 0;

infoBox.addEventListener("scroll", () => {
  const scrollTop = infoBox.scrollTop;
  const maxScroll = infoBox.scrollHeight - infoBox.clientHeight;

  const progress = scrollTop / maxScroll;
  const stepIndex = Math.floor(progress * steps.length);
  const newStep = Math.min(stepIndex, steps.length - 1);

  if (newStep !== currentStep) {
    steps[currentStep].classList.remove("active");
    steps[newStep].classList.add("active");
    currentStep = newStep;
  }
});


/* BUTTON → NEW PAGE */
btn.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "launch.html";
  }, 800);
});