import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
 
gallery.insertAdjacentHTML('afterbegin', createMarkup(gallery));

function createMarkup(arr) {
    return arr.map(({ preview, original }) => ` 
    <li>
        
       <a href="${preview}"></a>
       <a href="${original}"></a>
        
    </li>
    
    ` ); join('')
}

console.log(galleryItems);

<li>
       
      </li>