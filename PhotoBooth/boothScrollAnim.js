gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("section.booth").forEach((section, i) => {
  const image = section.querySelector(".booth-image img");
  const text = section.querySelector(".booth-text");

  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(image, {
    rotationY: -25,
    rotationX: -5,
    scale: 0.9,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(text, {
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
});