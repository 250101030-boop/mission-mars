
const backBtn= document.querySelector(".back-btn");
const countScreen = document.querySelector(".countscreen");
const steps = document.querySelectorAll(".countscreen .step");
const flash = document.querySelector(".flash");
const smoke = document.querySelector(".smoke");
const space = document.querySelector(".space");
const launch = document.querySelector(".launch");
const track = document.querySelector(".track");
const rocket = document.querySelector(".rocket-space");
const container = document.querySelector(".journey"); // your horizontal scroll div
const btn = document.getElementById("landingBtn");


window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  rocket.forEach(r => {
    r.style.transform = `translateY(-${scrollY * 0.5}px)`;
  });

});


backBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
});



let scrollProgress = 0;
let isLocked = true;

window.addEventListener("wheel", (e) => {
  if (!isLocked) return;

  e.preventDefault();

  // scroll control
  scrollProgress += e.deltaY * 0.001;

  // clamp
  scrollProgress = Math.max(0, Math.min(1, scrollProgress));

  let index = Math.floor(scrollProgress * steps.length);

  index = Math.min(index, steps.length - 1);

  // update steps
  steps.forEach(s => s.classList.remove("active"));
  steps[index].classList.add("active");

  // 🔓 unlock when finished
  if (scrollProgress >= 0.95) {
    isLocked = false;

    countScreen.style.position = "relative"; // release
  }

}, { passive: false });



let triggered = false;

window.addEventListener("scroll", () => {
  const top = launch.getBoundingClientRect().bottom;

  if (top < window.innerHeight && !triggered) {
    triggered = true;

    // ⚡ flash
    flash.classList.add("active");
    launch.classList.add("shake");
    launch.classList.add("hide-bg");

    // 💨 smoke after flash
    setTimeout(() => {
      smoke.classList.add("active");
    }, 300);

    // 🌌 space reveal
    setTimeout(() => {
      space.classList.add("active");
      launch.classList.remove("shake");

    }, 1000);
  }
});
// document.body.style.background = "white";
setTimeout(() => {
  document.body.style.background = "black";
}, 300);



// ================= SCROLL ANIMATION =================
window.addEventListener("scroll", () => {

  if (!countingDone) return;

  let scroll = window.scrollY;

  // horizontal movement
  track.style.transform = `translateX(-${scroll}px)`;
});
document.body.style.overflow = "auto";


window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;
  const start = journey.offsetTop;

  if (scrollY > start) {

    rocket.style.transform = `
      translateX(${scrollX}px)
      translateY(-50%)
      rotate(10deg)
    `;}    
});


container.addEventListener("scroll", () => {
  const scrollLeft = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;

  // when near end (adjust 50 if needed)
  if (scrollLeft >= maxScroll - 50) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.location.href = "landing.html";
   alert("clicked"); // test
});
