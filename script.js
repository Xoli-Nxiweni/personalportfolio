//sticky scroll behavior
const header = document.querySelector("nav");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// navsDisappear
const checkbox = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.links a');
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

  const allLinks = document.querySelectorAll('.service-header a');
  allLinks.forEach(link => {
      link.classList.remove('active');
  });
  if (clickedLink) {
      clickedLink.classList.add('active');
  }
};


var typed = new Typed(".effect", {
  strings: ["UX/UI Developer.",
  "Frontend Designer.",
  "Java Programmer.", 
  "Frontend Tester.", 
  "Frontend Developer.", 
  "Logo Designer.",],
  loop: true,
  typeSpeed: 80,
  backSpeed: 25,
  backDelay: 2500,
});
// var typed2 = new Typed(".effect2", {
//   strings: ["About Me.", 
//   "About Me.", 
//   "My Achievements.", 
//   "My Services.",],
//   loop: true,
//   typeSpeed: 90,
//   backSpeed: 25,
//   backDelay: 2000,
// });


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


// update progress bars with transition effect
document.addEventListener('DOMContentLoaded', function () {
  updateProgressBar('scalePercentage1', 'progressBar1');
  updateProgressBar('scalePercentage2', 'progressBar2');
  updateProgressBar('scalePercentage3', 'progressBar3');
  updateProgressBar('scalePercentage4', 'progressBar4');
  updateProgressBar('scalePercentage5', 'progressBar5');
  updateProgressBar('scalePercentage6', 'progressBar6');
  updateProgressBar('scalePercentage7', 'progressBar7');
  updateProgressBar('scalePercentage8', 'progressBar8');
  updateProgressBar('scalePercentage9', 'progressBar9');
  updateProgressBar('scalePercentage10', 'progressBar10');
});

