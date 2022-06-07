let add=document.getElementById("add");
let subtract=document.getElementById("subtract");

let num=document.getElementById("number");
let integer=0

add.addEventListener("click",function(){
    integer +=1;
    num.innerHTML=integer;
})

subtract.addEventListener("click",function(){
    integer -=1;
    num.innerHTML=integer;
})