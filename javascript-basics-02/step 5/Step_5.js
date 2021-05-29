let img = document.querySelector("#image1")
let imgOne = document.querySelector("#image2")
let imgTwo = document.querySelector("#image3")
let imgThree = document.querySelector("#image4")
let imgFour = document.querySelector("#image5")


img.addEventListener("mouseover", () =>{
    img.src="images/image1_2.jpg"
})

img.addEventListener("mouseout", () =>{
    img.src="images/image1.jpg";
})

imgOne.addEventListener("mouseover", () =>{
    imgOne.src="images/image2_2.jpg"
})

imgOne.addEventListener("mouseout", () =>{
    imgOne.src="images/image2.jpg";
})

imgTwo.addEventListener("mouseover", () =>{
    imgTwo.src="images/image3_2.jpg"
})

imgTwo.addEventListener("mouseout", () =>{
    imgTwo.src="images/image3.jpg";
})

imgThree.addEventListener("mouseover", () =>{
    imgThree.src="images/image4_2.jpg"
})

imgThree.addEventListener("mouseout", () =>{
    imgThree.src="images/image4.jpg";
})

imgFour.addEventListener("mouseover", () =>{
    imgFour.src="images/image5_2.jpg"
})

imgFour.addEventListener("mouseout", () =>{
    imgFour.src="images/image5.jpg";
})