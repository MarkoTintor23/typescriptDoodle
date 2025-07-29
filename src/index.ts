export {};

let name: string = "marko";

let programmingLanguages: string[] = [];

programmingLanguages.push("php");

let result: string | number = 2;

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "toma",
  age: 31,
};

console.log(user);

function sayHello(message: string): void {
  console.log(message);
}

sayHello("toma");

function add(x: number, y: number): number {
  return x + y;
}

function addRide(location: string, length: number): string {
  return `started a ride from ${location} and it took ${length} km`;
}
console.log(add(5, 3), addRide("nemanjina", 4));

const userInfo: [string, number, boolean] = ["Toma", 55, true];
console.log(userInfo);

const locationCity: [number, number, string] = [
  40.7128,
  -74.9049,
  "new yourk city",
];

console.log(locationCity);

function addOrder(
  name: string,
  country: string,
  zip: number,
  product: string,
  pare: number,
  valuta: string
) {
  return {
    firstName: `${name}`,
    country: `${country}`,
    zipCode: `${zip}`,
    product: `${product}`,
    pare: `${pare}`,
    valuta: `${valuta}`,
  };
}

console.log(addOrder("Marko", "Beograd", 11000, "monitor", 200, "rsd"));

namespace Chat {
  export function send(message: string): void {
    console.log(`message was sent to chat ${message}`);
  }
}
Chat.send("test");

namespace BudgetTracker {
  export function addExpense(expense: string, amount: number): void {
    const expenses = getAllExpenses();

    expenses.push({ expense: expense, amount: amount });

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  export function getAllExpenses() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  }
}

BudgetTracker.addExpense("new PC", 1000);
BudgetTracker.addExpense("new mouse", 90);
