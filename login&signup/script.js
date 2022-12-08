var Login = document.querySelector("#login");
var Signup = document.querySelector("#signup");
var login = document.querySelector(".login");
var signup = document.querySelector(".signup");
var CloseL = document.querySelector("#closelogin");
var CloseS = document.querySelector("#closesignup");
var loginForm = document.querySelector("#loginform");
var signupForm = document.querySelector("#signupform");


Login.addEventListener('click',()=>{
    console.log('login');
    login.style.display = "flex";
    setTimeout(() => {
        loginForm.style.left = "50%";
    }, 200);
});
Signup.addEventListener('click',()=>{
    console.log('signup');
    signup.style.display = "flex";
    setTimeout(() => {
        loginForm.style.left = "50%";
    }, 200);
});
CloseL.addEventListener('click',()=>{
    login.style.display = "none";
});

CloseS.addEventListener('click',()=>{
    signup.style.display = "none";
});