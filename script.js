
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
/*
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errorElement = document.getElementById("error");

    errorElement.innerHTML = "";

    if (name.trim() === "") {
        errorElement.innerHTML = "Name is required";
        return false;
    }

    if (email.trim() === "") {
        errorElement.innerHTML = "Email is required";
        return false;
    } else if (!isValidEmail(email)) {
        errorElement.innerHTML = "Invalid email address";
        return false;
    }

    if (subject.trim() === "") {
        errorElement.innerHTML = "Subject is required";
        return false;
    }

    if (message.trim() === "") {
        errorElement.innerHTML = "Message is required";
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");

  error.innerHTML = "";

  if (name == "" || email == "" || subject == "" || message == "") {
    error.innerHTML = "All fields are required.";
    return false;
  }

  // You can add additional validation logic here if needed

  return true;
}
/*** */


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

    function goBack() {
      window.history.back();
    }

    // Function to zoom in on an image
function zoomIn(event) {
    event.target.style.transform = "scale(1.5)"; // Zoom factor 1.5
  }
  
  // Function to zoom out on an image
  function zoomOut(event) {
    event.target.style.transform = "scale(1)"; // Reset to original size
  }
  
  // Add event listeners to all images for zoom functionality
  document.querySelectorAll('.main img').forEach(function(img) {
    img.addEventListener('mouseenter', zoomIn);
    img.addEventListener('mouseleave', zoomOut);
  });

   onclick="goBack()"

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
function goBack(){
  window.history.back();
}
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

