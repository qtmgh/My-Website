// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Select all anchor links that link to an ID on the page
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent default jump

      const targetID = link.getAttribute('href').substring(1); // Remove the '#'
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        // Scroll smoothly to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual submission for now

  alert('Thank you for reaching out! I will get back to you soon.');

  form.reset();
});
