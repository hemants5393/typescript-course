console.log("******************02 next gen js and ts******************");
/*
    "let" and "const"
*/
(function () {
  const num = 25;
  console.log("Variable declared with const cannot be changed:", num);

  if (true) {
    var x = 30;
    console.log("Variable declared with var available inside if block:", x);
  }
  // variable declared with "var" available outside the if block
  console.log("Variable declared with var available outside if block:", x);

  if (true) {
    let y = 50;
    console.log(
      "Variable declared with let available only inside this block:",
      y
    );
  }
  // variable declared with "let" available not available outside the if block
})();

/*
    Arrow functions
*/
(function () {
  // Example-1
  const add = (a: number, b: number): number => a + b;
  console.log("add result:", add(10, 20));

  // Example-2
  const calculate = (a: number, b: number): number => {
    const fixed = 100;
    let result: number;
    result = a + b;
    return result * fixed;
  };
  console.log("calculate result:", calculate(10, 20));

  // Example-3
  const printMessage = (msg: string): void => {
    console.log("Message is: ", msg);
  };
  printMessage("Hello world!");
})();

/*
    Default function parameters
*/
(function () {
  const add = (a: number, b: number = 5): number => a + b;
  console.log("add result with default function parameter:", add(10));
})();

/*
    Optional function parameters
*/
(function () {
  console.log("____________________");
  function printAddress(street: string, streetTwo?: string, state = "AZ") {
    console.log("1st param:", street);
    if (streetTwo) {
      console.log("2nd param:", streetTwo);
    }
    console.log("3rd param (default/passed):", state);
    console.log("____________________");
  }
  printAddress("123 Any St");
  printAddress("123 Any St", "Suite 540");
  printAddress("123 Any St", "Suite 540", "UT");
})();

/*
    The Spread operator
*/
(function () {
  // Example-1 (create or merge arrays or objects)
  const oldHobbies = ["Singing", "Sports"];
  const activeHobbies = ["Cooking", "Reading"];
  const allHobies = [...oldHobbies, ...activeHobbies];
  console.log("allHobies with spread operator:", allHobies);

  // Example-2 (create a copy of objects or arrays)
  const person = {
    name: "Hemant Singh",
    age: 29,
  };
  const copyPerson = { ...person };
  console.log("copyPerson object with spread operator:", copyPerson);
})();

/*
    Rest parameter
*/
(function () {
  const add = (...numbers: number[]): number => {
    let result = 0;
    for (let num of numbers) {
      result += num;
    }
    return result;
  };
  console.log("add result Rest parameter:", add(10, 20, 30));
})();
