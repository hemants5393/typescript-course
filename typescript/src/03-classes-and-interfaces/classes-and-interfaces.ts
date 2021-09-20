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

/*
    Inheritance and Overriding
*/
(function () {
  class Report {
    public companyNamename: string;
    constructor(name: string) {
      this.companyNamename = name;
    }

    protected printSomething(): void {
      console.log("Something in class Report.");
    }
  }

  class Invoice extends Report {
    constructor(public name: string, public total: number) {
      super(name);
    }
    public getInvoice(): any {
      return this.name + ", " + this.total;
    }
    public printSomething(): void {
      // Overriding "printSomething" method in base class
      console.log("Something in class Invoice.");
    }
  }

  class BillOfLading extends Report {
    constructor(
      public name: string,
      public city: string,
      public state: string
    ) {
      super(name);
    }
    public getBol(): any {
      return this.name + ", " + this.city + ", " + this.state;
    }
    public printSomething(): void {
      // Overriding "printSomething" method in base class but still calling it for use
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

/*
    Setters and Getters
*/
(function () {
  class Person {
    private _age = 20; // default value
    private firstName: string;
    private lastName: string;

    constructor(fName: string, lName: string) {
      this.firstName = fName;
      this.lastName = lName;
    }

    public get age() {
      return this._age;
    }

    public set age(value: number) {
      if (value <= 0 || value >= 200) {
        throw new Error("The age is invalid");
      }
      this._age = value;
    }

    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const person = new Person("Hemant", "Singh");
  console.log("person full name:", person.getFullName());
  console.log("person default age:", person.age);
  person.age = 29;
  console.log("person age after setter:", person.age);
})();

/*
    Static methods and properties
*/
(function () {
  class Employee {
    private static headcount: number = 0;
    private firstName: string;
    private lastName: string;
    private jobTitle: string;

    constructor(firstName: string, lastName: string, jobTitle: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      Employee.headcount++;
    }

    public static getHeadcount() {
      return Employee.headcount;
    }
  }

  let john = new Employee("John", "Doe", "Front-end Developer");
  let jane = new Employee("Jane", "Doe", "Back-end Developer");
  let joanna = new Employee("Joanna", "Doe", "Tester");

  console.log("headcount:", Employee.getHeadcount()); // 3
})();
