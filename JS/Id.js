
var id = document.getElementById("miId");
var img = document.getElementById("MyFotoId");
var idImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  id.style.display = "block";
  idImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("cerrar")[0];
span.onclick = function() { 
  id.style.display = "none";
}