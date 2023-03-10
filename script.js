const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelector('.sign');
const equals = document.querySelectorAll('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = ""; 
let resultValue = 0;

for(let i= 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr)
        } 
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}

function getSecondValue(el){
    if(firstValue != "" && sign !="") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
         })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    } else if(sign === "-") {
          resultValue = firstValue - secondValue;
    } else if(sign === "x") {    
         resultValue = firstValue * secondValue;
    } else if(sign === "/") {
          resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    
}