function contactPopUp(){
  alert("Under Development!!")
};

//sticky scroll behavior
const header = document.querySelector("nav");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

//navsDisappear
const checkbox = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('a');
function closeMobileNav(){
  checkbox.checked = false;
}
navLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav)
});

function infoReveal(elementId, clickedLink) {
  const allRevealTexts = document.querySelectorAll('.revealText');
  allRevealTexts.forEach(text => {
      text.style.display = "none";
  });

  const revealText = document.getElementById(elementId);
  if (revealText) {
      revealText.style.display = "block";
  }

  // Remove 'active' class from all links
  const allLinks = document.querySelectorAll('.service-header a');
  allLinks.forEach(link => {
      link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  if (clickedLink) {
      clickedLink.classList.add('active');
  }
};


//wordchange effect
var typed = new Typed(".effect", {
  strings: ["UX/UI Developer.",
  "Front End Designer.", 
  "Java Programmer.", 
  "Front End Tester.", 
  "Logo Designer.",],
  loop: true,
  typeSpeed: 80,
  backSpeed: 25,
  backDelay: 2500,
});
var typed2 = new Typed(".effect2", {
  strings: ["About Me.", 
  "About Me.", 
  "My Achievements.", 
  "My Services.",],
  loop: true,
  typeSpeed: 90,
  backSpeed: 25,
  backDelay: 2000,
});




// Pop up contact page
const showPopupButton = document.getElementById("showPopup");
        const closePopupButton = document.getElementById("closePopup");
        const contactPopup = document.getElementById("contactPopup");
        const nameInput = document.querySelector('#nameInput');
        const emailInput = document.querySelector('#emailInput');
        const textarea = document.querySelector('#textarea');

        showPopupButton.addEventListener("click", function () {
            contactPopup.style.display = "block";
        });

        closePopupButton.addEventListener("click", function () {
            contactPopup.style.display = "none";
            
        });


        // Add event listener to close the form when clicking outside
        window.addEventListener('click', function (e) {
            if (e.target === contactPopup) {
                contactPopup.style.display = "none";
                nameInput.value = "";
                emailInput.value = "";
                textarea.value = "";
            }
        });
        // clearing the form
        let myForm = document.querySelector('#myForm');
        myForm.addEventListener('submit', function(){
          
                nameInput.value = "";
                emailInput.value = "";
                textarea.value = "";
          
        });





// JavaScript code to update progress bars with transition effect
document.addEventListener('DOMContentLoaded', function () {
  updateProgressBar('scalePercentage1', 'progressBar1');
  updateProgressBar('scalePercentage2', 'progressBar2');
  updateProgressBar('scalePercentage3', 'progressBar3');
  updateProgressBar('scalePercentage4', 'progressBar4');
  updateProgressBar('scalePercentage5', 'progressBar5');
  updateProgressBar('scalePercentage6', 'progressBar6');
});

function updateProgressBar(scalePercentageId, progressBarId) {
  var scalePercentage = parseInt(document.getElementById(scalePercentageId).innerText);
  var progressBar = document.getElementById(progressBarId);
  progressBar.style.width = scalePercentage + '%';
}



        // Initialize ScrollReveal
        const sr = ScrollReveal();
        // Define the configuration for the scroll reveal effect
        sr.reveal('.index-section h1, .index-section p, .contactPopup, .myServicesText, .myServicesText, .Languages, .portfolioContainers, .scroll-upButton, .environments', {
            duration: 1000,   // Duration of the reveal animation (in milliseconds)
            origin: 'bottom', // From where the elements will be revealed
            distance: '200px', // Distance and direction from the origin
            delay: 250,       // Delay before the reveal starts (in milliseconds)
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function for the animation
        });

        // You can add more elements to reveal by adding additional sr.reveal calls
        // sr.reveal('.image , .myServicesImage, ', {
        //     duration: 1000,
        //     origin: 'right',
        //     distance: '1500px',
        //     delay: 450,
        //     easing: 'cubic-bezier(0.5, 0, 0, 1)',
        // });

        sr.reveal('.image , .myServicesImage, .ProjectsContainer', {
            duration: 1000,
            origin: 'bottom',
            distance: '200px',
            delay: 450,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        // Get the scroll-up button element
    const scrollUpButton = document.getElementById('scrollup-Btn');

    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check the scroll position
        if (document.documentElement.scrollTop > 80) {
            // If scrolled down 100 pixels, show the button
            scrollUpButton.style.display = 'block';
        } else {
            // If at the top or scrolled less than 100 pixels, hide the button
            scrollUpButton.style.display = 'none';
        }
    });
    function openImage() {
      // Replace 'path/to/your/image.jpg' with the actual path to your image
      var imageUrl = 'Properties/imgs/Logo.png';

      // Open the image in a new tab
      window.open(imageUrl, '_blank');
  }
  function showModal() {
    var modal = document.getElementById('resumeModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('resumeModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}