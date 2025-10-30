document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".service-section");

  sections.forEach((section, i) => {
    const content = section.querySelector(".service-content");

    section.style.height = "100vh";
    section.style.display = "flex";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";

    gsap.set(section, {
      opacity: 0,
      scale: 0.95,
      rotate: i % 2 === 0 ? -1.5 : 1.5, 
    });

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(content, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 120,       
      opacity: 0,
      scale: 0.95,        
      rotate: i % 2 === 0 ? -2 : 2,
      duration: 1.3,
      ease: "expo.out",
      delay: 0.2,
    });

    const bg = section.querySelector(".service-bg");
    if (bg) {
      gsap.to(bg, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
});