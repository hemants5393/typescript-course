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

/*
    Property decorators
*/
(function () {
  function Logger(target: any, propertyName: string | Symbol) {
    console.log("Logger target:", target);
    console.log("Logger propertyName:", propertyName);
  }

  class Person {
    @Logger
    name = "Hemant";

    construtor() {
      console.log("Creating a new person object.");
    }
  }
})();

/*
    Property, Accessor, Method and Parameter decorators
*/
(function () {
  function LoggerProperty(target: any, propertyName: string | Symbol) {
    console.log("LoggerProperty target:", target);
    console.log("LoggerProperty propertyName:", propertyName);
  }

  function LoggerAccessor(
    target: any,
    accessorName: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log("LoggerAccessor target:", target);
    console.log("LoggerAccessor accessorName:", accessorName);
    console.log("LoggerAccessor descriptor:", descriptor);
  }

  function LoggerMethod(
    target: any,
    methodName: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log("LoggerMethod target:", target);
    console.log("LoggerMethod methodName:", methodName);
    console.log("LoggerMethod descriptor:", descriptor);
  }

  function LoggerParamter(
    target: any,
    parameterName: string | Symbol,
    position: number
  ) {
    console.log("LoggerParamter target:", target);
    console.log("LoggerParamter parameterName:", parameterName);
    console.log("LoggerParamter position:", position);
  }

  class Person {
    @LoggerProperty
    name = "Hemant";

    private _age!: number;

    @LoggerAccessor
    set age(val: number) {
      if (val > 0) {
        this._age = val;
      } else {
        throw new Error("Not a valid age!");
      }
    }

    construtor(n: string, a: number) {
      this.name = n;
      this._age = a;
      console.log("Creating a new person object.");
    }

    @LoggerMethod
    printAge(
      @LoggerParamter message1: string,
      @LoggerParamter message2: string
    ) {
      console.log("Message1:", message1);
      console.log("Message2:", message2);
      console.log("Age of", this.name, "is:", this.age);
    }
  }
})();
