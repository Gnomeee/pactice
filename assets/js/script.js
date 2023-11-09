"use strict";

const allSections = document.querySelectorAll(".section");
const allNav = document.querySelector(".header__list");
const activePopup = document.querySelector(".header__popup");
const itemNav = document.querySelectorAll(".header__item");
const popupImg = document.querySelector(".header__popup__img");

allNav.addEventListener("click", function (e) {
  e.preventDefault();
  const activeNav = e.target.closest(".header__popup__item");
  if (!activeNav) return;
  activePopup.classList.toggle("header__popup--hidden");
  popupImg.classList.toggle("img__rotate");
});
allNav.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.closest(".header__item__a")) {
    const href = e.target.getAttribute("href");
    console.log(href);
    document
      .querySelector(href)
      .scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

$(function () {
  $(".slider__inner").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    speed: 0,
    easing: "linear",
    touchMove: false,
    swipe: false,
  });
});

const appearenceSection = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(appearenceSection, {
  root: null,
  threshold: 0.3,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
