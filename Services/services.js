gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

window.addEventListener("load", () => {
  const sections = document.querySelectorAll(".service-section");

  sections.forEach((section, i) => {
    const content = section.querySelector(".service-content");
    const image = section.querySelector(".service-images img");

    gsap.set(section, {
      opacity: 0,
      scale: 0.95,
      rotate: i % 2 === 0 ? -1.5 : 1.5
    });

    if (i === 0) {
      const tlLoad = gsap.timeline();

      tlLoad.to(section, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.8,
        ease: "power2.out"
      })
      .from(content, {
        y: 50,
        opacity: 0,
        scale: 0.97,
        rotate: i % 2 === 0 ? -1 : 1,
        duration: 1.2,
        ease: "power2.inOut"
      }, "-=1.0")
      .from(image, {
        motionPath: {
          path: [
            { x: 0, y: 30 },
            { x: i % 2 === 0 ? -20 : 20, y: -15 },
            { x: 0, y: 0 }
          ],
          curviness: 1.2
        },
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      }, "-=1.3");

    } else {
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      tlScroll.to(section, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power2.out"
      }, 0);

      tlScroll.from(content, {
        y: 60,
        opacity: 0,
        scale: 0.97,
        rotate: i % 2 === 0 ? -1 : 1,
        duration: 1.3,
        ease: "power2.inOut"
      }, 0.2);

      if (image) {
        tlScroll.from(image, {
          motionPath: {
            path: [
              { x: 0, y: 30 },
              { x: i % 2 === 0 ? -20 : 20, y: -15 },
              { x: 0, y: 0 }
            ],
            curviness: 1.2
          },
          opacity: 0,
          duration: 2,
          ease: "power2.inOut"
        }, 0.4);
      }
    }
  });
});