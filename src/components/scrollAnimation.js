// Function to handle scroll animations
const handleScrollAnimation = () => {
    const scrollElements = document.querySelectorAll(".scroll-fade, .scroll-slide");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    scrollElements.forEach((el) => observer.observe(el));
  };
  
  // Initialize animation on page load
  export const initScrollAnimations = () => {
    document.addEventListener("DOMContentLoaded", handleScrollAnimation);
    handleScrollAnimation(); // Run once for elements already in view
  };
  