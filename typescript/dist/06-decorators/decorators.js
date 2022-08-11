"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
(function () {
    function LoggerProperty(target, propertyName) {
        console.log("LoggerProperty target:", target);
        console.log("LoggerProperty propertyName:", propertyName);
    }
    function LoggerAccessor(target, accessorName, descriptor) {
        console.log("LoggerAccessor target:", target);
        console.log("LoggerAccessor accessorName:", accessorName);
        console.log("LoggerAccessor descriptor:", descriptor);
    }
    function LoggerMethod(target, methodName, descriptor) {
        console.log("LoggerMethod target:", target);
        console.log("LoggerMethod methodName:", methodName);
        console.log("LoggerMethod descriptor:", descriptor);
    }
    function LoggerParamter(target, parameterName, position) {
        console.log("LoggerParamter target:", target);
        console.log("LoggerParamter parameterName:", parameterName);
        console.log("LoggerParamter position:", position);
    }
    class Person {
        constructor() {
            this.name = "Hemant";
        }
        set age(val) {
            if (val > 0) {
                this._age = val;
            }
            else {
                throw new Error("Not a valid age!");
            }
        }
        construtor(n, a) {
            this.name = n;
            this._age = a;
            console.log("Creating a new person object.");
        }
        printAge(message1, message2) {
            console.log("Message1:", message1);
            console.log("Message2:", message2);
            console.log("Age of", this.name, "is:", this.age);
        }
    }
    __decorate([
        LoggerProperty
    ], Person.prototype, "name", void 0);
    __decorate([
        LoggerAccessor
    ], Person.prototype, "age", null);
    __decorate([
        LoggerMethod,
        __param(0, LoggerParamter),
        __param(1, LoggerParamter)
    ], Person.prototype, "printAge", null);
})();
//# sourceMappingURL=decorators.js.map