let firstNumber="";
let operator;
let secondNumber="";

let output = document.getElementById("output");

let numPad= document.querySelectorAll("#numPad > .numbers > button");
numPad.forEach(num => {
     num.addEventListener("click", e =>{
        calculator(e.target);
     }
 )});

let oprPad= document.querySelectorAll("#oprPad > .numbers > button");
oprPad.forEach(o => {
     o.addEventListener("click", e =>{
        calculator(e.target);
     }
)});

function calculator(btn){
    if(btn.textContent=="."){
        btn.setAttribute("disabled","disabled");
        btn.classList.add("disabled");
        display(btn.textContent);
       }else if(btn.closest("#oprPad")){
        if(firstNumber==""){
            firstNumber=output.value;
            output.value="";
            operator=btn.textContent;
        }else if(operator!=""){
            secondNumber=output.value;
            output.value= operate(firstNumber,operator,secondNumber);
            firstNumber=output.value;
            operator=btn.textContent;
        }
       }else{
        display(btn.textContent);
    }
}

function display(number){
        output.value +=number;
 }
 
function operate(first,opr,second){
    let result="error"
    if(opr==="+"){
        result=add(parseFloat(first),parseFloat(second));
    }
    if(opr==="-"){
        result=subtract(parseFloat(first),parseFloat(second));
    }
    if(opr==="*"){
        result=multiply(parseFloat(first),parseFloat(second));
    }
    if(opr==="/"){
        result=devide(parseFloat(first),parseFloat(second));
    }
    return result;
}



function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function devide(a, b) {
    return a / b;
}
