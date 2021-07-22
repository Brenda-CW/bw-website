/*******************    Script for hamburger menu  ****************/
const barIcon = document.querySelector(".topnav .fa-bars");
const xIcon = document.querySelector(".topnav .fa-times");
const menuIcon = document.querySelector(".topnav .icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

// Show / Hide the mobile menu and alternate between the bars and 'x' icons
menuIcon.addEventListener("click", () => {
  if (mobileMenuItems.classList.contains("hide")){
    mobileMenuItems.classList.remove("hide");
    xIcon.classList.remove("hide");
    barIcon.classList.add("hide");
  } else {
    mobileMenuItems.classList.add("hide");
    xIcon.classList.add("hide");
    barIcon.classList.remove("hide");
  }
})



/******************************  Slider Script **************************/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

