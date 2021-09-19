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
//# sourceMappingURL=next-gen-js-and-ts.js.map