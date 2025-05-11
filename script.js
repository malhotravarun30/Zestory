document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const testimonialDots = document.querySelectorAll('.testimonials .dot');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      testimonialDots[index].classList.add('active');
      currentTestimonial = index;
  }
  
  // Initialize testimonial dots click events
  if (testimonialDots.length > 0) {
      testimonialDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              showTestimonial(index);
          });
      });
      
      // Auto rotate testimonials
      setInterval(() => {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          showTestimonial(currentTestimonial);
      }, 5000);
  }
  
  // Speciality Slider
  const specialityDots = document.querySelectorAll('.speciality .dot');
  if (specialityDots.length > 0) {
      specialityDots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              specialityDots.forEach(d => d.classList.remove('active'));
              dot.classList.add('active');
              // Here you would change the image if there were multiple images
          });
      });
  }
  
  // Sticky Header on Scroll
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
          header.style.position = 'fixed';
          header.style.backgroundColor = 'rgba(58, 47, 45, 0.95)';
          header.style.padding = '1rem 5%';
      } else {
          header.style.position = 'absolute';
          header.style.backgroundColor = 'transparent';
          header.style.padding = '1.5rem 5%';
      }
      
      lastScrollTop = scrollTop;
  });
  
  // Mobile Menu Toggle (for smaller screens)
  // This would be implemented if we had a hamburger menu for mobile
});