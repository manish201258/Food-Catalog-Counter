
// let a=document.querySelector("#image")
// let b=document.querySelector("#image").src
// console.log(b)
// a.addEventListener("click",()=>{
//     document.getElementById("navi").src=b;
//     window.open("image.html")
// })

document.addEventListener("DOMContentLoaded", function () {
    // Get all image elements with the class "clickable-image"
    let images = document.querySelectorAll(".clickable-image");

    // Add click event listener to each image
    images.forEach((image) => {
        image.addEventListener("click", handleImageClick);
    });

    // Reusable function to handle image click event
    function handleImageClick(event) {
        let clickedImage = event.target;
        let imageUrl = clickedImage.src;

        // Store the image source in localStorage
        localStorage.setItem("clickedImageSrc", imageUrl);

        // Open the image.html page
        window.open("image.html", "_self");
    }
});


