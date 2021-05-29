let button = document.querySelector("#validate");

button.addEventListener("click", () => {
    let shoes = document.querySelector("#shoe_size").value;
    let birthYear = document.querySelector("#year").value;

    if (shoes >= 0 && birthYear >= 0){
        let resultOne =  (shoes * 2 + 5) * 50 - birthYear + 1766;
        alert(resultOne);
    } else alert("Thats not a number")
}) 
