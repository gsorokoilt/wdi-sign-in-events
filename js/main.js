
// document.addEventListener("click", function(event))
//   var modal = document.querySelector(".modal")
//

document.addEventListener("DOMContentLoaded", function(event) {
  var signIn = document.querySelector(".signin");
    var modal = document.querySelector(".modal");
    signIn.addEventListener('click', function(event){
//    click function for sign-in
      signIn.classList.toggle('on');

      if (signIn.classList.contains('on')) {

        modal.style.display = "block";

    }

});
// define click funciton to close modal
var close = document.querySelector(".close");
  close.addEventListener('click', function(event){
    modal.style.display = 'none';


  })


// defining click action for submit button

});
