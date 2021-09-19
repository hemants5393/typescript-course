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
//# sourceMappingURL=next-gen-js-and-ts.js.map