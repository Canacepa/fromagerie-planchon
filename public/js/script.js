// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("fromagerie-planchon JS imported successfully!");
});

// Homepage parallax effect

// const parallax = Array.from(document.querySelectorAll(".parallax"));

// window.onscroll = () => {
//    parallax.forEach((el) => {
//       // apparent scroll speed of the background
//       // defaults to half the scroll amount
//       const speed = el.dataset.speed || 0.5;
//       const windowYOffset = window.pageYOffset;
//       const newBgPos = "50% " + (windowYOffset * speed) + "px";
      
//       el.style.backgroundPosition = newBgPos;
//    });
// }

// Navbar scroll effect

window.addEventListener('scroll', function() {
   const navbar = document.getElementById('navbar');
   if (window.scrollY > 50) {
       navbar.classList.add('scrolled');
   } else {
       navbar.classList.remove('scrolled');
   }
});

// Navbar burger menu

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal

document.addEventListener('DOMContentLoaded', (event) => {
   // Function to open modal
   function openModal(modalId) {
     var modal = document.getElementById(modalId);
     modal.style.display = "block";
   }
 
   // Function to close modal
   function closeModal(modalId) {
     var modal = document.getElementById(modalId);
     modal.style.display = "none";
   }
 
   // Add event listeners to all edit buttons and close buttons
   document.querySelectorAll('button[id^="edit-"]').forEach(button => {
     button.addEventListener('click', (event) => {
       const id = button.id.split('-')[1];
       openModal(`modal${id}`);
     });
   });
 
   // Add event listeners to all close buttons
   document.querySelectorAll('.close').forEach(button => {
     button.addEventListener('click', (event) => {
       const id = button.dataset.modal;
       closeModal(id);
     });
   });
 
   // Close modal if user clicks outside of it
   window.addEventListener('click', (event) => {
     document.querySelectorAll('.modal').forEach(modal => {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     });
   });
 });
 

