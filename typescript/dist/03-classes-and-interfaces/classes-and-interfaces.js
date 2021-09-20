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
(function () {
    (function () {
        class Employee {
            constructor(code, name) {
                this.empCode = code;
                this.empName = name;
            }
            printName() {
                console.log("Employee name:", this.empName);
            }
        }
        let employee = new Employee(123, "Hemant Singh");
        employee.printName();
    })();
    (function () {
        class Employee {
            constructor(code, name) {
                this.empCode = code;
                this.empName = name;
            }
            printName() {
                console.log("Employee name:", this.empName);
            }
            doSomething() {
                const code = this.empCode;
                console.log("Employee code:", code);
            }
        }
        let employee = new Employee(123, "Hemant Singh");
    })();
    (function () {
        class Employee {
            constructor(name, code) {
                this.company = "ABC";
                this.empName = name;
                this.empCode = code;
            }
        }
        class SalesEmployee extends Employee {
            constructor(name, code, department) {
                super(name, code);
                this.department = department;
            }
            doSomething() {
                const code = this.empCode;
            }
        }
        let empObj = new SalesEmployee("John Smith", 123, "Sales");
        console.log("empObj:", empObj);
    })();
})();
//# sourceMappingURL=classes-and-interfaces.js.map