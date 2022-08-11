"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("******************06 decorators******************");
(function () {
    function Logger(constructor) {
        console.log("Logging...");
        console.log(constructor);
    }
    let Person = class Person {
        constructor() {
            this.name = "Hemant";
        }
        construtor() {
            console.log("Creating a new person object.");
        }
    };
    Person = __decorate([
        Logger
    ], Person);
})();
(function () {
    function Logger(logString) {
        return function (constructor) {
            console.log(logString);
            console.log(constructor);
        };
    }
    let Person = class Person {
        constructor() {
            this.name = "Hemant";
        }
        construtor() {
            console.log("Creating a new person object.");
        }
    };
    Person = __decorate([
        Logger("LOGGING - PERSON")
    ], Person);
})();
(function () {
    function WithTemplate(template, hookId) {
        return function (constructor) {
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
    let Person = class Person {
        constructor() {
            this.name = "Hemant";
        }
        construtor() {
            console.log("Creating a new person object.");
        }
    };
    Person = __decorate([
        WithTemplate("<h1>My Person Object </h1>", "app-decorators-1")
    ], Person);
})();
(function () {
    function Logger1() {
        console.log("Logger1 decorator created.");
        return function (constructor) {
            console.log("Logger1 decorator executed.");
        };
    }
    function Logger2() {
        console.log("Logger2 decorator created.");
        return function (constructor) {
            console.log("Logger2 decorator executed.");
        };
    }
    let Person = class Person {
        constructor() {
            this.name = "Hemant";
        }
        construtor() {
            console.log("Creating a new person object.");
        }
    };
    Person = __decorate([
        Logger1(),
        Logger2()
    ], Person);
})();
(function () {
    function Logger(target, propertyName) {
        console.log("Logger target:", target);
        console.log("Logger propertyName:", propertyName);
    }
    class Person {
        constructor() {
            this.name = "Hemant";
        }
        construtor() {
            console.log("Creating a new person object.");
        }
    }
    __decorate([
        Logger
    ], Person.prototype, "name", void 0);
})();
//# sourceMappingURL=decorators.js.map