var userInput= document.querySelector("#user-input")
var h1Btn= document.querySelector("#h1-btn")
var h2Btn= document.querySelector("#h2-btn")
var h3Btn= document.querySelector("#h3-btn")

h1Btn.addEventListener("click", changeToh1)
h2Btn.addEventListener("click", changeToh2)
h3Btn.addEventListener("click", changeToh3)

function changeToh1(){
    userInput.style.display= "block"; 
    userInput.style.fontSize= "2em"; 
    userInput.style.marginTop ="0.67em"; 
    userInput.style.marginBottom= "0.67em"; 
    userInput.style.marginLeft= 0; 
    userInput.style.marginRight= 0; 
    userInput.style.fontWeight= bold;
}

function changeToh2(){
    userInput.style.fontSize="1.5em" 
    userInput.style.fontWeight= "bolder"
}
function changeToh3(){
    userInput.style.fontSize="1.17  em" 
    userInput.style.fontWeight= "bolder"
}