let clickable=document.querySelectorAll('.clickable');
clickable.forEach((clicka)=>{
clicka.addEventListener("click",()=>{
    window.open("index.html", "_self");
})
})
