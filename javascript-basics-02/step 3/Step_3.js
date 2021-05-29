let target = document.querySelector(".target");
let input = document.querySelector("#name");


input.onblur = () => {
target.innerHTML = input.value;
}