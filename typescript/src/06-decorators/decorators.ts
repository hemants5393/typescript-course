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
