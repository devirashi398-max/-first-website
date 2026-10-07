const contact=document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message")
contact.addEventListener("submit",function(event){
event.preventDefault();
if (name.value === "") {
    alert("Please enter your name");
}
else if (email.value === "") {
    alert("Please enter your email");
}
else if (message.value === "") {
    alert("Please enter your message");
}
else {
    alert("Message sent successfully!");
}
});

