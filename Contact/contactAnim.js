gsap.registerPlugin(MotionPathPlugin);

window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.from("h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out"
  });

  tl.from(".contact-container > p", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5");

  tl.from("#contact-form", {
    opacity: 0,
    duration: 1.5,
    motionPath: {
      path: [
        { x: -50, y: 0 },
        { x: 0, y: 30 },
        { x: 50, y: 0 }
      ],
      curviness: 1.5
    },
    ease: "power2.out"
  }, "-=0.5");

  tl.from("#contact-form .form-group", {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out"
  }, "-=1");

  tl.from(".send-btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "-=0.6");

});