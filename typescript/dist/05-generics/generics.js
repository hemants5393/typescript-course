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
(function () {
    function merge(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
    console.log("result:", result);
    console.log("result property:", result.name);
})();
(function () {
    function merge(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
    console.log("result:", result);
})();
(function () {
    function prop(obj, key) {
        return obj[key];
    }
    let str = prop({ name: "John Doe" }, "name");
    console.log("str:", str);
})();
//# sourceMappingURL=generics.js.map