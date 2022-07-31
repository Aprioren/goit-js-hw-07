import { galleryItems } from './gallery-items.js'; //Массив обьектов с картинками

const refs = {  //cсылка на галерею
    containerRef : document.querySelector('.gallery'),
}

//Создаем динамически картинки из массива обьектов
const images = galleryItems.map( e => {  
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


refs.containerRef.insertAdjacentHTML('afterbegin', images); //Добавляем разметку в контeинер

refs.containerRef.addEventListener('click', e => {
  e.preventDefault();  // запрещаем переход на другую страницу

  const original = e.target.dataset.source; //получаем ссылку на оригинальное изображения для модалки

  if(e.target.nodeName !== 'IMG'){ //клик должен работать только по картинке
    return;
  }

  const onModalOpen = evt =>{ // проверяем что нажата физическая клавиша Esc
    if (evt.code === 'Escape'){
      instance.close();
    }
  };

  const instance = basicLightbox.create(`
  <img src="${original}" width="1280" height="600">`,
  {
    onShow: (instance) => { refs.containerRef.addEventListener('keydown',onModalOpen)},
    onClose: (instance) => {refs.containerRef.removeEventListener('keydown', onModalOpen)},
  });
  
  instance.show();

});