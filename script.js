const buttonMenu=document.querySelector("#menu-toogle");
const menuNav = document.querySelector("nav .menu");
const navLinks = menuNav.querySelectorAll("li a");
const overlay=document.querySelector(".overlay");
const btnAlertOk=document.querySelector("#btn-info-ok")
const successInfoMessage=document.querySelector(".success-info>p")

btnAlertOk.addEventListener("click",()=>{
    overlay.classList.remove("show");
})

buttonMenu.addEventListener("click",()=>{
    menuNav.classList.toggle("show");
})

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        menuNav.classList.toggle("show");
    })
})


/*FORM*/
const api="https://script.google.com/macros/s/AKfycbwfEtuSqCTLbxlFFrXyYHdz6dBB2rXIziGk6FEevs5g-3Bq475WkWfFTve5MCh32KQ/exec";

let form = document.querySelector('#form');
let add =document.querySelector('#add-data');

document.getElementById("form").addEventListener("submit", function(e) {
 e.preventDefault(); // cegah reload halaman
//   alert("Form submitted tanpa clear!");
if (this.checkValidity()){
    addData()
}
 });



function addData(){
    
    add.textContent="Processing...";
    let obj={
        phone:form["phone"].value,
        email:form["email"].value,
        parentName:form["parent-name"].value,
        childName:form["child-name"].value,
        grade:form["grade"].value,
        course:form["course"].value,
        device:form["device"].value
    }
    // console.log(obj)
    fetch(api,{
        method:'POST',
        body:JSON.stringify(obj)
    })
    .then(res=>res.text())
    .then(data=>{
        successInfoMessage.textContent=`${data} registered successfully!`;
        overlay.classList.add("show");
        
        add.textContent="Book Now!"
        
    })
}

