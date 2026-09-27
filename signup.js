// Input fields

let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let country = document.getElementById("country");
let dob = document.getElementById("dob");

// Signup button

let signBtn = document.getElementById("signBtn");

// Error messages

let errorname = document.getElementById("errorname");
let erroremail = document.getElementById("erroremail");
let errorpassword = document.getElementById("errorpassword");
let errorage = document.getElementById("errorage");
let errorcountry = document.getElementById("errorcountry");
let errordob = document.getElementById("errordob");

// Get previous users from localStorage

let userList = JSON.parse(localStorage.getItem("UserList")) || [];

// Signup button

signBtn.addEventListener("click", SignUpFunc);

function SignUpFunc() {
  // Clear old errors

  errorname.innerText = "";
  erroremail.innerText = "";
  errorpassword.innerText = "";
  errorage.innerText = "";
  errorcountry.innerText = "";
  errordob.innerText = "";

  // Username validation

  if (userName.value == "") {
    errorname.innerText = "Please enter username";
  }

  // Email validation

  if (email.value == "") {
    erroremail.innerText = "Please enter email";
  }

  // Password validation

  if (password.value == "") {
    errorpassword.innerText = "Please enter password";
  } else if (password.value.length < 8) {
    errorpassword.innerText = "Password must be at least 8 characters";
  }

  // Age validation

  if (age.value == "") {
    errorage.innerText = "Please enter age";
  }

  // Country validation

  if (country.value == "") {
    errorcountry.innerText = "Please select country";
  }

  // Date of birth validation

  if (dob.value == "") {
    errordob.innerText = "Please select date of birth";
  }

  // Stop if any field is invalid

  if (
    userName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    password.value.length < 8 ||
    age.value == "" ||
    country.value == "" ||
    dob.value == ""
  ) {
    return;
  }

  // Create user object

  let userObj = {
    userName: userName.value,

    email: email.value,

    password: password.value,

    age: age.value,

    country: country.value,

    dob: dob.value,
  };

  // Add user to array

  userList.push(userObj);

  // Save users to localStorage

  localStorage.setItem("UserList", JSON.stringify(userList));

  // Go to Login page

  window.location.href = "index.html";
}

userName.addEventListener("input" , function(){
  if(userName.value !== ""){
    errorname.innerText = ""
  } else {
    errorname.innerText = "Please enter username";
  }
})

email.addEventListener("input" , function(){
  if(email.value !== ""){
    erroremail.innerText = ""
  } else {
    erroremail.innerText = "Please enter email";
  }
})

password.addEventListener("input" , function(){
  if(password.value === ""){
    errorpassword.innerText = "please enter password"
  } else if(password.value.length < 8){
    errorpassword.innerText = "Password must be at least 8 characters";
  } else {
    errorpassword.innerText = ""
  }

})


age.addEventListener("input" , function(){
  if(age.value !== ""){
    errorage.innerText = ""
  } else {
    errorage.innerText = "please enter age"
  }
})

country.addEventListener("input" , function(){
  if(country.value !== ""){
    errorcountry.innerText = ""
  } else {
    errorcountry.innerText = "Please select country";
  }
})

dob.addEventListener("input" , function(){
  if(dob.value !== ""){
    errordob.innerText = ""
  } else {
    errordob.innerText = "Please select date of birth";
  }
})
