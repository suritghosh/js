let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num2-el").value
console.log(num1);
console.log(num2);
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sum = document.getElementById("sum-el")
function Add(){
 let num1 = parseInt(document.getElementById("num1-el").value)
 let num2 = parseInt(document.getElementById("num2-el").value)    
 add=num1+num2
 sum.textContent="Sum:"+add;
}
function subtract(){
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)    
 sub=num1-num2
 sum.textContent="Sum:"+sub;
}
function divide(){
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)    
 div=num1/num2
 sum.textContent="Sum:"+div;
}
function multiply(){
    let num1 = parseInt(document.getElementById("num1-el").value)
    let num2 = parseInt(document.getElementById("num2-el").value)    
 mul=num1*num2
 sum.textContent="Sum:"+mul;
}
