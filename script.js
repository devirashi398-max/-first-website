 console.log("JavaScript connected!");
 
const contact=document.querySelector(".contact");
contact.addEventListener("click",function(){
    alert("Thank you for contacting Artiva Studio!");
});
const start=document.querySelector(".one");
const heading=document.querySelector(".heading-content");
start.addEventListener("click",function(){
heading.textContent="Let's Create Something Amazing!"
});
const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav");
menu.addEventListener("click",function(){
    nav.classList.toggle("show")
})
const images=document.querySelectorAll(".image");
images.forEach(function(image){
    image.addEventListener("click",function(){
        const create=document.createElement("div");
        const copy = image.cloneNode();
        create.classList.add("create");
        document.body.append(create);
        copy.classList.add("preview");
        create.append(copy);
        const closebtn=document.createElement("button");
        closebtn.classList.add("closebtn")
        closebtn.textContent="x";
        create.append(closebtn);
        closebtn.addEventListener("click", function() {
         create.button();
        });
        create.addEventListener("click", function() {
        create.remove();
       });
         console.log(image);
    });
});
const theme=document.querySelector("#theme");
theme.addEventListener("click",function(){
    const body=document.querySelector("body");
    body.classList.toggle("dark-mode")
    if(body.classList.contains("dark-mode")){
        theme.textContent="☀️";
    }
    else{
        theme.textContent= "🌙";
    }
});
