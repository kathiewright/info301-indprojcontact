/*
Program:  Contact Us Form
Author:   
Date:     
Purpose:  Adds a contact form with user data validation.  Stores the information in an object variable.
*/

"use strict";

// global variables
var feedback = {};     //declares an object variable
var feedbackString = "";


// validate entered username
function validateUsername() {
   var unInput = document.getElementById("uname");
   var errorDiv = document.getElementById("usernameError");
   try {
//      if (unInput.value.length < 2) {
      if (/.{2,}/.test(unInput.value) === false) {
         throw "Username must be at least 2 characters long";
      } 

      // remove any username error styling and message
      unInput.style.background = "";
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
      // copy valid username value to feedback object
      feedback.username = unInput.value;
      // copy feedback.username value to feedback section

   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      unInput.style.background = "rgb(255,233,233)";
   }
}

// validate entered phone number:  note it must be in a ###-###-###
function validatePhone() {
   var phone = document.getElementById("phoneinput");

   var errorDiv = document.getElementById("phoneError");
   try {
     
     if (phone.value.length >= 12) {
       if(/^[2-9]\d{2}-\d{3}-\d{4}$/.test(phone.value)===false){
         throw "Phone numbers must be in ###-###-#### format"
       }
     } else {
       throw "Enter phone number in a ###-###-#### format"
     }


      // remove any phone error styling and message
      phone.style.background = "";

      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
      // copy valid phone to feedback object
      feedback.phone = phone.value;
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      phone.style.background = "rgb(255,233,233)";
    
   }
}

// validate entered email
function validateEmail() {
   var emailInput = document.getElementById("emailbox");
   var errorDiv = document.getElementById("emailError");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {

    if (emailCheck.test(emailInput.value) === false) {
       throw "Please provide a valid email address";
    }

      // remove any email error styling and message
      emailInput.style.background = "";
      errorDiv.innerHTML = "";
      errorDiv.style.display = "none";
 
      feedback.email = emailInput.value;
      // copy feedback.email value to feedback section

   }
   catch(msg) {
      // display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
}



// convert form input to strings for submission
function convertToString() {

   // convert feedback object to string
   feedbackString = JSON.stringify(feedback);
   var contactmsg = document.getElementById("usermessage")
   alert("The following message: " + contactmsg.value + "\n" + "has been received from" + "\n" + feedbackString );
}

function createEventListeners() {
   var unInput = document.getElementById("uname");
   var phone = document.getElementById("phoneinput");
   var emailInput = document.getElementById("emailbox");
   if (unInput.addEventListener) {
      unInput.addEventListener("change", validateUsername, false); 
      phone.addEventListener("change", validatePhone, false); 
      emailInput.addEventListener("change", validateEmail, false); 
   } else if (unInput.attachEvent) {
      unInput.attachEvent("onchange", validateUsername);
      phone.attachEvent("onchange", validatePhone);
      emailInput.attachEvent("onchange", validateEmail);
   }
 
  var button = document.getElementById("submitBtn");
   if (button.addEventListener) {
      button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
      button.attachEvent("onclick", convertToString);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}