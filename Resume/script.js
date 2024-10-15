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

// Function to add visible 'class' when sections come into view
function revealSections(){
  const sections = document.querySelectorAll('.portfolio-section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Add the 'visible' class if the section is in viewport
    if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

// Rearrange sections for mobile devices
function rearrangeSections(){
  const portfolio = document.querySelectorAll('.portfolio');
  const projects = document.querySelectorAll('#project');
}

window.addEventListener('resize', rearrangeSections);
document.addEventListener('DOMContentLoaded', rearrangeSections);

// Toggle the visibility of the navbar links
const toggleButton = document.querySelector('.toggle');
const navbarButton = document.querySelector('.navbar');
toggleButton.addEventListener('click', () => {
  navbarButton.classList.toggle('active');
})