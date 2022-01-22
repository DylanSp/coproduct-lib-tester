import { Some as SomeA } from "./moduleA";
import { None as NoneB } from "./moduleB";
import { showOptionANum, showOptionBNum } from "./show";

const someA = SomeA(3);
const noneB = NoneB;

console.log(showOptionANum(someA));

console.log(showOptionBNum(noneB));
