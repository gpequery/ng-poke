import {Pokemon} from "./Classes";

let greg: Pokemon = new Pokemon('Greg');

console.log(greg.name);
greg.name = 'Yo';
console.log(greg.name);