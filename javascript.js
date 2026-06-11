const sum= (a,b)=> a+b;
const subtract = (a,b)=> a-b;
const multiply = (a,b)=> a*b;
const devide = (a,b)=> a/b;
const power = (a,b)=> a**b;
const squart = (a)=> a**(1/2);
const operate = (operator,a,b)=>{
    if (operator === '/'){
        let result = devide(a,b);
        return result;
    }
    if(operator === '*'){
        let result = multiply(a,b);
        return result;
    }
    if (operator === '-'){
        let result = subtract(a,b);
        return result;
    }
    if(operator === '+'){
     let result = sum(a,b);
        return result;
    }
    if (operator  === 'power'){
        let result = power(a,b);
        return result;
    }
    if(operator === 'squart'){
        let result = squart(a);
        return result;
    }
}
let tempNum = [];
let start =0;
let lastOperate ='';

let input = document.querySelector('#input');
let memory = document.querySelector('.memory');
let operateButtons = document.querySelectorAll('#operate');
let paragraph = document.querySelector('.para');
for(let type of operateButtons){
    type.addEventListener('click',(event)=>{
        let result =0;
      if(type.firstChild.data !== '=' && type.firstChild.data !=='C') { 
        lastOperate = type.firstChild.data;
         if(type.firstChild.data === 'squart'){
            if(start ==0){tempNum[0] = operate('squart',+input.value,0);
            start++;
            paragraph.innerText = tempNum[0];
            input.value ='';
            input.focus();}
            else if (start ==1){
                tempNum[0] = operate('squart',tempNum[0],0);
                paragraph.innerText = tempNum[0];
                input.value ='';
                input.focus();
            }
         }
        else if (type.firstChild.data !== 'squart' && start ===1){
         result = operate(event.target.firstChild.data.toLowerCase(),+tempNum[0],+input.value);
           tempNum[0] = result;
           memory.innerText = tempNum[0];
           paragraph.innerText = '';
           input.value ='';
            input.focus();
           
        }else{
            console.log(type.firstChild.data);
        tempNum[start] = +input.value;
        memory.innerText = tempNum[0];
        input.value ='';
        input.focus();
        start++}
     }
     else if (type.firstChild.data === '='){
        result = operate(lastOperate.toLowerCase(),tempNum[0],+input.value);
        paragraph.innerText = result;
        memory.innerText = '';
        tempNum[0] = result;
        input.value ='';
        input.focus();
        }
    else if(type.firstChild.data === 'C'){
        input.value ='';
        start =0;
        tempNum[0] =0;
        paragraph.innerText ='';
        memory.innerText ='';
        input.focus();
    }
     
    })

}
let allNumbers = document.querySelectorAll('#number');
for(let number of allNumbers){
    number.addEventListener('click',(e)=>{
        input.value += number.firstChild.data;
    })
}
let dot= document.querySelector('#dot');
let numType = document.querySelector('#number-type');
numType.addEventListener('click',(e)=>{
    input.value = +input.value * -1;
});
dot.addEventListener('click',(e)=>{
    if(input.value.includes('.')){
        e.preventDefault();
        alert('The input has already dotted !');
    }
})
