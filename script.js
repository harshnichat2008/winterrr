function slide1() {
  document.getElementById("slide1").style.display = "block";
  document.getElementById("slide2").style.display = "none";
  document.getElementById("slide3").style.display = "none";
}

function slide2() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "block";
  document.getElementById("slide3").style.display = "none";
}

function slide3() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "none";
  document.getElementById("slide3").style.display = "block";
}
