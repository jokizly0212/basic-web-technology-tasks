'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
  }).then(function () {
      let modalBox = document.querySelector('#modal');
      let images = document.querySelectorAll('figure img');
      let modalImg = document.querySelector('#modal img');
      let closeBtn = document.querySelector('.closeBtn');
      for(let i = 0; i < images.length; i++) {
        let image = images[i];
        image.addEventListener('click', function (e) {
          e.preventDefault();
          let pic_src = this.getAttribute('src');
          modalBox.classList.remove('hidden');
          modalImg.setAttribute('src', pic_src);
        })
      }     
      closeBtn.onclick = function () {
        modalBox.classList.add('hidden');
      }
    }
  );
};
showImages();



