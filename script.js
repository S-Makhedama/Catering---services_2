
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

/****************************************************Home page**********************************************************************/

// Add event listener to the button
   document.getElementById('Contact_btn').addEventListener('click', function() {
    // Navigate to the next page when the button is clicked
    window.location.href = 'contact.html';
  });

/****************************************************Contact us page validation form************************************************/

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

/*----------------------------------Change Tab color for nav bar------------------------------------------------------------*/
function changeColor(tab) {
    
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(item) {
      item.classList.remove('active');
    });
  
    
    tab.classList.add('active');
  }
  


  /*---------------------------------------decor-----------------------------------------------------*/

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

  /*---------------------------------------------catering---------------------------------------------------*/
  function showGallery(galleryId) {
    const africanGallery = document.getElementById('africanGallery');
    const modernGallery = document.getElementById('modernGallery');

    if (galleryId === 'african-cusions') {
        africanGallery.style.display = 'block';
        modernGallery.style.display = 'none';
        drinksGallery.style.display = 'none';
    } else if (galleryId === 'modern-cusions') {
        africanGallery.style.display = 'none';
        modernGallery.style.display = 'block';
        drinksGallery.style.display = 'none';
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
