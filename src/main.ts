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
const callback = (a: number) => {
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

// Завдання 5

// Виконуйте це завдання у файлі src/basic/5.ts.

// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає
// boolean значення, що вказує, чи це день робочий чи вихідний.

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
// Завдання 6

// Виконуйте це завдання у файлі src/basic/6.ts.

// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості.
// Зверніть увагу, що адреса є необов'язковою властивістю.

const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

// =========================================================

// Завдання 7

// Виконуйте це завдання у файлі src/basic/7.ts.

// У вас є два об'єкти:

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

// Створіть новий тип даних, який підходить для цих двох об'єктів.

// ==============================================================================
