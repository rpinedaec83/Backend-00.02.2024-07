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

