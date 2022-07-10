// let num1 = document.getElementById("num1-el")
// let num2 = document.getElementById("num2-el")

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
console.log(num1);
console.log(num2);
sum=document.getElementById("sum-el")
// Create four functions: add(), subtract(), divide(), multiply()
function add(){
//  let num1 = document.getElementById("num1-el").innerText
//  let num2 = document.getElementById("num2-el").innerText
 add=num1+num2
 sum.textContent="Sum:"+add;
}
function subtract(){
 sub=num1-num2
 sum.textContent="Sum:"+sub;
}
function divide(){
 div=num1/num2
 sum.textContent="Sum:"+div;
}
function multiply(){
 mul=num1*num2
 sum.textContent="Sum:"+mul;
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"