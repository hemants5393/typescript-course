"use strict";
console.log("******************05 generics******************");
(function () {
    const ids = [];
    const myPromise = new Promise((resolve, reject) => {
        resolve("Hemant Singh");
    });
    myPromise.then((data) => {
        const names = data.split(" ");
        console.log("First name:", names[0]);
        console.log("Last name:", names[1]);
    });
})();
//# sourceMappingURL=generics.js.map