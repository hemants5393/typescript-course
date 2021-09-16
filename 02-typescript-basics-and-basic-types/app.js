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
        age: 29
    };
    console.log("Person object:", person);
    console.log("Person name:", person.name);
    // Object with explicit type
    var player = {
        name: "Virat Kohli",
        type: "Batter",
        age: 33
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
            description: "A great carpet - almost brand-new!"
        }
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
        hobbies: ["Sports", "Video Games"]
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
        designation: [2, "Developer"]
    };
    console.log("Employee object designation tuple:", employee);
})();
