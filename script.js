let num = document.getElementById("num");
let btn_decrese = document.getElementById("btn_decrese");
let btn_reset = document.getElementById("btn_reset");
let btn_increse = document.getElementById("btn_increse");
let count = 0;

function countIncrese() {
    count++;
    num.innerHTML = count;
    if(count > 0){
        num.style.color = "green";
    }
    
}
function countReset(){
    count = 0;
    num.innerHTML = count
    num.style.color = "black";
}
function countDecrese() {
    count--;
    num.innerHTML = count;
    if(count < 0){
        num.style.color = "red";
    }

}
