const images = [
    "https://www.lamontagneart.com/wp-content/uploads/2023/01/PostPic-3.jpg",
    "https://i.etsystatic.com/5908609/r/il/d9b40e/2164919255/il_570xN.2164919255_8288.jpg",
    "https://marvel-b1-cdn.bc0a.com/f00000000246364/libarts.wp2.olemiss.edu/wp-content/uploads/sites/9/2018/03/sloth-by-Maya-Kaup.jpg",
    ];
    
    let currentIndex = 0;
    const currentImage = document.getElementById("currentImage");
    function updateImage() {
    currentImage.src = images[currentIndex];
    currentImage.alt = `Image ${currentIndex + 1}`;
    // Set the desired width and height for the image
    currentImage.width = 500; // Replace with your desired width in pixels
    currentImage.height = 500; // Replace with your desired height in pixels
    }
    function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    }
    function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
    }

    // Initial image load
    updateImage();