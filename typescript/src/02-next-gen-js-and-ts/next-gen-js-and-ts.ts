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
