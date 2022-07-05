import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`;
  })
  .join("");
gallery.innerHTML = galleryHtml;
const links = document.querySelectorAll(".gallery__link");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
gallery.addEventListener("click", showImage);

let url;
let instance;

function showImage(event) {
  const img = event.target.classList.contains("gallery__image");
  if (!img) {
    return;
  }
  url = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src=${url} width="800" height="600">
`);

  instance.show();
  window.addEventListener("keydown", escCloseModal);
}
function escCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", escCloseModal);
  }
}
