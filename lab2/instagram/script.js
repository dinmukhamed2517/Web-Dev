const image = document.getElementById("main-img");
listOfImages = ["girl.png","photo2.png","photo3.png","photo1.png"];
let index = 0;
function replace (){
    if(index > listOfImages.length-1){
        index = 0;
    }
    image.src = listOfImages[index];
    index++;
}
replace();
setInterval(replace,5000);