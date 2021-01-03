var fields = {};

document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true;

 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);

 return valid;
}


class User {
 constructor(firstName, lastName, email) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.email = email;
 }
}

function sendContact() {

 if (isValid()) {
 let usr = new User(firstName.value, lastName.value, email.value);

 alert(`${usr.firstName} thanks for registering.`)

 } else {
 alert("There was an error")
 }
}



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "EXPIRED";
  }
}, 1000);

/*
(function() {
    var
    // Obtain a reference to the canvas element using its id.
    htmlCanvas = document.getElementById('c'),
    // Obtain a graphics context on the canvas element for drawing.
    context = htmlCanvas.getContext('2d');

   // Start listening to resize events and draw canvas.
   initialize();

   function initialize() {
       // Register an event listener to call the resizeCanvas() function
       // each time the window is resized.
       window.addEventListener('resize', resizeCanvas, false);
       // Draw canvas border for the first time.
       resizeCanvas();
    }

    // Display custom canvas. In this case it's a blue, 5 pixel
    // border that resizes along with the browser window.
    function redraw() {
       context.strokeStyle = 'black';
       context.lineWidth = '5000';
       context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
    }

    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth;
        htmlCanvas.height = window.innerHeight;
        redraw();
    }
})();
*/
