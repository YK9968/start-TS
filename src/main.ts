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
const callback = (a: number): number => {
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

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return false;
  }
  return true;
};

// ===================================

type Address = {
  city: string;
  country: string;
};

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

// =========================================================
type Accounts = [string, ...string[]];
type Status = "open" | "close";
type Details = {
  createAt: Date;
  updateAt: Date;
};

type Pages = {
  title: string;
  likes: number;
  accounts: Accounts;
  status: Status;
  details?: Details;
};

const page1: Pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

// ==============================================================================
