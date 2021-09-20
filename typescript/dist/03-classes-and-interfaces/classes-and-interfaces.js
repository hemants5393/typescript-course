"use strict";
console.log("******************03 classes and interfaces******************");
(function () {
    class Department {
        constructor(n) {
            this.name = n;
        }
    }
    const accounting = new Department("Accounting");
    console.log("accounting object created through class:", accounting);
})();
(function () {
    class Department {
        constructor(n) {
            this.name = n;
        }
        describe() {
            console.log("Department is:", this.name);
        }
    }
    const accounting = new Department("Accounting");
    accounting.describe();
})();
//# sourceMappingURL=classes-and-interfaces.js.map