function updateProgressBar(scalePercentageId, progressBarId) {
  var scalePercentage = parseInt(document.getElementById(scalePercentageId).innerText);
  var progressBar = document.getElementById(progressBarId);
  progressBar.style.width = scalePercentage + '%';
}


        // Initialize ScrollReveal
        const sr = ScrollReveal();
        sr.reveal('.index-section h1, .index-section p, .contactPopup, .myServicesText, .myServicesText, .Languages, .portfolioContainers, .scroll-upButton, .environments', {
            duration: 1000,   // Duration of the reveal animation (in milliseconds)
            origin: 'bottom', // From where the elements will be revealed
            distance: '200px', // Distance and direction from the origin
            delay: 250,       // Delay before the reveal starts (in milliseconds)
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function for the animation
        });

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

    const scrollUpButton = document.getElementById('scrollup-Btn');

    //scroll event listener
    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 80) {
            scrollUpButton.style.display = 'block';
        } else {
            scrollUpButton.style.display = 'none';
        }
    });
    function openImage() {
      var imageUrl = 'Properties/imgs/Logo.png';
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

const anchorsActive = document.querySelectorAll('.links a');
anchorsActive.forEach(function(anchor) {
  anchor.addEventListener('click', function() {
    for (let i = 0; i < anchorsActive.length; i++) {
      anchorsActive[i].classList.remove('activeEffect');
    }
    anchor.classList.add('activeEffect');
  });
});

const links = document.querySelectorAll('.links a');
const servicesSection = document.querySelectorAll('section');
window.addEventListener('scroll', () =>{
  let len = servicesSection.length;
  while(--len && this.window.scrollY + 99 < servicesSection[len].offsetTop){}
  links.forEach(ltx => ltx.classList.remove('activeEffect')); 
  if(len >= 0){
    links[len].classList.add('activeEffect');
  }
});


const projectContainer = document.querySelector('.ProjectsContainer');
const projects = [
  {
    image: "Properties/imgs/Project_Java.png",
    heading: "Java Calculator App",
    description: "This robust Java application adheres to established coding principles and utilizes comprehensive exception handling. This ensures stability, predictability, and minimizes unexpected disruptions, resulting in a reliable and resilient experience for users.",
    button: "View Repository",
    href: "https://github.com/Xoli-Nxiweni/Java-Calculator-App/"
  },
  {
    image: "Properties/imgs/Project_1.png",
    heading: "Personal Portfolio",
    description: "Created my debut web portfolio featuring a dynamic Weather App. Utilizing HTML, CSS, and JS, users can input their preferred city to instantly access accurate weather conditions. This project showcases my proficiency in web development and enthusiasm for creating engaging, functional interfaces.",
    button: "View Project",
    href: "https://xolinxiweniresume.netlify.app/"
  },
  {
    image: "Properties/imgs/Project_2.png",
    heading: "Collaborated Portfolio",
    description: "As a dynamic duo, we revamped the website's landing page using our HTML, CSS, and JavaScript expertise. The collaborative effort resulted in an engaging user experience. The redesigned page showcases intuitive navigation and visually striking elements, embodying our commitment to a seamless and interactive online presence.",
    button: "View Project",
    href: "https://ambitious-meadow-01ec35d10.4.azurestaticapps.net//"
  },
  {
    image: "Properties/imgs/ATMApp.png",
    heading: "Java ATM App",
    description: "This program simulates an ATM system. It includes PIN verification, balance management, and transaction history functionalities. Users can check balances, deposit and withdraw funds, and print transaction statements. The code ensures PIN security and handles user input errors, providing a comprehensive and interactive ATM experience.",
    button: "View Repository",
    href: "https://github.com/Xoli-Nxiweni/JavaATMApp"
  },
  {
    image: "Properties/imgs/Project_3.png",
    heading: "Web-Based Calculator",
    description: "The calculator, a CodSoft project, offers a user-friendly web application with a polished interface for basic arithmetic operations. Its responsive design ensures seamless experiences on diverse devices, allowing users to toggle the calculator on or off for enhanced control and usability.",
    button: "View Project",
    href: "https://xoli-nxiweni.github.io/CodSoft_WebDevelopment_Task_3/"
  },
  {
    image: "Properties/imgs/Screenshot (299).png",
    heading: "OAuth Login Form",
    description: "The OAuth login form project simplifies user authentication with OAuth. Its streamlined interface enables seamless login experiences across devices, ensuring security and convenience for accessing various platforms and services. With a registration form attached.",
    button: "View Project",
    href: "https://xoli-nxiweni.github.io/Google_Oauth/"
  },
  {
    image: "Properties/imgs/IDNumChecker.png",
    heading: "Java ID Number Checker",
    description: "This Java program reads and processes South African ID numbers, extracting and displaying birth year, date, month, gender, citizenship, and validation status. It employs object-oriented programming and exception handling for accuracy and user-friendly interaction, making it valuable for ID verification tasks.",
    button: "View Repository",
    href: "https://github.com/Xoli-Nxiweni/IdNumberChecker"
  },
  {
    image: "Properties/imgs/reactApp.png",
    heading: "React Calculator App",
    description: "My React.js calculator app is a sleek, user-friendly tool designed for seamless calculations on any device. Its responsive design ensures optimal functionality across desktops, tablets, and smartphones, adapting effortlessly to various screen sizes. Experience the convenience of a fully functional calculator, accessible anytime, anywhere.",
    button: "View Project",
    href: "https://xoli-nxiweni.github.io/ReactCalculator"
  },
  {
    image: "Properties/imgs/finalBootcampProj.png",
    heading: "Mlab Bootcamp Project",
    description: "My bootcamp final application webpage not only exhibits a modern and intuitive interface but also highlights my cloning abilities. Using HTML, CSS, and JS, I seamlessly converted a picture design into a functional webpage with dynamic content, showcasing my skills and my abilities. The responsive design ensures a seamless experience across devices.",
    button: "View Project",
    href: "https://xoli-nxiweni.github.io/FinalBootcampProj"
  },
]
const renderProjects = ()=>{
  const ProjectsContent2 = document.createElement('div');
  ProjectsContent2.classList.add('ProjectsContent');
  ProjectsContent2.innerHTML = `
  <img src="Properties/imgs/Logo_1.png" >
  <h3>Reality Trading Logo</h3>
  <p>A sleek emblem, artfully designed for a Forex powerhouse, effortlessly commands attention in the financial realm. Balancing simplicity and allure, this symbol speaks volumes, propelling the establishment into the spotlight. A visual testament to excellence, ensuring instant recognition and solidifying its status in the dynamic world of finances.</p>
  <button id="openImageButton" onclick="openImage()">View Image</button>
  `
  projectContainer.appendChild(ProjectsContent2);
  projects.forEach((project) =>{
    const ProjectsContent = document.createElement('div');
    ProjectsContent.classList.add('ProjectsContent');
    ProjectsContent.innerHTML = `
    <img src="${project.image}" alt="">
    <h3>${project.heading}</h3>
    <p>${project.description}</p>
    <input type="button" value="${project.button}" onclick="window.open('${project.href}', '_blank')">
  `
  projectContainer.appendChild(ProjectsContent);
  });

}
renderProjects();