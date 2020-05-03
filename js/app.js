import { barSlide, titleSlide, scrollTo } from './gsap.js';

// GSAP animations
const gsapSlides = () => {
  barSlide();
  titleSlide();
};

// Active links
const activeLink = anchor => {
  $('.navbar .active').removeClass('active');
  $('.navbar').find('');
};

// Projects animation on scroll
const projects = $('.projects');
let triggered = false;

$(window).scroll(() => {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();
  const elemTop = $(projects).offset().top;
  const elemBottom = elemTop + $(projects).height();
  if (!triggered && elemBottom <= docViewBottom && elemTop >= docViewTop) {
    gsapSlides();
    console.log('It works!');
    triggered = true;
  }
});

// Scroll on click
$('.btn').click(function (event) {
  event.preventDefault();
  scrollTo();
});

// Nav position
let navPos = $('.navbar').position().top;
let lastPos = 0;
let lockTimer;
$(window).on('scroll', () => {
  let pos2 = docViewTop + 50;
  if (pos2 > $('#home').offset().top) {
  }
});
