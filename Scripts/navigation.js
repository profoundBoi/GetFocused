document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  header.innerHTML = `
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="bar-button"><i class="fa-solid fa-bars"></i></label>
      <label for="logo">Get Focused</label>
      <img src="Images/WebLogo.png" id="logo" alt="Get Focused Logo"/>

      <ul>
        <li><a href="../index.html" class="${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a></li>
        <li><a href="../Services/services.html" class="${window.location.pathname.includes('services.html') ? 'active' : ''}">Services</a></li>
        <li><a href="../Studio/studio.html" class="${window.location.pathname.includes('studio.html') ? 'active' : ''}">Studio</a></li>
        <li><a href="../PhotoBooth/booth.html" class="${window.location.pathname.includes('booth.html') ? 'active' : ''}">Booths</a></li>
        <li><a href="../Testimonials/testimonals.html" class="${window.location.pathname.includes('testimonals.html') ? 'active' : ''}">Testimonials</a></li>
        <li><a href="../Blogs/blogs.html" class="${window.location.pathname.includes('blogs.html') ? 'active' : ''}">Blogs</a></li>
        <li><a href="../Contact/contact.html" class="${window.location.pathname.includes('contact.html') ? 'active' : ''}">Contact</a></li>
      </ul>
    </nav>
  `;
});