let carName ='Volvo';
document.getElementById("cars").innerHTML=carName + " was my first car.";

let x = True;
let y = False;
document.getElementById('TF').innerHTML= "x is " + x;

var isOn = true;
function switchOff() {
    if(isOn==true){
        alert("The light is on");
        isOn = false;
    }
    else {
        alert("The light is off");
        isOn = true;
    }
}