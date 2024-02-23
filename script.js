let canvas = document.getElementById('photoCanvas');
let ctx = canvas.getContext('2d');

function showPhoto(photoId) {
    let img = new Image();
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    img.src = `images/${photoId}.jpg`;
}

// Handle color change
document.getElementById('colorPicker').addEventListener('input', function(e) {
    let color = e.target.value;
    // This is a placeholder for the actual color changing logic
    // It would typically involve redrawing the image with a filter or overlay
    console.log(`Selected color: ${color}`);
    // Example: Change canvas background (not the image itself)
    canvas.style.backgroundColor = color;
});