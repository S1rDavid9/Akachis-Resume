// Smooth scroll functionality for the nav menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,  // Adjusting for any header height
        behavior: 'smooth'
      });
    }
  });
});

// Form validation and submit action
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you, ${name}! Your message has been submitted.`);
    form.reset();  // Clear the form fields after submission
  } else {
    alert('Please fill in all required fields.');
  }
});

// Modal or more details for project section (example)
const projectSection = document.getElementById('projects');
const sampleProjectDetails = `
  <div class="project-details">
    <h3>Project Name</h3>
    <p>This is an example project description. Add your project details here.</p>
  </div>
`;

projectSection.innerHTML += sampleProjectDetails;  // Add example project details