import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Navbar behavior on scroll
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,         // relative to document viewport
    rootMargin: '0px 0px -50px 0px', // slightly trigger before bottom
    threshold: 0.15     // trigger when 15% is visible
  };

  const animateOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger CSS transitions
        entry.target.classList.add('visible');
        // Unobserve to animate only once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  elementsToAnimate.forEach(el => {
    animateOnScroll.observe(el);
  });

  // Optional: Dynamic interactions on the bars for the visual dashboard feature
  const bars = document.querySelectorAll('.dashboard-graph .bar');
  bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      bars.forEach(b => b.classList.remove('active'));
      bar.classList.add('active');
    });
  });
});
