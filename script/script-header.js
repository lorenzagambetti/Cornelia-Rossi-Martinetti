// Get the button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById("logo").style.height = "10vh";
    document.getElementById("top").style.height = "10vh";
    document.getElementById("navbar-container").style.padding = "0 1vh";
  } else {
    mybutton.style.display = "none";
    document.getElementById("logo").style.height = "12vh";
    document.getElementById("top").style.height = "12vh";
    document.getElementById("navbar-container").style.padding = "1vh";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}