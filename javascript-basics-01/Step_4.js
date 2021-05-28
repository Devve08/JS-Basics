
let firstname_input = document.querySelector("#name")
let surname_input = document.querySelector("#surname")
let city_input = document.querySelector("#city")
let button = document.querySelector("#validate")

button.addEventListener("click", () =>{

    alert("Nom :" + " " + firstname_input.value + "\n" + "Prenom :" + " " + surname_input.value + "\n" + " Ville :" 
    + " " + city_input.value + "\n");
} )


