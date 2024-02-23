document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    const fullImage = document.getElementById('fullImage');

    for (let i = 1; i <= 10; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${i}.jpg`; // Path to the thumbnail
        imgElement.alt = `Photo ${i}`;
        imgElement.onclick = function() {
            fullImage.src = this.src; // Set the full image source to the clicked thumbnail's source
            fullImage.style.display = 'block'; // Make the full image visible
        };
        thumbnailsContainer.appendChild(imgElement);
    }
});