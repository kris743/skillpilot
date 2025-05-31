document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('show');
  });
  
  // Tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navUl.classList.remove('show');
      }
    });
  });
  
  // Animation on scroll
  const animateOnScroll = function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animation
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});
