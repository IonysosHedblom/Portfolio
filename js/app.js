import { barSlide, titleSlide } from './gsap.js';
const gsapSlides = () => {
  barSlide();
  titleSlide();
};

// Projects animation on scroll
const projects = $('.projects');

$(window).scroll(() => {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();
  let executed = false;
  const elemTop = $(projects).offset().top;
  const elemBottom = elemTop + $(projects).height();
  if (elemBottom <= docViewBottom && elemTop >= docViewTop && !executed) {
    executed = true;
    gsapSlides();
    console.log('It works!');
  }
});
