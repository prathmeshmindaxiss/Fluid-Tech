document.addEventListener("DOMContentLoaded", () => {
  // Page Header Background Slider Logic
  const headerSlides = document.querySelectorAll('.header-slide');
  let currentHeaderSlide = 0;
  const headerSlideInterval = 4000; // Change image every 4 seconds

  if (headerSlides.length > 0) {
    setInterval(() => {
      // Remove active class from current slide
      headerSlides[currentHeaderSlide].classList.remove('active');
      
      // Move to next slide, loop back to 0 if at the end
      currentHeaderSlide = (currentHeaderSlide + 1) % headerSlides.length;
      
      // Add active class to new slide
      headerSlides[currentHeaderSlide].classList.add('active');
    }, headerSlideInterval);
  }
});
  
    // =========================================

    document.addEventListener("DOMContentLoaded", () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
      };

      const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.reveal-up');
      animatedElements.forEach(el => scrollObserver.observe(el));
    });