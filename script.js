document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect
    const typewriterText = document.querySelector(".typewriter-text");
    const words = ["Aspiring Software Engineer", "AI-ML Enthusiast", "Tech Explorer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let wait = 100;
  
    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex--);
      } else {
        typewriterText.textContent = currentWord.substring(0, charIndex++);
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        wait = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        wait = 200;
      } else {
        wait = isDeleting ? 50 : 100;
      }
  
      setTimeout(type, wait);
    }
  
    type();
  
    // Scroll Reveal Animations
    const sections = document.querySelectorAll("section");
  
    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.85;
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      });
    }
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  