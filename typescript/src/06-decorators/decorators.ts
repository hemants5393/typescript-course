console.log("******************06 decorators******************");
/*
    A first class decorator
*/
(function () {
  function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  }

  @Logger
  class Person {
    name = "Hemant";

    construtor() {
      console.log("Creating a new person object.");
    }
  }
})();

/*
    Working with decorator factories
*/
(function () {
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  @Logger("LOGGING - PERSON")
  class Person {
    name = "Hemant";

    construtor() {
      console.log("Creating a new person object.");
    }
  }
})();

/*
    Building more useful decorators
*/
(function () {
  function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
      const hookElement = document.getElementById(hookId);
      const person = new constructor();
      if (hookElement) {
        hookElement.innerHTML = template;
        const nameElement = document.createElement("h2");
        nameElement.innerHTML = person.name;
        hookElement.append(nameElement);
      }
    };
  }

  @WithTemplate("<h1>My Person Object </h1>", "app-decorators-1")
  class Person {
    name = "Hemant";

    construtor() {
      console.log("Creating a new person object.");
    }
  }
})();

/*
    Adding multiple decorators
*/
(function () {
  function Logger1() {
    console.log("Logger1 decorator created.");
    return function (constructor: Function) {
      console.log("Logger1 decorator executed.");
    };
  }

  function Logger2() {
    console.log("Logger2 decorator created.");
    return function (constructor: Function) {
      console.log("Logger2 decorator executed.");
    };
  }

  @Logger1()
  @Logger2()
  class Person {
    name = "Hemant";

    construtor() {
      console.log("Creating a new person object.");
    }
  }
})();
