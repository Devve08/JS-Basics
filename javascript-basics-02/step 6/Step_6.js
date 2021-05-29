let img = document.querySelector("#image1")
let imgOne = document.querySelector("#image2")
let imgTwo = document.querySelector("#image3")
let imgThree = document.querySelector("#image4")
let imgFour = document.querySelector("#image5")


function changeImage (image, source) {
   image.onmouseover = function (){
       
    image.src = source;
        
   }
}

    changeImage(img, "images/image1_2.jpg");
    changeImage(imgOne, "images/image2_2.jpg");
    changeImage(imgTwo, "images/image3_2.jpg");
    changeImage(imgThree, "images/image4_2.jpg");
    changeImage(imgFour, "images/image5_2.jpg");

function returnImage(image, originalSource){
    image.onmouseout = function (){
        image.src = originalSource;
    }
}


    returnImage(img, "images/image1.jpg");
    returnImage(imgOne, "images/image2.jpg");
    returnImage(imgTwo, "images/image3.jpg");
    returnImage(imgThree, "images/image4.jpg");
    returnImage(imgFour, "images/image5.jpg");
   
