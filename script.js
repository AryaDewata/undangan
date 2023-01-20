// Navigation Color
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu a");
const hamburgerButton = document.querySelector(".hamburger-btn");

// Navigation
if (window.innerWidth >= 768) {
  window.onscroll = function () {
    backgroundNavbar();
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 2490) {
      navLinkActive(menuLink[4]);
    } else if (scrollTop >= 2080) {
      navLinkActive(menuLink[3]);
    } else if (scrollTop >= 1200) {
      navLinkActive(menuLink[2]);
    } else if (scrollTop >= 500) {
      navLinkActive(menuLink[1]);
    } else {
      navLinkActive(menuLink[0]);
    }
  };
} else {
  window.onscroll = function () {
    backgroundNavbar();
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 5180) {
      navLinkActive(menuLink[4]);
    } else if (scrollTop >= 2630) {
      navLinkActive(menuLink[3]);
    } else if (scrollTop >= 1920) {
      navLinkActive(menuLink[2]);
    } else if (scrollTop >= 740) {
      navLinkActive(menuLink[1]);
    } else {
      navLinkActive(menuLink[0]);
    }
  };
}

function backgroundNavbar() {
  if (document.documentElement.scrollTop < 200) {
    nav.style.background = "none";
    nav.style.boxShadow = "none";
    if (window.innerWidth > 768) {
      menuLink.forEach((e) => (e.style.color = "white"));
    }
  } else {
    nav.style.background = "white";
    nav.style.boxShadow = "0.1px 0.1px 3px black";
    menuLink.forEach((e) => (e.style.color = "rgb(100, 100, 100)"));
  }
}

function navLinkActive(link) {
  menuLink.forEach((e) => e.classList.remove("active"));
  link.classList.add("active");
}

// Hamburger Menu
hamburgerButton.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("not-active");
  hamburgerButton.classList.toggle("close");
});
menuLink.forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("not-active");
    hamburgerButton.classList.toggle("close");
  });
});

// Scroll Animation
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Music
const music = document.querySelector("audio");
const musicBtn = document.querySelector(".music-btn");
let played = false;
function playMusic() {
  if (played) {
    played = false;
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    played = true;
    music.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}
musicBtn.addEventListener("click", function () {
  playMusic();
});

// Buka Undangan
const openBtn = document.querySelector("#buka-undangan");
openBtn.addEventListener("click", function () {
  playMusic();
});
