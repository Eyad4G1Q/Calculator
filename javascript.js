const sum= (a,b)=> a+b;
const subtract = (a,b)=> a-b;
const multiply = (a,b)=> a*b;
const divide = (a,b)=> a/b;
const operate = (operator,a,b)=>{
    if (operator === '/'){
        return divide(a,b);
    }
    if(operator === '*'){
        return multiply(a,b);
    }
    if (operator === '-'){
        return subtract(a,b)
    }
    return sum(a,b);
}