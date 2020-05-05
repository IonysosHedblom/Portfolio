export const barSlide = () => {
  gsap.from('.header-bar', { duration: 1.6, x: 250, opacity: 0 });
  gsap.to('.header-bar', { duration: 1.6, x: 0, opacity: 1 });
};

export const titleSlide = () => {
  gsap.from('.project-header', { duration: 1.6, x: -250, opacity: 0 });
  gsap.to('.project-header', { duration: 1.6, x: 0, opacity: 1 });
};

export const scrollTo = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#project' });
};

/* export const gallerySlide = () => {
  gsap.from('.mix', { duration: 1, y: 500, opacity: 0 });
  gsap.to('.mix', { duration: 1, y: 0, opacity: 1 });
}; */

// Gsap Timeline on gallerySlide

export const cardSlide = () => {
  gsap
    .timeline()
    .from('#gallery .mix', { stagger: 0.3, y: 500, duration: 1.2, opacity: 0 });
};
