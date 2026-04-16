const cars = ["Saab","Volvo","BMW"];

cars[0] = "Opel";

cars.push("Toyota");

cars.pop();

document.getElementById("array").innerHTML = cars;