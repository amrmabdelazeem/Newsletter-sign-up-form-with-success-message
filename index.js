var page1 = document.querySelector(".container");
var page2 = document.querySelector(".subscribe");
var email = document.getElementById("email-input");
var emailExample =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
var form = document.getElementById("form");
var labelErr = document.querySelector(".error")

form.addEventListener("submit", (e)=>{
    if(!validateEmail()){
        e.preventDefault();
    }
    validateEmail();
})
function validateEmail(){
    const emailValue = email.value.trim();
    if(emailValue === ""){
        labelErr.classList.add("showing");
    }else{
        if(!isValidate(emailValue)){
            labelErr.classList.add("showing");
        }else{
            labelErr.classList.remove("showing");
            page1.classList.add("secret");
            page2.classList.remove("secret");
        }
    }
}

function isValidate(value){
    return emailExample.test(String(value).toLowerCase());
}