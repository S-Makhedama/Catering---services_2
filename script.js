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

/******************************Contact us page validation form****************************************/

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
