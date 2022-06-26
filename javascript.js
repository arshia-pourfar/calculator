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
let btnEqulse = document.querySelector("#btn-equals");
let btnNumbers = document.querySelectorAll(".btn-number");

let chechkBtnEquals = false;
let displaylenght = false;
let pmmd = false;
let setpoint = false;
let checkingPlusFor = 0,
    checkingPlus = false,
    equlsPlus = 0,
    pmmdPlus = false,
    plus = false;
let checkingMinusFor = 0,
    checkingMinus = false,
    equlsMinus = 0,
    pmmdMinus = false,
    minus = false;
let checkingMulFor = 0,
    checkingMul = false,
    equlsMul = 0,
    pmmdMul = false,
    mul = false;
let checkingDivFor = 0,
    checkingDiv = false,
    equlsDiv = 0,
    pmmdDiv = false,
    div = false;
let number1 = 0,
    number2 = 0;
let equls;
let op = "";
btnClear.addEventListener("click", (e) => {
    display.textContent = "0.0";
    chechkBtnEquals = false;
    setpoint = false;
    checkingPlusFor = 0,
        checkingPlus = false,
        equlsPlus = 0,
        pmmdPlus = false,
        plus = false;
    checkingMinusFor = 0,
        checkingMinus = false,
        equlsMinus = 0,
        pmmdMinus = false,
        minus = false;
    checkingMulFor = 0,
        checkingMul = false,
        equlsMul = 0,
        pmmdMul = false,
        mul = false;
    checkingDivFor = 0,
        checkingDiv = false,
        equlsDiv = 0,
        pmmdDiv = false,
        div = false;
    number1 = 0, number2 = 0;
    equls;
    op = "";
})
btnClearLastAction.addEventListener("click", (e) => {
    display.textContent = "0";
    if (setpoint == true) {
        setpoint = false;
        number2 = "";
    }
})
btnBackSpace.addEventListener("click", (e) => {
    var length = display.textContent.length;
    var lastnumber = display.textContent.substring(length - 1);
    if (lastnumber === ".") {
        setpoint = false;
    }
    if (length == 1) {
        display.textContent = "0";
    }
    if (length != "0.0" && length > 1) {
        display.textContent = display.textContent.substring(0, length - 1);
    }
})

