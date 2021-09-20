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
(function () {
    class Employee {
        constructor(code, name) {
            this.empCode = code;
            this.empName = name;
        }
        employeeInfo() {
            console.log("Employee code:", this.empCode);
            console.log("Employee name:", this.empName);
        }
    }
    let emp = new Employee(10, "John");
    emp.empName = "Bill";
    emp.employeeInfo();
    console.log("Employee code outside class:", emp.empCode);
})();
(function () {
    class Report {
        constructor(name) {
            this.companyNamename = name;
        }
        printSomething() {
            console.log("Something in class Report.");
        }
    }
    class Invoice extends Report {
        constructor(name, total) {
            super(name);
            this.name = name;
            this.total = total;
        }
        getInvoice() {
            return this.name + ", " + this.total;
        }
        printSomething() {
            console.log("Something in class Invoice.");
        }
    }
    class BillOfLading extends Report {
        constructor(name, city, state) {
            super(name);
            this.name = name;
            this.city = city;
            this.state = state;
        }
        getBol() {
            return this.name + ", " + this.city + ", " + this.state;
        }
        printSomething() {
            super.printSomething();
        }
    }
    const invoice = new Invoice("Google", 200);
    console.log("invoice getInvoice::", invoice.getInvoice());
    console.log("invoice companyNamename::", invoice.companyNamename);
    invoice.printSomething();
    const bol = new BillOfLading("Microsoft", "Scottsdale", "AZ");
    console.log("bol printBol::", bol.getBol());
    console.log("bol companyNamename::", bol.companyNamename);
    bol.printSomething();
})();
//# sourceMappingURL=classes-and-interfaces.js.map