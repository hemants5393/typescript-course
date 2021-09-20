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
(function () {
    class Person {
        constructor(fName, lName) {
            this._age = 20;
            this.firstName = fName;
            this.lastName = lName;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value <= 0 || value >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = value;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    const person = new Person("Hemant", "Singh");
    console.log("person full name:", person.getFullName());
    console.log("person default age:", person.age);
    person.age = 29;
    console.log("person age after setter:", person.age);
})();
(function () {
    class Employee {
        constructor(firstName, lastName, jobTitle) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.jobTitle = jobTitle;
            Employee.headcount++;
        }
        static getHeadcount() {
            return Employee.headcount;
        }
    }
    Employee.headcount = 0;
    let john = new Employee("John", "Doe", "Front-end Developer");
    let jane = new Employee("Jane", "Doe", "Back-end Developer");
    let joanna = new Employee("Joanna", "Doe", "Tester");
    console.log("headcount:", Employee.getHeadcount());
})();
(function () {
    class Employee {
        constructor(firstName, lastName, jobTitle) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.jobTitle = jobTitle;
        }
        printEmployeeInfo() {
            console.log(`Name: ${this.firstName} ${this.lastName}, Job Title: ${this.jobTitle}`);
        }
    }
    let john = new Employee("John", "Doe", "Front-end Developer");
    john.printEmployeeInfo();
})();
//# sourceMappingURL=classes-and-interfaces.js.map