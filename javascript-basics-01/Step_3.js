let nameinput = document.querySelector(".input")
let button = document.querySelector(".input-btn");
 

button.addEventListener("click", () => {
    alert("Hello" + " " + nameinput.value);
})

