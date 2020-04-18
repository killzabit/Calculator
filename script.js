




//these next three change the colors of the page and calculator.
function theme_1() {
    document.body.style.background = "black"
    document.getElementById("mainContainer").style.borderColor = "yellowgreen"
    document.getElementById("mainContainer").style.backgroundColor = "black"
    document.getElementById("upperContainer").style.borderColor = "white"
    document.getElementById("upperContainer").style.backgroundColor = "black"
    document.querySelectorAll(".Theme").forEach((el) => {el.style.color = "#fcb33d"})
    document.getElementById("result").style.borderColor = "white"
    document.getElementById("result").style.backgroundColor = "black"
    document.getElementById("result").style.color = "white"
    document.querySelectorAll(".operator").forEach((el) => {el.style.borderColor = "teal"})
    document.querySelectorAll(".operator").forEach((el) => {el.style.color = "red"})
    document.getElementById("buttonContainer").style.backgroundColor = "black"
    document.querySelectorAll(".numbers").forEach((el) => {el.style.color = "white"})
    document.querySelectorAll(".numbers").forEach((el) => {el.style.borderColor = "white"})
    document.querySelectorAll(".button").forEach((el) => {el.style.backgroundColor = "black"})
}

function theme_2() {
    document.body.style.background = "#E58C8A"
    document.getElementById("mainContainer").style.borderColor = "#7EE8FA"
    document.getElementById("mainContainer").style.backgroundColor = "#EEC0C6"
    document.getElementById("upperContainer").style.borderColor = "#7EE8FA"
    document.getElementById("upperContainer").style.backgroundColor = "#EEC0C6"
    document.querySelectorAll(".Theme").forEach((el) => {el.style.color = "black"})
    document.getElementById("result").style.borderColor = "#7EE8FA"
    document.getElementById("result").style.backgroundColor = "#EEC0C6"
    document.getElementById("result").style.color = "black"
    document.querySelectorAll(".operator").forEach((el) => {el.style.borderColor = "#7EE8FA"})
    document.querySelectorAll(".operator").forEach((el) => {el.style.color = "#FFF07C"})
    document.getElementById("buttonContainer").style.backgroundColor = "#EEC0C6"
    document.querySelectorAll(".numbers").forEach((el) => {el.style.color = "#A3FF78"})
    document.querySelectorAll(".numbers").forEach((el) => {el.style.borderColor = "#7EE8FA"})
    document.querySelectorAll(".button").forEach((el) => {el.style.backgroundColor ="#A36361"})
}

function theme_3() {
    document.body.style.background = "#EAD2AC"
    document.getElementById("mainContainer").style.borderColor = "#9CAFB7"
    document.getElementById("mainContainer").style.backgroundColor = "#E6B89C"
    document.getElementById("upperContainer").style.borderColor = "#ff8378"
    document.getElementById("upperContainer").style.backgroundColor = "#E6B89C"
    document.querySelectorAll(".Theme").forEach((el) => {el.style.color = "black"})
    document.getElementById("result").style.borderColor = "#ff8378"
    document.getElementById("result").style.backgroundColor = "#E6B89C"
    document.getElementById("result").style.color = "black"
    document.querySelectorAll(".operator").forEach((el) => {el.style.borderColor = "#ff8378"})
    document.querySelectorAll(".operator").forEach((el) => {el.style.color = "#73BDDD"})
    document.getElementById("buttonContainer").style.backgroundColor = "#E6B89C"
    document.querySelectorAll(".numbers").forEach((el) => {el.style.color = "#FFDEAA"})
    document.querySelectorAll(".numbers").forEach((el) => {el.style.borderColor = "#31627C"})
    document.querySelectorAll(".button").forEach((el) => {el.style.backgroundColor = "#31627C"})
}
let number = document.querySelectorAll(".numbers");

//display button value in text box
function addButtonValue(e) {
    let result = document.getElementById("result").innerHTML;
    result = (e.value)
    return result
    

}
//addButtonValue event Handler
const addButtonValueHandler = (e) => addButtonValue(e.target);
//used in the listener
function addButtonValueFunction () {
    number.forEach((number) => {number.addEventListener("click", addButtonValueHandler)}); 
}


//theme event listeners
document.getElementById("Theme 1").addEventListener("change", theme_1)
document.getElementById("Theme 2").addEventListener("change", theme_2)
document.getElementById("Theme 3").addEventListener("change", theme_3)
//registers numerical to textbox
document.querySelectorAll(".numbers").forEach((number) => {number.addEventListener("click", addButtonValueFunction)})
