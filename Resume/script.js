// Select the resume button
document.querySelector(".resume-button").addEventListener("click", function (event) {
  event.preventDefault();

  // Add fade-out effect
  document.body.classList.add('fade-out');

  // Redirect after the animation
  setTimeout(function() {
    window.open( "Akachi's%20resume%20.pdf", "_blank");
    window.location.reload();
  }, 500);
})



// Toggle the visibility of the navbar links
// const toggleButton = document.querySelector('.toggle');
// const navbarButton = document.querySelector('.navbar');
// toggleButton.addEventListener('click', function()  {
//   navbarButton.classList.toggle('active');
// })

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
  // if(links.classlist.contains('show-links')){
  //     links.classList.remove('show-links')
  // } else{
  //     links.classList.add('show-links')
  // }
  links.classList.toggle("show-links");
} );

let currentIndex = 0;
const slides = document.querySelectorAll('.project-card');
const totalSlides = slides.length;

function slideNext() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlidePosition();
}

function slidePrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Loop back to the last slide
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const sliderContainer = document.querySelector('.project-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}