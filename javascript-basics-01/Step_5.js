let numOne = document.querySelector("#first_number");
let numTwo = document.querySelector("#second_number");
let button = document.querySelector("#validate");

button.addEventListener("click", () => {
    let result = (numOne.value) * (numTwo.value);
    alert( result ) 
})