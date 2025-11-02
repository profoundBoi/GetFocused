document.addEventListener("DOMContentLoaded", () => {
  const slides = gsap.utils.toArray(".slide");

  if (!slides.length) return;

  gsap.set(slides, { opacity: 0, rotationY: -180, scale: 0.95, transformStyle: "preserve-3d" });
  slides.forEach(slide => slide.style.backfaceVisibility = "hidden");

  let current = 0;

  function showNextSlide() {
    const prev = slides[(current - 1 + slides.length) % slides.length];
    const next = slides[current];


    if (prev) {
      gsap.to(prev, {
        opacity: 0,
        rotationY: 270,
        scale: 0.95,
        duration: 4, 
        ease: "power2.inOut" 
      });
    }

    gsap.to(next, {
      opacity: 1,
      rotationY: 0,
      scale: 1,
      duration: 4.2, 
      ease: "power2.inOut"
    });

    current = (current + 1) % slides.length;
  }

  showNextSlide();

  setInterval(showNextSlide, 4000); 
});