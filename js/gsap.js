export const barSlide = () => {
  gsap.from('.header-bar', { duration: 1.3, x: 220, opacity: 0 });
  gsap.to('.header-bar', { duration: 1.3, x: 0, opacity: 1 });
};

export const titleSlide = () => {
  gsap.from('.project-header', { duration: 1.3, x: -220, opacity: 0 });
  gsap.to('.project-header', { duration: 1.3, x: 0, opacity: 1 });
};

export const scrollTo = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '.navigation' });
};

// About section header animations
export const aboutBarSlide = () => {
  gsap.from('.about-bar', { duration: 1, y: 50, x: -130, opacity: 0 });
  gsap.to('.about-bar', { duration: 1, x: 0, opacity: 1 });
};
export const aboutHeaderSlide = () => {
  gsap.from('.about-header', { duration: 1, x: 150, opacity: 0 });
  gsap.to('.about-header', { duration: 1, x: 0, opacity: 1 });
};
/* export const gallerySlide = () => {
  gsap.from('.mix', { duration: 1, y: 500, opacity: 0 });
  gsap.to('.mix', { duration: 1, y: 0, opacity: 1 });
}; */

// Gsap Timeline on gallerySlide

export const cardSlide = () => {
  gsap
    .timeline()
    .from('#gallery .mix', { stagger: 0.3, y: 500, duration: 1, opacity: 0 });
};
