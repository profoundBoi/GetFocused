document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".testimonial-grid");
  const cards = document.querySelectorAll(".testimonial-card");
  const btnLeft = document.querySelector(".arrow-left");
  const btnRight = document.querySelector(".arrow-right");

  let currentIndex = 0;
  const cardCount = cards.length;

  function animateCardIn(index) {
    const card = cards[index];
    const content = card.querySelectorAll("p, img");

    gsap.fromTo(
      content,
      {
        opacity: 0,
        scale: 1.2,
        x: -200, 
        y: 100  
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        motionPath: {
          path: [
            { x: -200, y: 100 },
            { x: -100, y: 50 },
            { x: 0, y: 0 }
          ],
          curviness: 1.5
        }
      }
    );
  }

  function slideTo(index) {
    if (index < 0) index = 0;
    if (index > cardCount - 1) index = cardCount - 1;
    currentIndex = index;

    gsap.to(grid, {
      x: `${-index * 100}%`,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        animateCardIn(currentIndex);
      }
    });
  }

  btnLeft.addEventListener("click", () => slideTo(currentIndex - 1));
  btnRight.addEventListener("click", () => slideTo(currentIndex + 1));
  animateCardIn(currentIndex);
});