const aboutUsSlides = document.querySelectorAll(".about-us-slide");
// ===== Slider_Script_start =====
const slides = document.querySelectorAll(".slide"),
  dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 4500);
function autoslide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 4500);
}

function slidefun(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  if (n > slides.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = slides.length;
  }
  slides[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
  // =========================About-us
  for (i = 0; i < aboutUsSlides.length; i++) {
    aboutUsSlides[i].style.display = "none";
  }
  if (n > aboutUsSlides.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = aboutUsSlides.length;
  }
  aboutUsSlides[counter - 1].style.display = "block";
}

// ===== Slider_Script_End =====
// ===== MOBILE_NAV_OPEN_&_CLOSE_start ====
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// ===== MOBILE_NAV_OPEN_&_CLOSE_end ====
// ==== SITCKY NAVIGATION START ====
const sectionHeroEl = document.querySelector("#hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector(".body-inner").classList.add("sticky");
      document
        .querySelector(".overlay-btn-wrapper")
        .style.setProperty("display", "flex");
    }
    if (ent.isIntersecting) {
      document.querySelector(".body-inner").classList.remove("sticky");
      document
        .querySelector(".overlay-btn-wrapper")
        .style.setProperty("display", "none");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-79px",
  }
);
obs.observe(sectionHeroEl);
// ==== SITCKY NAVIGATION END ====
// ==== OVERLAY-BTNS START ====

// ==== OVERLAY-BTNS END ====

// ==== NAVIGATIO PADDING
//not needed so i commentted it out
// const navHeight = document.querySelector(".header").offsetHeight;
// document.documentElement.style.setProperty("--scroll-padding",navHeight - 1 + "px");
document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight - 1 + "px"
);
