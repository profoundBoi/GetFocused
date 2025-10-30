document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  const isGitHub = window.location.hostname.includes("github.io");

  let basePath = "";
  if (isGitHub) {
   
    basePath = "/GetFocused/";
  } else {

    const depth = window.location.pathname.split("/").length - 2;
    basePath = "../".repeat(depth);
  }

  header.innerHTML = `
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="bar-button"><i class="fa-solid fa-bars"></i></label>
      
      <img src="${basePath}Img/GFL.png" id="logo" alt="Get Focused Logo"/>

      <ul>
        <li><a href="${basePath}index.html" class="${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a></li>
        <li><a href="${basePath}Services/services.html" class="${window.location.pathname.includes('services.html') ? 'active' : ''}">Services</a></li>
        <li><a href="${basePath}Studio/studio.html" class="${window.location.pathname.includes('studio.html') ? 'active' : ''}">Studio</a></li>
        <li><a href="${basePath}PhotoBooth/booth.html" class="${window.location.pathname.includes('booth.html') ? 'active' : ''}">Booths</a></li>
        <li><a href="${basePath}Testimonials/testimonals.html" class="${window.location.pathname.includes('testimonals.html') ? 'active' : ''}">Testimonials</a></li>
        <li><a href="${basePath}Blogs/blogs.html" class="${window.location.pathname.includes('blogs.html') ? 'active' : ''}">Blogs</a></li>
        <li><a href="${basePath}Contact/contact.html" class="${window.location.pathname.includes('contact.html') ? 'active' : ''}">Contact</a></li>
      </ul>
    </nav>
  `;
});