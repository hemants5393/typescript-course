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

/*
    Object Types
*/
(function () {
  // Object with inferred type
  const person = {
    name: "Hemant Singh",
    age: 29,
  };
  console.log("Person object:", person);
  console.log("Person name:", person.name);

  // Object with explicit type
  const player: {
    name: string;
    type: string;
    age: number;
  } = {
    name: "Virat Kohli",
    type: "Batter",
    age: 33,
  };
  console.log("Player object:", player);
  console.log("Player name:", player.name);

  // Nested object
  const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
      title: "Red Carpet",
      description: "A great carpet - almost brand-new!",
    },
  };
  console.log("Product nested object:", product);
})();

/*
    Array Types
*/
(function () {
  let sports: string[];
  sports = ["Cricket", "Football", "Hockey"];
  console.log("Sports array:", sports);

  const person = {
    name: "Hemant Singh",
    age: 29,
    hobbies: ["Sports", "Video Games"],
  };
  console.log("Person hobbies:", person.hobbies);
})();
