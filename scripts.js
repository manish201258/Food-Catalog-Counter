let a=document.querySelector("#home-button")
document.addEventListener("DOMContentLoaded", function () {
    let imageElement = document.getElementById("navi");

    // Retrieve the image source from localStorage
    let imageUrl = localStorage.getItem("clickedImageSrc");

    // Update the image source
    if (imageUrl) {
        imageElement.src = imageUrl;
    }
});
a.addEventListener("click",()=>{
    window.open("index.html", "_self");
})
