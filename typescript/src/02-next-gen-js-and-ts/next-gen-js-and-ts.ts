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

  // Example-1
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
