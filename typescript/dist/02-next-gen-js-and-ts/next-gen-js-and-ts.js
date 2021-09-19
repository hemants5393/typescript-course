"use strict";
console.log("******************02 next gen js and ts******************");
(function () {
    const num = 25;
    console.log("Variable declared with const cannot be changed:", num);
    if (true) {
        var x = 30;
        console.log("Variable declared with var available inside if block:", x);
    }
    console.log("Variable declared with var available outside if block:", x);
    if (true) {
        let y = 50;
        console.log("Variable declared with let available only inside this block:", y);
    }
})();
(function () {
    const add = (a, b) => a + b;
    console.log("add result:", add(10, 20));
    const calculate = (a, b) => {
        const fixed = 100;
        let result;
        result = a + b;
        return result * fixed;
    };
    console.log("calculate result:", calculate(10, 20));
    const printMessage = (msg) => {
        console.log("Message is: ", msg);
    };
    printMessage("Hello world!");
})();
(function () {
    const add = (a, b = 5) => a + b;
    console.log("add result with default function parameter:", add(10));
})();
(function () {
    console.log("____________________");
    function printAddress(street, streetTwo, state = "AZ") {
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
(function () {
    const oldHobbies = ["Singing", "Sports"];
    const activeHobbies = ["Cooking", "Reading"];
    const allHobies = [...oldHobbies, ...activeHobbies];
    console.log("allHobies with spread operator:", allHobies);
    const person = {
        name: "Hemant Singh",
        age: 29,
    };
    const copyPerson = Object.assign({}, person);
    console.log("copyPerson object with spread operator:", copyPerson);
})();
(function () {
    const add = (...numbers) => {
        let result = 0;
        for (let num of numbers) {
            result += num;
        }
        return result;
    };
    console.log("add result Rest parameter:", add(10, 20, 30));
})();
(function () {
    const hobbies = ["Singing", "Sports", "Cooking", "Reading"];
    const [hobbie1, hobbie2, ...remainingHobbies] = hobbies;
    console.log("hobbie1:", hobbie1);
    console.log("hobbie2:", hobbie2);
    console.log("remainingHobbies:", remainingHobbies);
    const person = {
        name: "Hemant Singh",
        age: 29,
    };
    const { name, age } = person;
    console.log("name:", name);
    console.log("age:", age);
    const player = {
        name: "Virat Kohli",
        runs: 10000,
    };
    const { name: playerName, runs } = player;
    console.log("playerName:", playerName);
    console.log("runs:", runs);
})();
(function () {
    const employess = 50;
    console.log(`The company is having ${employess} number of employees.`);
})();
//# sourceMappingURL=next-gen-js-and-ts.js.map