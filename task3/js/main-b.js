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
            listItem.innerHTML = '<figure> '+ '<a href="img/original/'+json[i].mediaUrl+'"><img src="img/thumbs/'+json[i].mediaThumb+'"></a>' + '<figcaption>'+ '<h3>'+json[i].mediaTitle +'</h3>'+'</figcaption>' +'</figure>';
            imageContainer.appendChild(listItem);
        }
    })
}
