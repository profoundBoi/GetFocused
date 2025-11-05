document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const galleryImages = document.querySelectorAll('.studio-gallery img, .archive-gallery img');
  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      showImage(index);
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      if (e.key === 'Escape') lightbox.style.display = 'none';
    }
  });
});