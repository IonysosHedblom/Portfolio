import {
  barSlide,
  titleSlide,
  scrollTo,
  cardSlide,
  aboutBarSlide,
  aboutHeaderSlide,
  leftSlide,
  rightSlide,
  secAboutSlide,
  skillSlide,
  hexSlide,
  scrollHome,
  scrollToProject,
  scrollToAbout,
  scrollToContact,
  contactBarSlide,
  contactHeaderSlide,
  formSlide,
  socialSlide,
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
  secAboutSlide();
  leftSlide();
  rightSlide();
  skillSlide();
};

// GSAP animations on contact section
const contactSlides = () => {
  contactBarSlide();
  contactHeaderSlide();
  formSlide();
  socialSlide();
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
const about = $('.header-secondary');
const contact = $('.contact');
let triggeredProject = false;
let triggeredAbout = false;
let triggeredContact = false;

$(window).scroll(() => {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();

  const elemTop = $(projects).offset().top;
  const elemBottom = elemTop + $(projects).height();

  const aboutTop = $(about).offset().top;
  const aboutBottom = aboutTop + $(about).height();

  const contactTop = $(contact).offset().top;
  const contactBottom = contactTop + $(contact).height();
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
  if (
    !triggeredContact &&
    contactBottom <= docViewBottom &&
    contactTop >= docViewTop
  ) {
    contactSlides();
    triggeredContact = true;
  }
});

// Scroll to project section
$('.btn').click(function (event) {
  event.preventDefault();
  scrollTo();
});

// Scroll to project section with navlink
$('.list-project').click(event => {
  event.preventDefault();
  scrollToProject();
});

// Scroll back home
$('.home').click(event => {
  event.preventDefault();
  scrollHome();
});

// Scroll to about section with navlink
$('.list-about').click(event => {
  event.preventDefault();
  scrollToAbout();
});

// Scroll to contact section with navlink
$('.list-contact').click(event => {
  event.preventDefault();
  scrollToContact();
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
  }, 200);
});

// GALLERY
$('#gallery').mixItUp({});

const clearMix = () => {
  setTimeout(() => {
    $('#gallery').removeClass('waypoint');
  }, 2000);
};

// Send form to email
$('#contact-form').submit(event => {
  event.preventDefault();

  $.ajax({
    url: 'https://formspree.io/xjvavnzv',
    method: 'POST',
    data: { message: $('form').serialize() },
    dataType: 'json',
  }).done(response => {
    $('#success').addClass('expand');
    $('#contact-form')
      .find('input[type=text], input[type=email], textarea')
      .val('');
  });
});

$('#close').click(() => {
  $('#success').removeClass('expand');
});
