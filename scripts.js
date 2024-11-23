// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
          e.preventDefault();
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Change color of the CTA button on hover
document.querySelector('.cta').addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#ff7f50';
});

document.querySelector('.cta').addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#f06';
});
