"use strict";
console.log("******************04 advanced types******************");
(function () {
    let ee = {
        name: "Hemant Singh",
        privileges: ["admin"],
        startDate: new Date(),
    };
    console.log("Elevated employee:", ee);
    let c = {
        name: "ABC Inc.",
        credit: 1000000,
        email: "sales@abcinc.com",
        phone: "(408)-897-5735",
    };
    console.log("Customer:", c);
})();
(function () {
    function add(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        if (typeof a === "string" && typeof b === "string") {
            return a.concat(b);
        }
        throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
    }
    console.log("typeof result:", add("Hemant", "Singh"));
    class Customer {
        constructor(n) {
            this.name = n;
        }
    }
    const c = new Customer("John Doe");
    console.log("instanceof:", c instanceof Customer);
    const obj = {
        value: 50,
        index: 1,
    };
    if ("value" in obj) {
        console.log("'value' is present in object 'obj'");
    }
})();
(function () {
    let bird;
    bird = {
        type: "water",
        swimming: true,
    };
    if (bird.type === "water") {
        console.log("It is a duck.");
    }
})();
(function () {
    let input1 = document.querySelector('input[type="text"]');
    let input2 = document.querySelector('input[type="text"]');
})();
(function () {
    function add(a, b) {
        return a + b;
    }
    console.log("add(5,5):", add(5, 5));
    console.log("add('John','Doe'):", add("John", "Doe"));
    console.log("add('5',5):", add("5", 5));
    console.log("add(5,'5'):", add(5, "5"));
    function sum(a, b, c) {
        if (c)
            return a + b + c;
        return a + b;
    }
    console.log("sum(5,10):", sum(5, 10));
    console.log("sum(5,10,15):", sum(5, 10, 15));
    class Logger {
        logName(fname, lname) {
            if (lname) {
                console.log("Full name:", fname, lname);
            }
            else {
                console.log("First name:", fname);
            }
        }
    }
    const logger = new Logger();
    logger.logName("Hemant");
    logger.logName("Hemant", "Singh");
})();
//# sourceMappingURL=advanced-types.js.map