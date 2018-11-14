function openImage(src, alt){
    var modal = document.getElementById('myModal');
    var img = document.getElementById('imgModal');
    var modalImg = document.getElementById("imgprojeto");

    console.log("olar");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeImage() { 
    var modal = document.getElementById('myModal');

    modal.style.display = "none";
}