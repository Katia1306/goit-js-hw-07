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

/*
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    close: false,
    enableKeyboard: true
});

/*
listEl.insertAdjacentHTML("beforeend", typset);
const modalOpen = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        console.log('NEpraça');
        return;
    }
    const clickedImageAlt = event.target.getAttribute('alt');
    const clickedImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src='${clickedImageSrc}' alt='${clickedImageAlt}'/>`, {
            onShow: (instance) => {
                document.addEventListener('keydown', modalClose);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', modalClose);
                instance = null;
            },
            modalClose: (event) => {
             if (event.key !== 'Escape') {
                 return;
             }
            instance.close();
            }
             });
    instance.show();
};


listEl.addEventListener('click', (event) => {
    modalOpen(event);
});