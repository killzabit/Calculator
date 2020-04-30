



//chage these to class changes or something, it's ugly and takes up space this way   -in the future-
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
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.borderColor = "teal"})
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.color = "red"})
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
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.borderColor = "#7EE8FA"})
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.color = "#FFF07C"})
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
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.borderColor = "#ff8378"})
    document.querySelectorAll(".operator, #equals").forEach((el) => {el.style.color = "#73BDDD"})
    document.getElementById("buttonContainer").style.backgroundColor = "#E6B89C"
    document.querySelectorAll(".numbers").forEach((el) => {el.style.color = "#FFDEAA"})
    document.querySelectorAll(".numbers").forEach((el) => {el.style.borderColor = "#31627C"})
    document.querySelectorAll(".button").forEach((el) => {el.style.backgroundColor = "#31627C"})
}

let value1;
let operator;
let value2;
let value3;//this one is the value after = is pressed, it's the result.

//value and operator storage below, will run operation when needed. "btn" is the operator in this case.
//the counter at the bottom is used to help update the screen and the function that uses it is further down.
 function storeOperatorAndVal1(btn) {
    btn = btn.target
    if (value1 == undefined) {
        operator = btn.textContent;
        value1 = document.getElementById("result").textContent;

    } else if ((value1 != undefined) && (value2 != undefined)) {
        value2 = undefined
        operator = btn.textContent;

    } else {
        operation();
        operator = btn.textContent;
        value2 = undefined
    }
    counter = 0
}

//this function shrinks the font size when it reaches 13 char long.
function shrinkFontTextBox() {
    let result = document.getElementById("result").textContent
    if (result.length >= 13) {
        document.getElementById("result").style.fontSize = "160%";


    } else {
        document.getElementById("result").style.fontSize = "250%";
    }
}

//this function runs the operation/calculation, it also stores value2 if it is not already stored.
 function operation() {
     if ((value1 == undefined) && (operator == undefined)) {
        return
     }

    if ((value2 == undefined) && (value3 == undefined)) {
        value2 = document.getElementById("result").textContent
        value2 = Number(value2)
        value1 = Number(value1)
        document.getElementById("result").textContent = operations[operator](value1, value2)
        value3 = document.getElementById("result").textContent

    } else if ((value2 == undefined) && (value3 != undefined)) {
        value2 = document.getElementById("result").textContent
        value2 = Number(value2)
        value3 = Number(value3)
        document.getElementById("result").textContent = operations[operator](value3, value2)
        value3 = document.getElementById("result").textContent

    } else if (value3 != undefined) {
        value2 = Number(value2)
        value3 = Number(value3)
        document.getElementById("result").textContent = operations[operator](value3, value2)
        value3 = document.getElementById("result").textContent
    }
    shrinkFontTextBox()
}

//operation object/dictionary thing. Stores all of the operators that we'll need. Didn't create a new line here-
// after if and else statements because I wanted to make it look more compact.
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'X': (a, b) => a * b,
    '%': (a, b) => a % b,
    '/': (a, b) => {
        if ((a == 0) || (b == 0)){
            return "undefined"
        } else {
            return a / b;
        }}
}

//the counter is used for clearing the screen when you enter in a digit after you have just stored one.
let counter;
//display button value in text box and disable decimal and resize text if too many chars
function addButtonValue(btn) {
    btn = btn.target
    if ((value2 == undefined) && (counter == 0) || ((value2 == undefined && (operator != undefined) && (counter == 0)))) {
        document.getElementById("result").textContent = btn.textContent
        counter += 1

    } else {
        document.getElementById("result").textContent += btn.textContent;

    }

    if (document.getElementById("result").textContent.includes(".")) {
        document.getElementById("decimal").disabled = true;
        
    } else {
        document.getElementById("decimal").disabled = false;

    }
    shrinkFontTextBox()
}

//changes number to negative or positive
const posOrNeg = () => {
    let result = document.getElementById("result").textContent;

    if (result > 0) {
        document.getElementById("result").textContent = (-result)

    } else if (result < 0) {
        document.getElementById("result").textContent = Math.abs(result)

    }
}

//theme event listeners
document.getElementById("Theme 1").addEventListener("change", theme_1)
document.getElementById("Theme 2").addEventListener("change", theme_2)
document.getElementById("Theme 3").addEventListener("change", theme_3)

//registers button.textContent to textbox
document.querySelectorAll(".numbers").forEach((number) => {number.addEventListener("click", addButtonValue)})

//resets ever'thang
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("result").textContent = ""
    value1 = undefined
    value2 = undefined
    value3 = undefined
    operator = undefined
    counter = 0
    document.getElementById("result").textContent = "";
    document.getElementById("decimal").disabled = false;
})

//backspace event listener and function.  C-C-C-C-COMBO BREAKER!!!
document.getElementById("back").addEventListener("click", () => {
    let value = document.getElementById("result").textContent;
    valueArray = value.split("");
    valueArray.pop();
    valueStr = valueArray.join("");
    document.getElementById("result").textContent = valueStr;
})

//stores the first vaule and operator
document.querySelectorAll(".operator").forEach((btn) => {btn.addEventListener("click", storeOperatorAndVal1)})

//operates on that thang
document.getElementById("equals").addEventListener("click", operation)

//positive or negative btn listener
document.getElementById("posneg").addEventListener("click", posOrNeg)
