let clickable=document.querySelectorAll(".clickable");
clickable.forEach((image)=>{
    image.addEventListener("click",()=>{
        window.open("image.html", "_self");
    })
})
