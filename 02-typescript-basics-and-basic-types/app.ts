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

/*
    Tuple Types
*/
(function () {
  let person: [string, number] = ["Hemant Singh", 29];
  console.log("Person tuple:", person);

  let employee: {
    name: string;
    age: number;
    designation: [number, string];
  } = {
    name: "Hemant Singh",
    age: 29,
    designation: [2, "Developer"],
  };
  console.log("Employee object designation tuple:", employee);
})();

/*
    Enum Types
*/
(function () {
  enum Designation {
    TESTER,
    DEVOPS,
    DEVELOPER,
  }

  let employee = {
    name: "Hemant Singh",
    age: 29,
    designation: Designation.DEVELOPER,
  };
  console.log("Employee object designation enum:", employee);
  if (employee.designation === 2) {
    console.log(employee.name, " is a Developer.");
  }

  // Initialized enum
  enum APIS {
    GET_POSTS = "version3/getPosts",
    POST_POST = "version3/postPost",
    DELETE_POST = "version3/deletePost",
  }
  console.log("Get posts api:", APIS.GET_POSTS);

  // Enum with both number and string values
  enum CRICKET {
    NO_PLAYERS = 11,
    TEAM = "India",
    CAPTAIN = "Virat Kohli",
    ICC_TROPHIES = 3,
  }
  console.log("Cricket enum:", CRICKET);
  console.log(
    "Team",
    CRICKET.TEAM,
    "has",
    CRICKET.ICC_TROPHIES,
    "ICC trophies."
  );
})();
