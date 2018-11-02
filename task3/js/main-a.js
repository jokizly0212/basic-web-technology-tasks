// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
var imageContainer = document.querySelector('ul');

showImages();

function showImages() {
    var myRequest = new Request('images.html');
    fetch(myRequest)
    .then(function(response) {
        return response.text()
    })
    .then(function (text) {
        imageContainer.innerHTML = text
    })
}