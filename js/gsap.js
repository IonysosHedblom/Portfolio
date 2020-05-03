export const barSlide = () => {
  gsap.from('.header-bar', { duration: 1.5, x: 250, opacity: 0 });
  gsap.to('.header-bar', { duration: 1.5, x: 0, opacity: 1 });
};

export const titleSlide = () => {
  gsap.from('.project-title', { duration: 1.5, x: -250, opacity: 0 });
  gsap.to('.project-title', { duration: 1.5, x: 0, opacity: 1 });
};

export const scrollTo = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#project' });
};
