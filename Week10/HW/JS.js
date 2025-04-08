//Task 1
alert("Hello World");
console.log("My first JavaScript assignment");
document.getElementById("output").textContent = "I just modified this element with JavaScript";

//Task 2
let Name = "Ariel";
let age = 21;
let FavNum = 7.23;
console.log(`My name is ${Name}, I am ${age} years old, and my favorite number is ${FavNum}.`);

//Task 3
function calculate(num1, num2) {
    console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
    if (num2 !== 0) {
      console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
    } else {
      console.log("Division: Cannot be divided by zero");
    }
  
    console.log('-------------------------');
  }
  calculate(10, 2);
  calculate(7, 0);
  calculate(3.5, 1.5);

//Task 4
function fahrenheitToCelsius(f) {
    const c = (f - 32) * 5/9;
    alert(`${f}°F is ${c.toFixed(2)}°C`)
}
function celsiusToFahrenheit(c) {
    const f = c * 9/5 + 32;
    alert(`${c}°C is ${f.toFixed(2)}°F`)
}

//Task 5
function stringManipulation(input) {
    let upper = input.toUpperCase();
    let length = input.length;
    alert(`Uppercase: ${upper} \nNumber of characters: ${length}`);
}
stringManipulation("idk");

//Task 6
let isLightOn = true;

function ToggleSwitch() {
    if (isLightOn == true){
        isLightOn == false;
        document.getElementById("LightStatus").textContent = "Light is OFF";
    } 
    else{
        isLightOn == true;
        document.getElementById("LightStatus").textContent = "Light is ON";
    }
}

//Task 7
function countByTwo(number){
    let result = "";

    for(let i = 0; i <= number; i += 2){
        result += i + "<br>";
    }
    document.getElementById("countbytwo").innerHTML = result;
}


