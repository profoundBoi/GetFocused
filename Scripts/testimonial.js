window.addEventListener("load", () => {
  const grid = document.querySelector(".testimonial-grid");
  const cards = document.querySelectorAll(".testimonial-card");
  const leftBtn = document.querySelector(".arrow-left");
  const rightBtn = document.querySelector(".arrow-right");

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(grid).gap);
    const offset = (grid.parentElement.offsetWidth - cards[0].offsetWidth) / 2;

    gsap.to(grid, { x: -currentIndex * cardWidth + offset, duration: 0.4, ease: "power3.inOut" });

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === currentIndex);
    });
  }

  rightBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) currentIndex++;
    updateCarousel();
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) currentIndex--;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel(); 
});