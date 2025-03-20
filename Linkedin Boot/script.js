var showbtn = document.getElementById("show"); // Fix: Pass "show" as a string
var yahan = document.querySelector(".yahan");

showbtn.addEventListener("click", showitems);
showbtn.innerHTML="Show More"
var btn=false

function showitems() {
  yahan.classList.toggle("dikhao"); 
  if(!btn){
  showbtn.innerHTML="Hide "
  }
  else{
    showbtn.innerHTML="Show More"
  }
  btn=!btn
}
