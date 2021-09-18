"use strict";
(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    const number1 = 5;
    const number2 = 15;
    const result = add(number1, number2);
    console.log("add() Result:", result);
})();
(function () {
    function add(n1, n2, showResult, resultPhrase) {
        const result = n1 + n2;
        if (showResult) {
            console.log(resultPhrase, result);
            return;
        }
        else {
            return result;
        }
    }
    const number1 = 15;
    const number2 = 5.9;
    const printResult = true;
    const resultPhrase = "Result is: ";
    add(number1, number2, printResult, resultPhrase);
})();
(function () {
    const person = {
        name: "Hemant Singh",
        age: 29,
    };
    console.log("Person object:", person);
    console.log("Person name:", person.name);
    const player = {
        name: "Virat Kohli",
        type: "Batter",
        age: 33,
    };
    console.log("Player object:", player);
    console.log("Player name:", player.name);
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
(function () {
    let sports;
    sports = ["Cricket", "Football", "Hockey"];
    console.log("Sports array:", sports);
    const person = {
        name: "Hemant Singh",
        age: 29,
        hobbies: ["Sports", "Video Games"],
    };
    console.log("Person hobbies:", person.hobbies);
})();
(function () {
    let person = ["Hemant Singh", 29];
    console.log("Person tuple:", person);
    let employee = {
        name: "Hemant Singh",
        age: 29,
        designation: [2, "Developer"],
    };
    console.log("Employee object designation tuple:", employee);
})();
(function () {
    let Designation;
    (function (Designation) {
        Designation[Designation["TESTER"] = 0] = "TESTER";
        Designation[Designation["DEVOPS"] = 1] = "DEVOPS";
        Designation[Designation["DEVELOPER"] = 2] = "DEVELOPER";
    })(Designation || (Designation = {}));
    let employee = {
        name: "Hemant Singh",
        age: 29,
        designation: Designation.DEVELOPER,
    };
    console.log("Employee object designation enum:", employee);
    if (employee.designation === 2) {
        console.log(employee.name, " is a Developer.");
    }
    let APIS;
    (function (APIS) {
        APIS["GET_POSTS"] = "version3/getPosts";
        APIS["POST_POST"] = "version3/postPost";
        APIS["DELETE_POST"] = "version3/deletePost";
    })(APIS || (APIS = {}));
    console.log("Get posts api:", APIS.GET_POSTS);
    let CRICKET;
    (function (CRICKET) {
        CRICKET[CRICKET["NO_PLAYERS"] = 11] = "NO_PLAYERS";
        CRICKET["TEAM"] = "India";
        CRICKET["CAPTAIN"] = "Virat Kohli";
        CRICKET[CRICKET["ICC_TROPHIES"] = 3] = "ICC_TROPHIES";
    })(CRICKET || (CRICKET = {}));
    console.log("Cricket enum:", CRICKET);
    console.log("Team", CRICKET.TEAM, "has", CRICKET.ICC_TROPHIES, "ICC trophies.");
})();
(function () {
    let data;
    data = ["Cricket", 25];
    console.log("data of any type:", data);
})();
(function () {
    let data;
    data = "A string value.";
    console.log("data as union type of string and number:", data);
    data = 30;
    console.log("data as union type of string and number:", data);
})();
(function () {
    let action;
    action = "come";
    console.log("simple string literal type:", action);
    let easing;
    easing = "ease-out";
    console.log("string literal type with custom type:", easing);
    let pointsScored;
    pointsScored = 5;
    console.log("simple number literal type:", pointsScored);
    let player = {
        name: "Harry Potter",
        health: 95,
        levels: 2,
    };
    easing = "ease-out";
    console.log("number literal type with interface:", player);
})();
(function () {
    let data = "A string value.";
    console.log("simple type alias example:", data);
    let user = {
        name: "Hemant Singh",
        age: 29,
    };
    console.log("type of an object:", user);
})();
(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    const number1 = 5;
    const number2 = 15;
    const result = add(number1, number2);
    console.log("add() Result:", result);
    function printMessage(message) {
        console.log("Message is: ", message);
    }
    let message = "Hello, how are you?";
    printMessage(message);
})();
(function () {
    function greaterThan(n1, n2) {
        return n1 > n2;
    }
    const number1 = 5;
    const number2 = 15;
    let greaterThanFun;
    greaterThanFun = greaterThan;
    console.log("greaterThanFun result:", greaterThanFun(number1, number2));
    function addAndHandle(num1, num2, cb) {
        const result = num1 + num2;
        cb(result);
    }
    function printResult(result) {
        console.log("Result: ", result);
    }
    addAndHandle(10, 20, printResult);
})();
