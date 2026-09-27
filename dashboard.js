// Get logged-in user

let loginUser = JSON.parse(
localStorage.getItem("loginUser")
)

// Check login

if (loginUser == null) {

window.location.href = "login.html"

}

// Get HTML elements

let welcomeName = document.getElementById("welcomeName")

let userName = document.getElementById("userName")

let userEmail = document.getElementById("userEmail")

let userAge = document.getElementById("userAge")

let userCountry = document.getElementById("userCountry")

let userDob = document.getElementById("userDob")

let logoutBtn = document.getElementById("logoutBtn")

// Display user data

if (loginUser != null) {

welcomeName.innerText = loginUser.userName

userName.innerText = loginUser.userName

userEmail.innerText = loginUser.email

userAge.innerText = loginUser.age

userCountry.innerText = loginUser.country

userDob.innerText = loginUser.dob

}

// Logout

logoutBtn.addEventListener("click", function () {


localStorage.removeItem("loginUser")

window.location.href = "index.html"


})
