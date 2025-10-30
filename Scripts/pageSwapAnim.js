document.addEventListener("DOMContentLoaded", () => {
  const shutter = document.querySelector(".page-shutter");

  // Page load: open shutter
  gsap.fromTo(shutter, 
    { scale: 1 }, 
    { scale: 0, duration: 0.82, ease: "power2.inOut" } // slower
  );

  // Close shutter on link click
  document.querySelectorAll("a").forEach(link => {
    if (link.target === "_blank" || link.href.includes("mailto:") || link.href.includes("wa.me")) return;

    link.addEventListener("click", e => {
      e.preventDefault();

      gsap.to(shutter, {
        scale: 1,
        duration: 0.82,           // slower
        ease: "power2.inOut",
        onComplete: () => {
          window.location.href = link.href;
        }
      });
    });
  });
});