// Set the date we're counting down to
var countDownDate = new Date("Apr 3, 2021 10:00:00").getTime();

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
       context.fillStyle = "black";
       context.fillRect(0, 0, htmlCanvas.width, htmlCanvas.height);

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

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/5906/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Your Email Has Successfully Been Added")
        },
        error: function(){
          alert("There was an error; Please contact sdfg45435gsd325@outlook.com for help")
        }
    });
}
