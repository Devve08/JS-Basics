let myname = document.querySelector("#name");
let surname = document.querySelector("#surname");
let city = document.querySelector("#city");
let button = document.querySelector("#button");

button.addEventListener("click", () =>{

    let confir = confirm();
    if(confir == true) {
        myname.value = "";
        surname.value= "";
        city.value= "";
    } else {
        null
    }
})