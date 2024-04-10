
/**********************************Dark or Bright Mode***************************************************/

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

/****************************************************Booking page**********************************************************************/
function submitForm() {
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    people: document.getElementById('people').value,
    time: document.getElementById('time').value,
    date: document.getElementById('date').value,
    number: document.getElementById('number').value
  };

  // Convert formData to JSON string and store it in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Alert the user that the form has been submitted
  alert('Form submitted successfully!');

  // Clear the form fields
  document.getElementById('eventForm').reset();
}
  
function goBackToIndex() {
  window.location.href = "index.html";
}
  
/****************************************************Home page**********************************************************************/

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

/****************************************************Contact us page validation form************************************************/


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve form inputs
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // You can perform further validation if needed
    
    // Here, you can send the form data using AJAX or handle it in any way you prefer
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    
    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
});
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Validate form inputs
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !subject || !message) {
          alert('Please fill in all fields.');
          return;
      }

      // Send form data using AJAX
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);

      fetch(window.location.href,  {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Handle success response from server
          alert('Message sent successfully!');
          // Optionally reset the form
          contactForm.reset();
      })
      .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
          alert('An error occurred while sending your message. Please try again later.');
      });
  });
});


/*----------------------------------Change Tab color for nav bar------------------------------------------------------------*/
function changeColor(tab) {
    
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(item) {
      item.classList.remove('active');
    });
  
    
    tab.classList.add('active');
  }
  


/*----------------------------------------------------------------decor-------------------------------------------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
    
  
  /*------------------------------------------------------------------catering-------------------------------------------------------*/
  function showGallery(galleryId) {
    const africanGallery = document.getElementById('africanGallery');
    const modernGallery = document.getElementById('modernGallery');

    if (galleryId === 'african-cuisines') {
        africanGallery.style.display = 'block';
        modernGallery.style.display = 'none';
    } else if (galleryId === 'modern-cuisines') {
        africanGallery.style.display = 'none';
        modernGallery.style.display = 'block';
    } 
}


function goBack() {
window.history.back();
}


window.onload = function() {
// Get all images on the page
var images = document.getElementsByTagName('img');

// Loop through each image
for (var i = 0; i < images.length; i++) {
// Add onclick event
images[i].onclick = function() {
    // Display alert with image source
    alert(this.src);
};
}
};

/*-------------------------------------------------------Our services----------------------------------------------------------*/

document.getElementById("barLink").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "bar.htm";
  });

document.getElementById("decorLink").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "decor.html";
  });
  
  document.getElementById("cateringLink").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "catering.html";
  });

  var menuItems = ["Menu", "Food Preparation", "Food Presentation", "Beverages", "Platted services", "Desert Stations"];
  for (var i = 0; i < menuItems.length; i++) {
      document.write("<li><b>" + menuItems[i] + "</b></li>");
  }

  var serviceStaffTypes = [
      'barmen',
      'waiters',
      'front of house',
      'scullery staff'
  ];

var list = document.getElementById('list');

var listItems = list.getElementsByTagName('li');

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
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*------------------------------------------------STAFF--------------------------------------------------------------*/
 // Function to display modal
 function showModal(title, body) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modal-title");
  var modalBody = document.getElementById("modal-body");
  modal.style.display = "block";
  modalTitle.innerText = title;
  modalBody.innerText = body;
}

// Function to close modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

  // Close modal when clicking outside of it
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      closeModal();
    }
  });

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