let green = document.querySelector(".green");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let text = document.querySelector("#text");

function colors(color1, color2, color3, paragraph) {
    color1.onclick = () => {
        paragraph.style.color = "green";
    }

    color2.onclick = () => {
        paragraph.style.color = "red";
    }

    color3.onclick = () => {
        paragraph.style.color = "blue";
    }
}

colors(green, red, blue, text);