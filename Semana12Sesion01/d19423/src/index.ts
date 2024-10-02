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


  function getTime(): number {
    return new Date().getTime();
  }

  function printHello(): void {
    console.log('Hello!');
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }


  function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

  let resultado = add2(2,4,3,4,5,6,7,8,9,9);

  let x: unknown = 'hello';
console.log((x as string).length);

let w: unknown = 'hello';
console.log((<string>w).length);

class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

  