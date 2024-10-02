"use strict";
let nombre = "Roberto";
let apellido = "Pineda";
let edad;
edad = 41;
edad = "cuarenta y uno";
let sexo;
sexo = true;
let y = undefined;
let z = null;
let hobbies = ["plamo", "aeromodelismo"];
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error
let ourTuple;
ourTuple = [2, false, "Hola"];
//ourTuple.push()
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let norte = CardinalDirections.North;
console.log(norte);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car2 = {
    year: carYear,
    type: carType,
    model: carModel
};
let tvDormitorio = {
    modelo: "5tyt",
    año: 2005,
    tamaño: 42
};
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
function add(a, b, c) {
    return a + b + (c || 0);
}
function pow(value, exponent = 10) {
    return value ** exponent;
}
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
let resultado = add2(2, 4, 3, 4, 5, 6, 7, 8, 9, 9);
let x = 'hello';
console.log(x.length);
let w = 'hello';
console.log(w.length);
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
