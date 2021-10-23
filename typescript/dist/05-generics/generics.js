"use strict";
console.log("******************05 generics******************");
(function () {
    const ids = [];
    const myPromise = new Promise((resolve, reject) => {
        resolve("Hemant Singh");
    });
    myPromise.then((data) => {
        const names = data.split(" ");
        console.log("First name:", names[0]);
        console.log("Last name:", names[1]);
    });
})();
(function () {
    function merge(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
    console.log("result:", result);
    console.log("result property:", result.name);
})();
(function () {
    function merge(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
    console.log("result:", result);
})();
(function () {
    function prop(obj, key) {
        return obj[key];
    }
    let str = prop({ name: "John Doe" }, "name");
    console.log("str:", str);
})();
(function () {
    class DataStorage {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        removeItem(item) {
            const index = this.data.indexOf(item);
            if (index !== -1) {
                this.data.splice(index, 1);
            }
        }
        getItems() {
            return [...this.data];
        }
    }
    const textStorage = new DataStorage();
    textStorage.addItem("Max");
    textStorage.addItem("John");
    textStorage.addItem("Lucy");
    console.log("textStorage items:", textStorage.getItems());
    const numberStorage = new DataStorage();
    numberStorage.addItem(10);
    numberStorage.addItem(30);
    numberStorage.addItem(90);
    console.log("numberStorage items:", numberStorage.getItems());
})();
(function () {
    let month = {
        key: "Jan",
        value: 1,
    };
    console.log("month:", month);
    class List {
        constructor() {
            this.items = [];
        }
        add(o) {
            this.items.push(o);
        }
        remove(o) {
            let index = this.items.indexOf(o);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        }
        printList() {
            console.log("list:", this.items);
        }
    }
    let list = new List();
    for (let i = 0; i < 10; i++) {
        list.add(i);
    }
    list.printList();
})();
(function () {
    function createCourseGoal(title, description, date) {
        let courseGoal = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        return courseGoal;
    }
    const courseGoal = createCourseGoal("Angular 11", "Frontend", new Date());
    console.log("courseGoal:", courseGoal);
    const names = ["Ana", "Max"];
    const action = {
        walk: true,
    };
})();
//# sourceMappingURL=generics.js.map