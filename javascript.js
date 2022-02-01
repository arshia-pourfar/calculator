let display = document.querySelector("#display");
let btnClear = document.querySelector("#btn-clear");
let btnClearLastAction = document.querySelector("#btn-clear-last-action");
let btnBackSpace = document.querySelector("#btn-back-space");
let btnDiv = document.querySelector("#btn-div");
let btnMul = document.querySelector("#btn-mul");
let btnMinus = document.querySelector("#btn-minus");
let btnPlus = document.querySelector("#btn-plus");
let btnPN = document.querySelector("#btn-pn");
let btnpint = document.querySelector("#btn-pint");
let btnEqulse = document.querySelector("#btn-equls");
let btnNumbers = document.querySelectorAll(".btn-number");

let setpoint = false;
let number1, number2;
let pmmd = false;
let result = false;
let equls;
let op = "";

btnClear.addEventListener("click", (e) => {
    display.textContent = "0.0";
    setpoint = false;
    number1, number2 = 0;
    pmmd = false;
    equls = 0;
    result = false;
    op = "";
});

btnClearLastAction.addEventListener("click", (e) => {
    display.textContent = "0.0";
});

btnNumbers.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (display.textContent == "0.0") {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    });
});

btnBackSpace.addEventListener("click", (e) => {
    let length = display.textContent.length;
    let lastdigit = display.textContent.substring(length - 1, length);
    if (lastdigit === ".") {
        setpoint = false;
    }
    if (display.textContent != "0.0" && length > 1) {
        display.textContent = display.textContent.substring(0, length - 1);
    } else {
        display.textContent = "0.0";
    }
});

btnPN.addEventListener("click", (e) => {
    display.textContent = display.textContent * -1;
});

btnpint.addEventListener("click", (e) => {
    if (setpoint == false) {
        display.textContent += ".";
        setpoint = true;
    }
});

btnPlus.addEventListener("click", (e) => {
    if (pmmd == false) {
        number1 = Number(display.textContent);
        display.textContent = "0.0";
        op = "+";
        pmmd = true;
    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 + number2;
        pmmd = false;
    }
});
btnMinus.addEventListener("click", (e) => {
    if (pmmd == false) {
        number1 = Number(display.textContent);
        display.textContent = "0.0";
        op = "-";
        pmmd = true;
    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 - number2;
        pmmd = false;
    }
});
btnMul.addEventListener("click", (e) => {
    if (pmmd == false) {
        number1 = Number(display.textContent);
        display.textContent = "0.0";
        op = "*";
        pmmd = true;
    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 * number2;
        pmmd = false;
    }
});
btnDiv.addEventListener("click", (e) => {
    if (pmmd == false) {
        number1 = Number(display.textContent);
        display.textContent = "0.0";
        op = "/";
        pmmd = true;
    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 / number2;
        pmmd = false;
    }
});

btnEqulse.addEventListener("click", (e) => {
    if (result == false) {
        number2 = Number(display.textContent);
        equls = number2;
        result = false;
        pmmd = true;
    }
    number2 = Number(display.textContent);
    if (pmmd == true) {
        switch (op) {
            case "+":
                equls = number1 + number2;
                break;
            case "-":
                equls = number1 - number2;
                break;
            case "*":
                equls = number1 * number2;
                break;
            case "/":
                equls = number1 / number2;
                break;
        }
        result = true;
        pmmd = false;
    } else {
        switch (op) {
            case "+":
                equls = equls + number2;
                break;
            case "-":
                equls = equls - number2;
                break;
            case "*":
                equls = equls * number2;
                break;
            case "/":
                equls = equls / number2;
                break;
        }
        result = true;
        pmmd = false;
    }
    display.textContent = equls;

});