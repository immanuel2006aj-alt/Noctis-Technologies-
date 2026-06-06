/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener(
"click",
()=>{

navLinks.classList.toggle(
"show-menu"
);

});

}

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector("form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
this.querySelector(
'input[type="text"]'
);

const email =
this.querySelector(
'input[type="email"]'
);

if(

name.value.trim()==="" ||
email.value.trim()===""

){

alert(
"Please fill all required fields."
);

return;

}

alert(
"Thank you. We will contact you soon."
);

this.reset();

});

}
