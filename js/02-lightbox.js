import { galleryItems } from './gallery-items.js';  //Импорт изображений

const refs = {
    gallereyRef : document.querySelector('.gallery'), // Ссылка на галерею
}

const images = galleryItems.map( e => {  // динамическая разметка по массиву картинок
    return `<div class="gallery__item">
       <a class="gallery__link" href="${e.original}">
         <img
           class="gallery__image"
           src="${e.preview}"
           data-source="${e.original}"
           alt="${e.description}"
         />
       </a>
     </div>`
}).join('');

refs.gallereyRef.insertAdjacentHTML('afterbegin', images); //добавляем картинки в контеинер

const overlay = images;

let lightbox = new SimpleLightbox('.gallery a', { overlay, images }); //используем библиотеку


console.log(galleryItems);
