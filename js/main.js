
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

  var user = document.querySelector("#user")
  var password = document.querySelector("#pass")

// defining click action for submit button
var submit = document.querySelector(".submit")
  submit.addEventListener('click', function(event){
    var user = document.querySelector("#user")
    var password = document.querySelector("#pass")
    user.classList.add("error");
    password.classList.add("error")
  })

  user.addEventListener('click', function(event){
    if (user.classList.contains("error")){
      user.classList.remove("error")}

  })

  password.addEventListener('click', function(event){
    if (password.classList.contains("error")){
      password.classList.remove("error")}

  })


});
