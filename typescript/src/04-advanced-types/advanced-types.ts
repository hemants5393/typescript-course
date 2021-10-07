console.log("******************04 advanced types******************");
/*
    Intersection Types
*/
(function () {
  type Admin = {
    name: string;
    privileges: string[];
  };
  type Employee = {
    name: string;
    startDate: Date;
  };
  type ElevatedEmployee = Admin & Employee;
  let ee: ElevatedEmployee = {
    name: "Hemant Singh",
    privileges: ["admin"],
    startDate: new Date(),
  };

  console.log("Elevated employee:", ee);

  interface BusinessPartner {
    name: string;
    credit: number;
  }
  interface Contact {
    email: string;
    phone: string;
  }
  type Customer = BusinessPartner & Contact;
  let c: Customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  };
  console.log("Customer:", c);
})();

/*
    Type Guards
*/
(function () {
  // typeof
  type alphanumeric = string | number;
  function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }

    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }

    throw new Error(
      "Invalid arguments. Both arguments must be either numbers or strings."
    );
  }
  console.log("typeof result:", add("Hemant", "Singh"));

  // instanceof
  class Customer {
    name: string;
    constructor(n: string) {
      this.name = n;
    }
  }
  const c: Customer = new Customer("John Doe");
  console.log("instanceof:", c instanceof Customer);

  // in
  const obj = {
    value: 50,
    index: 1,
  };
  if ("value" in obj) {
    console.log("'value' is present in object 'obj'");
  }
})();

/*
    Discriminated Unions
*/
(function () {
  interface Duck {
    type: "water";
    swimming: boolean;
  }
  interface Parrot {
    type: "air";
    fly: boolean;
  }
  let bird: Duck | Parrot;
  bird = {
    type: "water",
    swimming: true,
  };
  if (bird.type === "water") {
    console.log("It is a duck.");
  }
})();

/*
    Type Casting
*/
(function () {
  // Method-1: Using "as"
  let input1 = document.querySelector('input[type="text"]') as HTMLInputElement;

  // Method-2: Using "<>" operator
  let input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
})();

/*
    Function Overloads
*/
(function () {
  // Method-1: Using different argument types and return type
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }
  console.log("add(5,5):", add(5, 5));
  console.log("add('John','Doe'):", add("John", "Doe"));
  console.log("add('5',5):", add("5", 5));
  console.log("add(5,'5'):", add(5, "5"));

  // Method-2: Using different number of arguments
  function sum(a: number, b: number): number;
  function sum(a: number, b: number, c: number): number;
  function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
  }
  console.log("sum(5,10):", sum(5, 10));
  console.log("sum(5,10,15):", sum(5, 10, 15));

  // Method-3: Using method overloading
  class Logger {
    public logName(fname: string): void;
    public logName(fname: string, lname: string): void;
    public logName(fname: string, lname?: string): void {
      if(lname) {
        console.log("Full name:", fname, lname);
      } else {
        console.log("First name:", fname);
      }
    }
  }
  const logger = new Logger();
  logger.logName("Hemant");
  logger.logName("Hemant", "Singh");
})();
