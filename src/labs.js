import './labs.css';
// Each callout receives one brief border animation when first seen.
// Essential text and the red border remain available without JavaScript.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('lab-capture-entered');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.25 });
  document.querySelectorAll('.lab-capture').forEach(node => observer.observe(node));
}
