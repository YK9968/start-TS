// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

// export { };

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// export {};

// let arrString: string[];

// arrString = ["Text", 1];

// export {};

// let arrNumber: number[];

// arrNumber = [1, 5];

// =====================================

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: any) => {
  return 100 + a;
};

// ====================================
let person: [string, number];
person = ["Max", 21];

// ===================================
let mixedType: string | number;

mixedType = "string";
mixedType = 5;

type enableOrDisable = "enable" | "disable";
let choose: enableOrDisable;
choose = "enable";
choose = "disable";

// =======================================
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// ============================================

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day) => {};

// ===================================
