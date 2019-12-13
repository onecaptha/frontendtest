
$(document).ready(function(){
    $("#slideup").click(function(){
        $("#coolar").slideUp();
    });
});
 // Get the modal
var modals = document.getElementById('mymodal2');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];
    
// When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modals.style.left = "0px";
//     btn.style.left = "-25%";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modals.style.bottom = "-100%";
    btn.style.bottom = "0%";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modals) {
        modals.style.bottom = "-100%";
    }
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 300)
    {
        modals.style.bottom = "0";
        // btn.style.left = "0%";
        // jQuery('#mymodal2').slideUp();
    }
    else
    {
       modals.style.bottom = "0%";
       // btn.style.left = "-25%";
       // jQuery('#mymodal2').slideDown();

    }
});