const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password_confirmation=document.getElementById("password_confirmation")
form.addEventListener("submit",(event)=>{
    check_form();
    event.preventDefault();
    
    
})
email.addEventListener("blur",()=>{
    check_email()
})
username.addEventListener("blur",()=>{
    check_usurname()
})
password.addEventListener("blur",()=>{
    check_password()
})
password_confirmation.addEventListener("blur",()=>{
    check_confirmpassword()
})
function check_usurname()
{
    const usernameValue=username.value
    if(usernameValue=="")
        {
            errorInput(username,"Preencha este campo com o seu nome completo")

        }
     else
     {
        const formItem=username.parentElement
        formItem.className="form-content"
     }
}
function check_email()
{
    const emailValue=email.value
    if(emailValue=="")
        {
            errorInput(email,"Preencha este campo com seu e-mail")
        }
    else
    {
        const formItem=email.parentElement
        formItem.className="form-content"
    }
}
function check_password()
{
    const passwordValue=password.value
    if(passwordValue=="")
        {
            errorInput(password,"Preencha este campo com uma senha")

        }
    else if(passwordValue.length<8)
        {
            errorInput(password,"A senha deve conter mais de 8 caracteres")

        }   
    else
    {
        const formItem=password.parentElement
        formItem.className="form-content"
    } 
}
function check_confirmpassword() {
    const passwordValue = password.value;
    const password_confirmationValue = password_confirmation.value;
    if (password_confirmationValue === "") {
        errorInput(password_confirmation, "Preencha para confirmar sua senha");
    } else if (password_confirmationValue !== passwordValue) {
        errorInput(password_confirmation, "As senhas não são iguais");
    } else {
        const formItem = password_confirmation.parentElement;
        formItem.className = "form-content";
    }
}

function check_form()
{
    check_usurname();
    check_password();
    check_email();
    check_confirmpassword();
    const fomrItens=form.querySelectorAll(".form-content")
    const isValid=[...fomrItens].every((item)=>
    {
        return item.className==="form-content"
    })
    if(isValid){
       
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
    
        
        alert("Cadastro realizado com sucesso!");
    
        
        window.location.href = "login.html";
        
    }
return isValid;
}
function errorInput(input,message){
   const formItem= input.parentElement;
   const textMessage=formItem.querySelector("a")
   textMessage.innerText=message
   formItem.className="form-content error"
}
