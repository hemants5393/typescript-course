/*
    Using Types
*/
(function () {
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  const number1 = 5;
  const number2 = 15;

  const result = add(number1, number2);
  console.log("add() Result:", result);
})();

/*
    Working with numbers, string and booleans
*/
(function () {
  function add(
    n1: number,
    n2: number,
    showResult: boolean,
    resultPhrase: string
  ) {
    const result = n1 + n2;
    if (showResult) {
      console.log(resultPhrase, result);
    } else {
      return result;
    }
  }

  const number1 = 15;
  const number2 = 5.9;
  const printResult = true;
  const resultPhrase = "Result is: ";
  add(number1, number2, printResult, resultPhrase);
})();
