import {
  barSlide,
  titleSlide,
  scrollTo,
  cardSlide,
  aboutBarSlide,
  aboutHeaderSlide,
  hexSlide,
} from './gsap.js';

// GSAP Animations on project section
const gsapSlides = () => {
  barSlide();
  titleSlide();
  cardSlide();
  hexSlide();
};

// GSAP animations on about section
const sliding = () => {
  aboutBarSlide();
  aboutHeaderSlide();
};

// Active links
const activeLink = anchor => {
  $('nav .active').removeClass('active');
  $('nav')
    .find('[dest="' + anchor + '"]')
    .addClass('active');
};

// Projects animation on scroll
const projects = $('.projects');
const about = $('.about');
let triggeredProject = false;
let triggeredAbout = false;

$(window).scroll(() => {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();
  const elemTop = $(projects).offset().top;
  const elemBottom = elemTop + $(projects).height();
  const aboutTop = $(about).offset().top;
  const aboutBottom = aboutTop + $(about).height();
  if (
    !triggeredProject &&
    elemBottom <= docViewBottom &&
    elemTop >= docViewTop
  ) {
    gsapSlides();
    triggeredProject = true;
  }
  if (
    !triggeredAbout &&
    aboutBottom <= docViewBottom &&
    aboutTop >= docViewTop
  ) {
    sliding();
    triggeredAbout = true;
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
// Link highlighting
$(window).on('scroll', () => {
  let pos = $(window).scrollTop();
  let pos2 = pos + 50;
  if (pos2 > $('#home').offset().top) {
    activeLink('home');
  }
  if (pos2 > $('#project').offset().top) {
    activeLink('projects');
  }
  if (pos2 > $('#about').offset().top) {
    activeLink('about');
  }
  if (pos2 > $('#contact').offset().top) {
    activeLink('contact');
  }

  //Prevent hovering on scroll
  clearTimeout(lockTimer);
  if (!$('body').hasClass('disable-hover')) {
    $('body').addClass('disable-hover');
  }

  lockTimer = setTimeout(() => {
    $('body').removeClass('disable-hover');
  }, 500);
});

// GALLERY
$('#gallery').mixItUp({});

const clearMix = () => {
  setTimeout(() => {
    $('#gallery').removeClass('waypoint');
  }, 2000);
};
