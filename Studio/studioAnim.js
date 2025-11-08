gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  tl.from(".page-shutter", { scaleY: 1, transformOrigin: "top", duration: 1, ease: "power4.inOut" })
    .to(".page-shutter", { scaleY: 0, transformOrigin: "bottom", duration: 1.2, ease: "power4.inOut" })
    .from("header", { y: -80, opacity: 0 }, "-=0.5")
    .from(".studio-hire h1", { opacity: 0, y: 40 }, "-=0.4")
    .from(".studio-hire p", { opacity: 0, y: 20, stagger: 0.2 })
    .from(".price", { opacity: 0, scale: 0.8 });

  gsap.utils.toArray(".studio-gallery img, .archive-gallery img").forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.02
    });
  });
});