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
//# sourceMappingURL=advanced-types.js.map