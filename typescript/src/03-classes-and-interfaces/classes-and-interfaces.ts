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
