gsap.registerPlugin(MotionPathPlugin);

const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 1 } });

tl.from("#logo", { opacity: 0, duration: 1 });

tl.to("#logo", {
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
});