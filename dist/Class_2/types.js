"use strict";
//Tipos Primitivos
//Boolean
let on = true;
let off;
off = !on;
//Function
const isOn = () => on;
function isOff() {
    return off;
}
console.log(isOn() ? "⚡" : "✖");
//Number
const CANT_BIN = 0b1010;
const CANT_OCT = 0o12;
const CANT_DEC = 10;
const CANT_HEX = 0xa;
console.log(CANT_BIN); //-> 10
console.log(CANT_OCT); //-> 10
console.log(CANT_DEC); //-> 10
console.log(CANT_HEX); //-> 10
//Any
let some = CANT_BIN;
//String w/Template Literals
let firstname = "Juan";
let birthdate = "27/12/1996";
let info = `${firstname} ${birthdate}`;
//Void
let empty;
const emptyFunc = () => {
    const funcScopedConst = "Random" + 1234;
};
//Never
const funcWithError = (err) => {
    throw new Error(err);
};
const infiniteLoop = () => {
    while (true) { }
};
//Null
const nullFunc = () => null;
//undefined
const undefinedFunc = () => undefined;
//Optional Parameters
const funcWithOptParams = (param1) => { };
//Array
const arr1 = [1, 2, 3, 4, 5];
const arrMix = [1, "2", 3, "4", 5];
//Tuples
const arrStrict = [1, "2", { 3: "3" }];
