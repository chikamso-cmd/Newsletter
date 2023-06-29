const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailEmptyWarning = document.querySelector(".emailEmptyWarning");
const succes = document.querySelector(".success");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if(email.value ==""){
        console.log("empty name")
        emailEmptyWarning.style.display = "block";
        emailEmptyWarning.innerHTML = '<p>email cannot be blank</p>'
    }
}
)