// const a = {
//   name: "sara",
// };

// const b = {
//   sername: "Tiskova",
// };

// const fulname = Object.assign({}, a, b);
// console.log(fulname);

// const arr = ["lrop", "chopa", "sts"];

// let ans = "Sjoka Pocj";

// console.log(ans.split(""));
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((p, c) => p + c, initialValue);

// console.log(sumWithInitial);

// const arr = [1, 1, 2, 4, 4, 5, 5, 6];
// const newArr = new Set([...arr]);
// console.log(newArr);

// const a = 6.6785;
// const b = 8;
// const c = 10;
// const D = (a, b, c);
// const Apohcka = 18;

// const aPres = a.toPrecision(3);
// console.log(aPres);

// const ConcatARR = [1, 2, 3];
// const addArr = ConcatARR.concat(3, 4, 6);
// console.log(ConcatARR);

// function pupa(b, z, d) {
//   console.log(d); undefind
//   return b + z + d;
// }
// console.log(pupa(6, 99));

// const ConcatARR = new Array(1, 2, 3);
// console.log(typeof ConcatARR);

// ................................................

// const arr = [1, 1, 3, 4, 4, 2, 7, 5, 5, 6, 9, 10];
// const arr1 = [...new Set(arr)];
// arr1.sort((a, b) => a - b);
// console.log(arr1);

// const chosenNumber = 8;

// lowerNum = Math.max(...arr1.filter((number) => number < chosenNumber));
// higherNum = Math.min(...arr1.filter((number) => number > chosenNumber));

// if (chosenNumber - lowerNum === higherNum - chosenNumber) {
//   console.log(lowerNum, higherNum);
// } else if (chosenNumber - lowerNum > higherNum - chosenNumber) {
//   console.log(higherNum);
// } else console.log(lowerNum);

///////////////////// isFinite ///////////////////////////////////

// const a = isFinite(null);
// const b = Number.isFinite(null);

// console.log(Number.g);

////////////////////// NEW OPERATOR/////////////
const someFunc = function (a, b, v) {
  this.a = a;
  this.b = b;
  this.v = v;
};

const newFunc = new someFunc(4, 5, 6);

console.log(newFunc);
console.log(newFunc.v);
