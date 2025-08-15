// Scroll animation for sections
function revealOnScroll() {
  const sections = document.querySelectorAll('.scroll-animate');
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 60) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
