document.addEventListener("DOMContentLoaded", () => {
  const transition = document.querySelector(".page-transition");

  gsap.to(transition, { y: "-100%", duration: 0.8, ease: "power2.inOut" });

  document.querySelectorAll("a").forEach(link => {
    
    if (link.target === "_blank" || link.href.includes("mailto:") || link.href.includes("wa.me")) return;

    link.addEventListener("click", e => {
      e.preventDefault();

      gsap.to(transition, {
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          window.location.href = link.href;
        },
      });
    });
  });
});