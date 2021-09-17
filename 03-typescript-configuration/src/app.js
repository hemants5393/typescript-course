"use strict";
/*
    Using Types
*/
(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = 5;
    var number2 = 15;
    var result = add(number1, number2);
    console.log("add() Result:", result);
})();
/*
    Working with numbers, string and booleans
*/
(function () {
    function add(n1, n2, showResult, resultPhrase) {
        var result = n1 + n2;
        if (showResult) {
            console.log(resultPhrase, result);
        }
        else {
            return result;
        }
    }
    var number1 = 15;
    var number2 = 5.9;
    var printResult = true;
    var resultPhrase = "Result is: ";
    add(number1, number2, printResult, resultPhrase);
})();
/*
    Object Types
*/
(function () {
    // Object with inferred type
    var person = {
        name: "Hemant Singh",
        age: 29,
    };
    console.log("Person object:", person);
    console.log("Person name:", person.name);
    // Object with explicit type
    var player = {
        name: "Virat Kohli",
        type: "Batter",
        age: 33,
    };
    console.log("Player object:", player);
    console.log("Player name:", player.name);
    // Nested object
    var product = {
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
    var sports;
    sports = ["Cricket", "Football", "Hockey"];
    console.log("Sports array:", sports);
    var person = {
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
    var person = ["Hemant Singh", 29];
    console.log("Person tuple:", person);
    var employee = {
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
    var Designation;
    (function (Designation) {
        Designation[Designation["TESTER"] = 0] = "TESTER";
        Designation[Designation["DEVOPS"] = 1] = "DEVOPS";
        Designation[Designation["DEVELOPER"] = 2] = "DEVELOPER";
    })(Designation || (Designation = {}));
    var employee = {
        name: "Hemant Singh",
        age: 29,
        designation: Designation.DEVELOPER,
    };
    console.log("Employee object designation enum:", employee);
    if (employee.designation === 2) {
        console.log(employee.name, " is a Developer.");
    }
    // Initialized enum
    var APIS;
    (function (APIS) {
        APIS["GET_POSTS"] = "version3/getPosts";
        APIS["POST_POST"] = "version3/postPost";
        APIS["DELETE_POST"] = "version3/deletePost";
    })(APIS || (APIS = {}));
    console.log("Get posts api:", APIS.GET_POSTS);
    // Enum with both number and string values
    var CRICKET;
    (function (CRICKET) {
        CRICKET[CRICKET["NO_PLAYERS"] = 11] = "NO_PLAYERS";
        CRICKET["TEAM"] = "India";
        CRICKET["CAPTAIN"] = "Virat Kohli";
        CRICKET[CRICKET["ICC_TROPHIES"] = 3] = "ICC_TROPHIES";
    })(CRICKET || (CRICKET = {}));
    console.log("Cricket enum:", CRICKET);
    console.log("Team", CRICKET.TEAM, "has", CRICKET.ICC_TROPHIES, "ICC trophies.");
})();
/*
    "any" Type
*/
(function () {
    var data;
    data = ["Cricket", 25];
    console.log("data of any type:", data);
})();
/*
    Union Types
*/
(function () {
    var data;
    data = "A string value.";
    console.log("data as union type of string and number:", data);
    data = 30;
    console.log("data as union type of string and number:", data);
})();
/*
    Literal Types
*/
(function () {
    // Simple string literal type
    var action;
    action = "come";
    console.log("simple string literal type:", action);
    var easing;
    easing = "ease-out";
    console.log("string literal type with custom type:", easing);
    // Simple number literal type
    var pointsScored;
    pointsScored = 5;
    console.log("simple number literal type:", action);
    var player = {
        name: "Harry Potter",
        health: 95,
        levels: 2,
    };
    easing = "ease-out";
    console.log("number literal type with interface:", player);
})();
/*
    Type Aliases/ Custom types
*/
(function () {
    var data = "A string value.";
    console.log("simple type alias example:", data);
    var user = {
        name: "Hemant Singh",
        age: 29,
    };
    console.log("type of an object:", user);
})();
/*
    Function return types and "void"
*/
(function () {
    // Function with return type as number
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = 5;
    var number2 = 15;
    var result = add(number1, number2);
    console.log("add() Result:", result);
    // Function with void return type
    function printMessage(message) {
        console.log("Message is: ", message);
    }
    var message = "Hello, how are you?";
    printMessage(message);
})();
/*
    Functions as Types
*/
(function () {
    // Function as Type
    function greaterThan(n1, n2) {
        return n1 > n2;
    }
    var number1 = 5;
    var number2 = 15;
    var greaterThanFun;
    greaterThanFun = greaterThan; // storing the function with the same signature
    console.log("greaterThanFun result:", greaterThanFun(number1, number2));
    // Function type with callback
    function addAndHandle(num1, num2, cb) {
        var result = num1 + num2;
        cb(result);
    }
    function printResult(result) {
        console.log("Result: ", result);
    }
    addAndHandle(10, 20, printResult);
})();
