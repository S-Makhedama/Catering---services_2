

/****************************************************Booking page**********************************************************************/

/****************************************************Home page/ contact  button**********************************************************************/

// Add event listener to the button
   document.getElementById('Contact_btn').addEventListener('click', function() {
    // Navigate to the next page when the button is clicked
    window.location.href = 'contact.html';
  });

/********************************Navigate from home to contact us page*********************************************************/
  function navigateToPage() {
    // Change the URL to the desired page
    window.location.href = "contact.html";
  }
//script.js
document.addEventListener('DOMContentLoaded',

  function () {
    const tab = document
     .querySelectorAll('.tab');
        tab.forEach(tab=>{
          item.addEventListener('click',
            function () {
               navItems.forEach(tab=>tab
                 .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });

    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
  }
  

/****************************************************Contact us page validation form************************************************/

function validate() { 
  let name = 
      document.getElementById("name").value; 
  let subject = 
      document.getElementById("subject").value; 
  let phone = 
      document.getElementById("phone").value; 
  let email = 
      document.getElementById("email").value; 
  let message = 
      document.getElementById("message").value; 
  let error_message = 
      document.getElementById("error_message"); 

  error_message.style.padding = "10px"; 

  let errors = []; 

  if (name.length < 5) { 
      errors.push("Please Enter a valid Name");} 
  if (subject.length < 10) { 
      errors.push("Please Enter a Correct Subject");} 
  if (isNaN(phone) || phone.length != 10) { 
      errors.push("Please Enter a valid Phone Number");} 
  if (email.indexOf("@") == -1 || email.length < 6) { 
      errors.push( 
          "Please Enter a valid Email");} 
  if (message.length <= 40) { 
      errors.push( 
          "Please Enter More Than 40 Characters");} 

  if (errors.length > 0) { 
      error_message.innerHTML = 
          errors.join("<br>"); 
      return false;} 
  else { 
      alert( 
          "Form Submitted Successfully!"); 
      return true;}}

/*----------------------------------Change Tab color for N0av Bar------------------------------------------------------------*/

  
/*------------------------------------------------------------------ Our Services-------------------------------------------------------*/
  // Our services slide show. Get the button
  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scrollContainer");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    
    const imageWidth = 400; // Width of each image
    let scrollPosition = 0;
  
    // Debounce function to limit the rate at which scrollGallery is called
    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      };
    }
  
    function scrollGallery(offset) {
      scrollPosition += offset * imageWidth;
      // Ensure scrollPosition is within bounds
      scrollPosition = Math.max(0, Math.min(scrollPosition, scrollContainer.scrollWidth - scrollContainer.clientWidth));
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  
    // Debounce the scrollGallery function to prevent frequent calls
    const debouncedScrollGallery = debounce(scrollGallery, 200);
  
    leftArrow.addEventListener("click", function () {
      debouncedScrollGallery(-imageWidth);
    });
  
    rightArrow.addEventListener("click", function () {
      debouncedScrollGallery(imageWidth);
    });
  });
  
  
// Function to change the rating based on the clicked star
function changeRating(rating) {
  // Get all star elements
  var stars = document.querySelectorAll('.fa-star');

  // Loop through each star
  for (var i = 0; i < stars.length; i++) {
      // If the star is before or equal to the clicked star, set it to checked
      if (i < rating) {
          stars[i].classList.add('checked');
      } else { // Otherwise, remove the checked class
          stars[i].classList.remove('checked');
      }
  }
}
/*-------------------------------------------------------End of Our services----------------------------------------------------------*/

/***********************************************about*********************************************/
const image = document.getElementById('image');
let positionX = 0; // Initial X position of the image
let speed = 2; // Speed of movement in pixels per frame

function moveImage() {
    positionX += speed;
    image.style.left = positionX + 'px';
    
    // Repeat the movement
    if (positionX < window.innerWidth) {
        requestAnimationFrame(moveImage);
    }
}

// Start the animation
moveImage();

// Scroll to top button
let mybutton = document.getElementById("myBtn1");
 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// end of scroll to top