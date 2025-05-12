// GSAP text entrance animation
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.wow-text', {
    duration: 1.5,
    y: -80,
    opacity: 0,
    ease: 'bounce.out',
  });
  gsap.from('.section-title', {
    duration: 1.2,
    x: -60,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: 'power3.out',
  });
  gsap.from('.about-text', {
    duration: 1.5,
    y: 60,
    opacity: 0,
    delay: 1,
    ease: 'power2.out',
  });
  gsap.from('.project-card', {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    delay: 1.2,
    ease: 'back.out(1.7)',
  });
});

// 3D hover effect with mouse movement
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
  const project3d = card.querySelector('.project-3d');
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;
    project3d.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.07)`;
  });
  card.addEventListener('mouseleave', () => {
    project3d.style.transform = '';
  });
}); 