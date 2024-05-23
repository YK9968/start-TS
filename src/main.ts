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

type enableOrDisable = "enable" | "disable";
let choose: enableOrDisable;

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
    return true;
  } else {
    return false;
  }
};

// ===================================

type Address = {
  city: string;
  country: string;
};

interface User1 {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: User1 = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User1 = {
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

// Завдання 1

// Виконуйте це завдання у файлі src/generics/1.ts.

// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з
// даними.Використовуйте Generics для типізації повернутих даних.

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// ==============================================================================

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<U, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// ===========================================================
function merge<T extends object, U extends object>(objA: T, objB: U): T | U {
  return Object.assign(objA, objB);
}

// =========================================================================

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  console.log(initialValues.email);
  console.log(initialValues.password);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// =========================================================================

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Role = Record<UserRole, string>;

const RoleDescription: Role = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// ================================================================================

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

// =================================================
