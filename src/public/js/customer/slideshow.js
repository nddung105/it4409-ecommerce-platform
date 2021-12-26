var slideIndex = 0;
var i;
var slides = document.getElementsByClassName("slide-item");
var dots = document.getElementsByClassName("dot");
showSlides();


function plusSlides(n) {
  showSlideIndex(slideIndex += n);
}


function currentSlide(n) {
  showSlideIndex(slideIndex = n);
}

function showSlideIndex(n) {
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

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { 
    slideIndex = 1 
  }

  for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" active", "");
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}