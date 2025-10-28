gsap.from(".about", {
    duration: 1.5,
    y: -100,          // slide up from below
    opacity: 0,      // start transparent
    ease: "power3.out"
});

gsap.from("h1", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.4,
    ease: "power2.out"
});

gsap.from(".about p", {
    duration: 1,
    opacity: 0,
    y: -30,
    delay: 0.6,
    ease: "power2.out"
});

gsap.from(".about #logo", {
    duration: 1.2,
    opacity: 0,
    scale: 0.8,
    delay: 0.8,
    ease: "back.out(1.7)"
});