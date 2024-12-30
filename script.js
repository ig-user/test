// Smooth scroll for CTA buttons
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = button.getAttribute('href');
    });
  });
  
  
  