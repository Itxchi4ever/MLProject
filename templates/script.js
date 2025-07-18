// Minimal JS to trigger animations on page load if needed
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }
});
