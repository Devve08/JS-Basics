let pwd = document.querySelector("#password")
let confi = document.querySelector("#confirmation")
let testBtn = document.querySelector("button")


testBtn.onclick = () =>{
    let value1 = pwd.value;
    let value2 = confi.value;
    if (value1 !== value2) {
       pwd.style.border = "2px solid red";
       confi.style.border = "2px solid red";
    } else null;
}