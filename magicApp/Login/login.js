const btn = document.querySelector("button");
// const form = document.querySelector('form')


btn.addEventListener("click", function(e){
    e.preventDefault();
    const uEmail = document.getElementById("eMail");
    const uPassword = document.getElementById("uPassword");
    
    const uMail = checkUserName(uEmail.value);
    const uPass = checkUserPass(uPassword.value);

    console.log(uMail);
    console.log(uPass);

        if(uMail && uPass){
            console.log({check:uEmail.value, password: uPassword.value});
        }else{
           alert("Please enter correct value")
        }

   
});

function checkUserName(check) {
    return check.includes("@gmail.com");
}

function checkUserPass(password) {
    return password.length === 6;
}

