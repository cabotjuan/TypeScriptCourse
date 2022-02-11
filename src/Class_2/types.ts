//Tipos Primitivos

//Boolean
let on: boolean = true;
let off: boolean;
off = !on;

//Function
const isOn: Function = (): boolean => on;

function isOff(): boolean {
  return off;
}

console.log(isOn() ? "⚡" : "✖");

//Number

const CANT_BIN: number = 0b1010;
const CANT_OCT: number = 0o12;
const CANT_DEC: number = 10;
const CANT_HEX: number = 0xa;
console.log(CANT_BIN); //-> 10
console.log(CANT_OCT); //-> 10
console.log(CANT_DEC); //-> 10
console.log(CANT_HEX); //-> 10

//Any
let some: any = CANT_BIN;

//String w/Template Literals

let firstname: string = "Juan";
let birthdate: string = "27/12/1996";
let info = `${firstname} ${birthdate}`;

//Void

let empty: void;
const emptyFunc = (): void => {
  const funcScopedConst = "Random" + 1234;
};

//Never
const funcWithError = (err: string): never => {
  throw new Error(err);
};
const infiniteLoop = () => {
  while (true) {}
};

//Null
const nullFunc = () => null;

//undefined
const undefinedFunc = () => undefined;

//Optional Parameters

const funcWithOptParams = (param1?: any) => {};

//Array

const arr1: number[] = [1, 2, 3, 4, 5];

const arrMix: (string | number)[] = [1, "2", 3, "4", 5];

//Tuples
const arrStrict: [number, string, object] = [1, "2", { 3: "3" }];
