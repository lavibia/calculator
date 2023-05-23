let firstNumber=0;
let operator;
let secondNumber=0;




function operate(first,opr,second){
    let result="error"
    if(opr==="+"){
        result=add(a,b);
    }
    if(opr==="-"){
        result=subtract(a,b);
    }
    if(opr==="*"){
        result=multiply(a,b);
    }
    if(opr==="/"){
        result=devide(a,b);
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
