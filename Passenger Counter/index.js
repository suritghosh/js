let inc = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
console.log(saveEl);
console.log(inc);
function increment(){
    inc.innerText++;
}
function save(){
    saveEl.innerText += inc.innerText+"-";
    inc.innerText=0;
}