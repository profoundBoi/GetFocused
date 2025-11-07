gsap.registerPlugin(MotionPathPlugin);

const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

tl.from(".about", { y: -100, opacity: 0, duration: 1.2, ease: "power3.out" })
  .from("h1", { opacity: 0, y: 50 }, "-=0.5")
  .from(".about p", { opacity: 0, y: -30 }, "-=0.3")
  .from("#logo", { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" }, "-=0.4")
  .to("#logo", {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -30, y: -20 },
        { x: 0, y: -40 },
        { x: 30, y: -20 },
        { x: 0, y: 0 }
      ],
      curviness: 1.5,
      autoRotate: false
    },
    scale: 1.1,
    duration: 2,
    ease: "power2.inOut"
  }, "+=0.2")
  .call(() => {
    initSlideshow();
  });

function initSlideshow() {
  const slides = gsap.utils.toArray(".slide");
  if (!slides.length) return;

  gsap.set(slides, { opacity: 0, rotationY: -180, scale: 0.95, transformStyle: "preserve-3d" });
  slides.forEach(slide => slide.style.backfaceVisibility = "visible");

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
}