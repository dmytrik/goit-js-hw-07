import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
  </a>`;
  })
  .join("");
gallery.innerHTML = galleryHtml;
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
