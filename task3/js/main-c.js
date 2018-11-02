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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const imageContainer = document.querySelector('ul');

showImages();

function showImages() {
    myRequest = new Request('images.json')
    fetch(myRequest)
    .then(function(response){
        return response.json();
    })
    .then(function (json) {
        console.log(json[1].mediaUrl);
        for(let i = 0; i < json.length; i++) {
            let listItem = document.createElement('li');
            let figure = document.createElement('figure');
            let a_attr = document.createElement('a');
            let img_attr = document.createElement('img');
            let figcaption = document.createElement('figcaption');
            let h3 = document.createElement('h3');
            a_attr.setAttribute('href', 'img/original/'+json[i].mediaUrl+'');
            img_attr.setAttribute('src', 'img/thumbs/'+json[i].mediaThumb+'');
            h3.innerHTML = ''+json[i].mediaTitle+''
            figcaption.appendChild(h3);
            a_attr.appendChild(img_attr);
            figure.appendChild(a_attr);
            figure.appendChild(figcaption);
            listItem.appendChild(figure);
            imageContainer.appendChild(listItem);
        }
    })
}