let age = document.querySelector("#age");
let button = document.querySelector("#validate");

button.addEventListener("click", () => {
    if ( age.value > 18){
        alert("You are over 18");
    } else alert ("You are under 18");
})