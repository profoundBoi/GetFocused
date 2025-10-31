document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("package-search");
  const cards = document.querySelectorAll(".package-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? "flex" : "none";
    });
  });

  cards.forEach(card => {
    const readBtn = card.querySelector(".read-more-btn");

    readBtn.addEventListener("click", () => {

      const overlay = document.createElement("div");
      overlay.classList.add("expanded-card");

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close-btn");
      closeBtn.innerHTML = "&times;";
      overlay.appendChild(closeBtn);

      const img = document.createElement("img");
      img.src = card.querySelector("img").src;
      overlay.appendChild(img);

      const title = document.createElement("h2");
      title.textContent = card.dataset.name;
      overlay.appendChild(title);

      const content = document.createElement("p");
      content.textContent = card.dataset.content;
      overlay.appendChild(content);

      document.body.appendChild(overlay);

      gsap.fromTo(
        overlay,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );

      closeBtn.addEventListener("click", () => {
        gsap.to(overlay, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power3.in", onComplete: () => overlay.remove() });
      });
    });
  });
});