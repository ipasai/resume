/*
====================================
 Sam Chung Resume Website
 Version 2 JavaScript
====================================
*/


// ================================
// AOS Animation
// ================================


AOS.init({

    duration:900,

    once:true,

    offset:80

});








// ================================
// Typing Effect
// ================================


const typingElement =
document.getElementById("typing");



if(typingElement){


new Typed("#typing", {


strings:[

"Senior Full Stack Engineer",

"AI-Enabled Software Engineer",

"Frontend Engineer",

"Backend Engineer"

],


typeSpeed:80,


backSpeed:40,


backDelay:1500,


loop:true


});


}









// ================================
// Language System
// ================================


let currentLang =

localStorage.getItem("language")
||
"zh-TW";





function applyLanguage(lang){



let data;



if(lang==="en-US"){

data=enUS;

}

else{

data=zhTW;

}




document
.querySelectorAll("[data-i18n]")
.forEach(element=>{


const key =
element.dataset.i18n;



if(data[key]){


element.textContent =
data[key];


}



});




document.documentElement.lang = lang;



localStorage.setItem(
"language",
lang
);





// Button Active Style


document
.querySelectorAll(".lang-btn")
.forEach(btn=>{


btn.classList.remove(
"active"
);



if(btn.dataset.lang===lang){


btn.classList.add(
"active"
);


}



});



}





// Initial Language


applyLanguage(currentLang);








// Language Buttons


document
.querySelectorAll(".lang-btn")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const lang =

button.dataset.lang;



applyLanguage(lang);



});


});









// ================================
// Dark Mode
// ================================


const themeButton =

document.getElementById(
"theme-toggle"
);



const themeIcon =

themeButton?.querySelector(
"i"
);



const savedTheme =

localStorage.getItem(
"theme"
);





if(savedTheme==="dark"){


document.body.classList.add(
"dark"
);



if(themeIcon){


themeIcon.classList.remove(
"fa-moon"
);


themeIcon.classList.add(
"fa-sun"
);


}



}





themeButton?.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);



const dark =

document.body.classList.contains(
"dark"
);



localStorage.setItem(
"theme",
dark ? "dark":"light"
);




if(themeIcon){


themeIcon.className =

dark

?

"fa-solid fa-sun"

:

"fa-solid fa-moon";


}



});









// ================================
// Navbar Shadow
// ================================


const navbar =

document.querySelector(
".navbar"
);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>50){


navbar.style.boxShadow =

"0 5px 25px rgba(0,0,0,.1)";


}

else{


navbar.style.boxShadow =
"none";


}



});









// ================================
// Footer Year
// ================================


const footer =

document.querySelector(
"footer p"
);



if(footer){


footer.innerHTML =

`
© ${new Date().getFullYear()}
Sam Chung.
Senior Full Stack Engineer.
`;



}









// ================================
// Smooth Scroll
// ================================


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


const target =

document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});