btnNumbers.forEach(element => {
    element.addEventListener("click", (e) => {
        if (display.textContent.length == 27) {
            displaylenght = true;
        } else {
            displaylenght = false;
        }
        if (displaylenght == false) {
            if (checkingPlus == false ||
                checkingDiv == false ||
                checkingMul == false ||
                checkingMinus == false) {
                if (display.textContent == "0.0" || display.textContent == "0") {
                    display.textContent = e.target.textContent;
                } else {
                    display.textContent += e.target.textContent;
                }
            }
            if (checkingPlus == true) {
                number1 = number1 + number2;
                if (checkingPlusFor == 0) {
                    display.textContent = e.target.textContent;
                    checkingPlus = false;
                } else {
                    display.textContent += e.target.textContent;
                    checkingPlus = false;
                }
            } else if (checkingMinus == true) {
                number1 = number1 - number2;
                if (checkingMinusFor == 0) {
                    display.textContent = e.target.textContent;
                    checkingMinus = false;
                } else {
                    display.textContent += e.target.textContent;
                    checkingMinus = false;
                }

            } else if (checkingMul == true) {
                number1 = number1 * number2;
                if (checkingMulFor == 0) {
                    display.textContent = e.target.textContent;
                    checkingMul = false;
                } else {
                    display.textContent += e.target.textContent;
                    checkingMul = false;
                }

            } else if (checkingDiv == true) {
                number1 = number1 / number2;
                if (checkingDivFor == 0) {
                    display.textContent = e.target.textContent;
                    checkingDiv = false;
                } else {
                    display.textContent += e.target.textContent;
                    checkingDiv = false;
                }

            }
        }
    })
});
btnPN.addEventListener("click", (e) => {
    var lastdigit = display.textContent.substring(length - 1);
    if (display.textContent != "0.0" || display.textContent != "0") {
        display.textContent = display.textContent * -1;
        setpoint = false;
    }
    if (lastdigit == "-") {
        display.textContent = "0";
        setpoint = false;

    }
})
btnpint.addEventListener("click", (e) => {
    if (display.textContent == "0.0" || display.textContent == "0." || display.textContent == "0") {
        display.textContent = "0.";
        setpoint = true;
    }
    if (setpoint == false) {
        display.textContent += ".";
        setpoint = true;
    }
})
btnDiv.addEventListener("click", (e) => {
    switch (op) {
        case "-":
            clickEquals();
            break;
        case "*":
            clickEquals();
            break;
        case "+":
            clickEquals();
            break;
    }
    if (pmmdDiv == true) {
        number1 = equlsDiv;
        div = true;
    }
    if (div == false) {
        number1 = Number(display.textContent);
        display.textContent = "0";
        op = "/";
        chechkBtnEquals = false;
        div = true;

    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 / number2;
        equlsDiv = number1 / number2;
        div = false;
        checkingDiv = true;
        checkingDivFor = 0;
        pmmdDiv = true;
    }
})
btnMul.addEventListener("click", (e) => {
    switch (op) {
        case "-":
            clickEquals();
            break;
        case "+":
            clickEquals();
            break;
        case "/":
            clickEquals();
            break;
    }
    if (pmmdMul == true) {
        number1 = equlsMul;
        mul = true;
    }
    if (mul == false) {
        number1 = Number(display.textContent);
        display.textContent = "0";
        op = "*";
        chechkBtnEquals = false;
        mul = true;

    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 * number2;
        equlsMul = number1 * number2;
        mul = false;
        checkingMul = true;
        checkingMulFor = 0;
        pmmdMul = true;
    }
})
btnMinus.addEventListener("click", (e) => {
    switch (op) {
        case "+":
            clickEquals();
            break;
        case "*":
            clickEquals();
            break;
        case "/":
            clickEquals();
            break;
    }
    if (pmmdMinus == true) {
        number1 = equlsMinus;
        minus = true;

    }
    if (minus == false) {
        number1 = Number(display.textContent);
        display.textContent = "0";
        op = "-";
        chechkBtnEquals = false;
        minus = true;

    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 - number2;
        equlsMinus = number1 - number2;
        minus = false;
        checkingMinus = true;
        checkingMinusFor = 0;
        pmmdMinus = true;
    }
})
btnPlus.addEventListener("click", (e) => {
    switch (op) {
        case "-":
            clickEquals();
            break;
        case "*":
            clickEquals();
            break;
        case "/":
            clickEquals();
            break;
    }
    if (pmmdPlus == true) {
        number1 = equlsPlus;
        plus = true;
    }
    if (plus == false) {
        number1 = Number(display.textContent);
        display.textContent = "0";
        op = "+";
        chechkBtnEquals = false;
        plus = true;
    } else {
        number2 = Number(display.textContent);
        display.textContent = number1 + number2;
        equlsPlus = number1 + number2;
        plus = false;
        checkingPlus = true;
        checkingPlusFor = 0;
        pmmdPlus = true;
    }
})
btnEqulse.addEventListener("click", (e) => {
    if (pmmd == false) {
        clickEquals();
    } else {
        clickEquals();
    }
})


function clickEquals() {
    if (chechkBtnEquals == false) {
        switch (op) {
            case "":
                equls = 0;
                break;
            case "/":
                number2 = Number(display.textContent);
                equls = number1 / number2;
                number1 = number2;
                break;
            case "*":
                number2 = Number(display.textContent);
                equls = number1 * number2;
                number1 = number2;
                break;
            case "+":
                number2 = Number(display.textContent);
                equls = number1 + number2;
                number1 = number2;
                break;
            case "-":
                number2 = Number(display.textContent);
                equls = number1 - number2;
                break;
        }
        chechkBtnEquals = true;
    } else {
        switch (op) {
            case "/":
                number2 = Number(display.textContent);
                equls = number1 / number2;
                number2 = number1;
                break;
            case "*":
                number2 = Number(display.textContent);
                equls = number1 * number2;
                number1 = number2;
                break;
            case "+":
                number2 = Number(display.textContent);
                equls = number1 + number2;
                number2 = number1;
                break;
            case "-":
                number2 = Number(display.textContent);
                equls = number1 - number2;
                break;
        }
    }
    display.textContent = equls;
    checkingPlusFor = 0,
        checkingPlus = false,
        equlsPlus = 0,
        pmmdPlus = false,
        plus = false;
    checkingMinusFor = 0,
        checkingMinus = false,
        equlsMinus = 0,
        pmmdMinus = false,
        minus = false;
    checkingMulFor = 0,
        checkingMul = false,
        equlsMul = 0,
        pmmdMul = false,
        mul = false;
    checkingDivFor = 0,
        checkingDiv = false,
        equlsDiv = 0,
        pmmdDiv = false,
        div = false;
    op = "";
}
