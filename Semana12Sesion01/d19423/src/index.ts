let nombre: string = "Roberto";

let apellido = "Pineda";

let edad: any;

edad = 41;
edad = "cuarenta y uno";

let sexo: unknown;
sexo = true;

let y: undefined = undefined;
let z: null = null;

let hobbies: readonly string[]= ["plamo", "aeromodelismo"]

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

let ourTuple: readonly [number, boolean, string];
ourTuple = [2,false,"Hola"];
//ourTuple.push()

const car: { type: string, model: string, year: number, kilometraje?: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };


  enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }

  let norte = CardinalDirections.North;
  console.log(norte);

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);



type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

interface TV {
    modelo: string,
    año: number,
    tamaño: number
}

let tvDormitorio: TV = {
    modelo: "5tyt",
    año: 2005,
    tamaño :42
}

interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };


  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');
