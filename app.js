var feet = document.getElementById("feet");
var inch = document.getElementById("inch");

feet.addEventListener("input" , function(){
    var f = this.value;
    var i = f*12;
    inch.value = i;
})

inch.addEventListener("input" , function(){
    var inchVal = this.value;
    var feetVal = inchVal/12;
 if(!Number.isInteger(feetVal)){
    feetVal = feetVal.toFixed(2);
 }
    feet.value = feetVal;
})