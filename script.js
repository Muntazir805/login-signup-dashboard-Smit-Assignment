// Input fields

let email = document.getElementById("email")
let password = document.getElementById("password")

// Login button

let loginBtn = document.getElementById("loginBtn")

// Error messages

let erroremail = document.getElementById("erroremail")
let errorpassword = document.getElementById("errorpassword")

// Get users from localStorage

let userList = JSON.parse(localStorage.getItem("UserList")) || []

// Login button

loginBtn.addEventListener("click", LoginFunc)

function LoginFunc() {


// Clear old errors

erroremail.innerText = ""
errorpassword.innerText = ""


// Email validation

if (email.value == "") {

    erroremail.innerText = "Please enter email"

}


// Password validation

if (password.value == "") {

    errorpassword.innerText = "Please enter password"

}


// Stop if fields are empty

if (
    email.value == "" ||
    password.value == ""
) {

    return

}


// Check user

let userFound = false

let selectedUser


for (let i = 0; i < userList.length; i++) {

    if (email.value == userList[i].email) {

        userFound = true

        selectedUser = userList[i]

        break

    }

}


// Email not found

if (userFound == false) {

    erroremail.innerText = "Email not registered"

    return

}


// Check password

if (password.value == selectedUser.password) {

    // Save logged-in user

    localStorage.setItem(
        "loginUser",
        JSON.stringify(selectedUser)
    )


    // Go to dashboard

    window.location.href = "dashboard.html"

}

else {

    errorpassword.innerText = "Invalid password"

}


}


email.addEventListener("input" , function(e){
    if(email.value !== ""){
        erroremail.innerText = ""
    } else {
        erroremail.innerText = "Please enter email"
    }
})

password.addEventListener("input" , function(e){
    if(password.value !== ""){
        errorpassword.innerText = ""
    } else {
        errorpassword.innerText = "Invalid password"
    }
})

