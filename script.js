let count = 0 ;
let value = document.getElementById("value") ;
let increase = document.getElementById("increase") ;
let reset = document.getElementById("reset") ; 
let decrease = document.getElementById("decrease") ;


increase.addEventListener("click", function(){
    count++ ;
    value.innerHTML= count ;
})
decrease.addEventListener("click", function(){
    count-- ;
    value.innerHTML= count ;
})
reset.addEventListener("click", function(){
    count = 0 ;
    value.innerHTML= count ;
})
