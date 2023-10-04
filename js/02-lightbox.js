import { galleryItems } from './gallery-items.js';


const listItem = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading = "lazy"
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>
    `;
}).join('');
listItem.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    close: false,
    captionPosition: 'bottom',
});
console.log(galleryItems);


