// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Theme toggle (optional)
document.getElementById('themeToggle').addEventListener('change', () => {
  document.body.classList.toggle('light'); // extend if needed
});