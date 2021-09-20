console.log("******************03 classes and interfaces******************");
/*
    Creating a Class
*/
(function () {
  class Department {
    name: string;

    constructor(n: string) {
      this.name = n;
    }
  }
  const accounting = new Department("Accounting");
  console.log("accounting object created through class:", accounting);
})();

/*
    "methods" in Class
*/
(function () {
  class Department {
    name: string;

    constructor(n: string) {
      this.name = n;
    }

    describe() {
      console.log("Department is:", this.name);
    }
  }
  const accounting = new Department("Accounting");
  accounting.describe();
})();

/*
    Access modifiers
*/
(function () {
  // Example-1 (public)
  (function () {
    class Employee {
      public empCode: number;
      empName: string;
      constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
      }
      public printName(): void {
        console.log("Employee name:", this.empName);
      }
    }
    let employee = new Employee(123, "Hemant Singh");
    employee.printName();
  })();

  // Example-2 (private)
  (function () {
    class Employee {
      private empCode: number;
      empName: string;
      constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
      }
      public printName(): void {
        console.log("Employee name:", this.empName);
      }
      private doSomething() {
        const code = this.empCode;
        console.log("Employee code:", code);
      }
    }
    let employee = new Employee(123, "Hemant Singh");
    // employee.doSomething(); // It will give an error as doSomething() is private.
  })();

  // Example-3 (Protected)
  (function () {
    class Employee {
      private company = "ABC";
      public empName: string;
      protected empCode: number;
      constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
      }
    }

    class SalesEmployee extends Employee {
      private department: string;
      constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
      }
      public doSomething(): void {
        // const company = this.company; // Error (private cannot be accessed)
        const code = this.empCode; // protected can be accessed in extended class
      }
    }

    let empObj = new SalesEmployee("John Smith", 123, "Sales");
    console.log("empObj:", empObj);
    // empObj.empCode; // Error (protected cannot be accessed outside class)
  })();
})();

/*
    "readonly" properties
*/
(function () {
  class Employee {
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string) {
      this.empCode = code;
      this.empName = name;
    }
    public employeeInfo(): void {
      // this.empCode = 50; // Error (can't change readonly property)
      console.log("Employee code:", this.empCode);
      console.log("Employee name:", this.empName);
    }
  }
  let emp = new Employee(10, "John");
  // emp.empCode = 20; // Error (can't change readonly property)
  emp.empName = "Bill";
  emp.employeeInfo();
  console.log("Employee code outside class:", emp.empCode); // readonly accessible outside class
})();
