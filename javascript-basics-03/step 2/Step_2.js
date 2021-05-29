let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
let inputtext = document.querySelector("#texte");

function doThis(yes, no, text){
    no.onclick = () =>  {
        text.style.display = "none";
    } 
    yes.onclick = () => {
        text.style.display = "block";
    }
}

doThis(show, hide, inputtext);