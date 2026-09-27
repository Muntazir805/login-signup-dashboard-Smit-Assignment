Here’s a clean, beginner-friendly README for your GitHub repository:

# Signup, Login & Dashboard

A simple and responsive user authentication project built with **HTML, CSS, and JavaScript**. This project demonstrates how to create a Signup page, Login page, and Dashboard using **LocalStorage** to store and manage user information.

## 🚀 Features

* User Signup
* Username, Email, Password, Age, Country, and Date of Birth fields
* Basic form validation
* Password validation
* User data stored in LocalStorage
* User Login authentication
* Login session using LocalStorage
* Personalized Dashboard
* Display user information
* Logout functionality
* Protected Dashboard access
* Fully responsive design
* Simple and beginner-friendly JavaScript

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* LocalStorage

## 📁 Project Structure

```text
signup-login-dashboard/
│
├── index.html
├── login.html
├── dashboard.html
│
├── style.css
├── script.js
├── login.js
└── dashboard.js
```

## 🔐 How It Works

### 1. Signup

The user creates an account by providing:

* Username
* Email
* Password
* Age
* Country
* Date of Birth

The account information is stored in the browser's **LocalStorage**.

### 2. Login

The user enters their:

* Email
* Password

JavaScript checks the entered information against the registered users stored in LocalStorage.

### 3. Dashboard

After successful login, the user is redirected to the Dashboard where their account information is displayed.

### 4. Logout

When the user clicks **Logout**, the current login information is removed from LocalStorage and the user is redirected to the Login page.

## 💾 LocalStorage

This project uses LocalStorage to store user information.

Example:

```js
localStorage.setItem("UserList", JSON.stringify(userList))
```

The currently logged-in user's information is stored using:

```js
localStorage.setItem("loginUser", JSON.stringify(selectedUser))
```

## 📱 Responsive Design

The interface is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

CSS media queries are used to make the layout responsive on different screen sizes.

## 🎯 Learning Goals

This project was created to practice:

* DOM manipulation
* JavaScript events
* Form validation
* Functions
* Arrays and objects
* LocalStorage
* Login authentication logic
* Page navigation
* Responsive CSS
* Basic project structure

## ⚠️ Note

This is a **frontend learning project**. User passwords are stored in LocalStorage and are **not securely encrypted**. It should not be used for real-world authentication or production applications.

## 👨‍💻 Author

**Muntazir Hussain**

BS Computer Science | MERN Stack Trainee

---

⭐ If you find this project useful, feel free to explore the code and improve it.
