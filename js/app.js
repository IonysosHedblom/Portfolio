import { barSlide, titleSlide, scrollTo } from './gsap.js';
const gsapSlides = () => {
  barSlide();
  titleSlide();
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
