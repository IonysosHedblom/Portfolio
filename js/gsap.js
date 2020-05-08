// Scroll back home
export const scrollHome = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#home' });
};

// Scroll to project section
export const scrollTo = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '.navigation' });
};

// Scroll to project with navlink
export const scrollToProject = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#project' });
};

// Scroll to about section
export const scrollToAbout = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#about' });
};

// Scroll to contact
export const scrollToContact = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#contact' });
};

// Project section header animations
export const barSlide = () => {
  gsap.from('.header-bar', { duration: 1.3, x: 220, opacity: 0 });
  gsap.to('.header-bar', { duration: 1.3, x: 0, opacity: 1 });
};

export const titleSlide = () => {
  gsap.from('.project-header', { duration: 1.3, x: -220, opacity: 0 });
  gsap.to('.project-header', { duration: 1.3, x: 0, opacity: 1 });
};

// About section header animations
export const aboutBarSlide = () => {
  gsap.from('.about-bar', { duration: 0.8, x: 130, opacity: 0 });
  gsap.to('.about-bar', { duration: 0.8, x: 0, opacity: 1 });
};
export const aboutHeaderSlide = () => {
  gsap.from('.about-header', { duration: 1, x: -130, opacity: 0 });
  gsap.to('.about-header', { duration: 1, x: 0, opacity: 1 });
};

// Contact section header animation
export const contactBarSlide = () => {
  gsap.from('.contact-bar', { duration: 0.8, x: -130, opacity: 0 });
  gsap.to('.contact-bar', { duration: 0.8, x: 0, opacity: 1 });
};

export const contactHeaderSlide = () => {
  gsap.from('.contact-header', { duration: 1, x: 130, opacity: 0 });
  gsap.to('.contact-header', { duration: 1, x: 0, opacity: 1 });
};

// Gsap Timeline on gallerySlide

// Project Section Slides
export const cardSlide = () => {
  gsap
    .timeline()
    .from('#gallery .mix', { stagger: 0.2, y: 500, duration: 0.8, opacity: 0 });
};

export const hexSlide = () => {
  gsap.timeline().from('.label-wrap .bullet-wrap', {
    stagger: 0.2,
    x: -220,
    duration: 1,
    opacity: 0,
  });
};

// About section content slides
export const secAboutSlide = () => {
  gsap.from('.header-secondary', { duration: 1, x: -220, opacity: 0 });
  gsap.to('.header-secondary', { duration: 1, x: 0, opacity: 1 });
};

export const leftSlide = () => {
  gsap.timeline().from('.column .about-wrap', {
    stagger: 0.2,
    x: -230,
    duration: 1,
    opacity: 0,
  });
};

export const rightSlide = () => {
  gsap.timeline().from('.column-stack .hex-wrap', {
    stagger: 0.1,
    x: 200,
    duration: 1,
    opacity: 0,
  });
};

export const skillSlide = () => {
  gsap.timeline().from('.skills .skill-item', {
    stagger: 0.05,
    x: 230,
    duration: 1,
    opacity: 0,
  });
};

// Contact section slides

export const formSlide = () => {
  gsap.from('.contact-form', { duration: 1.3, x: -280, opacity: 0 });
  gsap.to('.contact-form', { duration: 1.3, x: 0, opacity: 1 });
};

export const socialSlide = () => {
  gsap.timeline().from('.contact-social .social-link', {
    stagger: 0.2,
    y: 200,
    duration: 1,
    opacity: 0,
  });
};
