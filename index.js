var email = document.getElementById("email-input");
var emailExample =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
var form = document.getElementById("form");
var labelErr = document.querySelector(".error")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

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
        }
    }
}

function isValidate(value){
    return emailExample.test(String(value).toLowerCase());
}