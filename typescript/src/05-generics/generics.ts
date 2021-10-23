console.log("******************05 generics******************");
/*
    Built in generics
*/
(function () {
  // Array
  const ids: Array<string> = [];

  // Promise
  const myPromise: Promise<string> = new Promise((resolve, reject) => {
    resolve("Hemant Singh");
  });
  myPromise.then((data) => {
    const names = data.split(" ");
    console.log("First name:", names[0]);
    console.log("Last name:", names[1]);
  });
})();

/*
    Creating a generic function
*/
(function () {
  function merge<U, V>(obj1: U, obj2: V) {
    return {
      ...obj1,
      ...obj2,
    };
  }
  let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
  console.log("result:", result);

  // Property can also be referred on result if use generic function
  console.log("result property:", result.name);
})();

/*
    Generic contraints
*/
(function () {
  // We will have to pass object only now but it can be of any structure
  function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
      ...obj1,
      ...obj2,
    };
  }
  let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
  console.log("result:", result);
})();

/*
    The "keyof" constraint
*/
(function () {
  function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  let str = prop({ name: "John Doe" }, "name");
  console.log("str:", str);
})();

/*
    Generic classes
*/
(function () {
  class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      const index = this.data.indexOf(item);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem("Max");
  textStorage.addItem("John");
  textStorage.addItem("Lucy");
  console.log("textStorage items:", textStorage.getItems());

  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(10);
  numberStorage.addItem(30);
  numberStorage.addItem(90);
  console.log("numberStorage items:", numberStorage.getItems());
})();

/*
    Generic interfaces
*/
(function () {
  // Generic interfaces that describe object properties
  interface Pair<K, V> {
    key: K;
    value: V;
  }
  let month: Pair<string, number> = {
    key: "Jan",
    value: 1,
  };
  console.log("month:", month);

  // Generic interfaces that describe methods
  interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
  }
  class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
      this.items.push(o);
    }
    remove(o: T): void {
      let index = this.items.indexOf(o);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
    printList(): void {
      console.log("list:", this.items);
    }
  }
  let list = new List<number>();

  for (let i = 0; i < 10; i++) {
    list.add(i);
  }
  list.printList();
})();

/*
    Generic Utility types
*/
(function () {
  // Partial generic type
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }
  function createCourseGoal(
    title: string,
    description: string,
    date: Date
  ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
  }
  const courseGoal = createCourseGoal("Angular 11", "Frontend", new Date());
  console.log("courseGoal:", courseGoal);

  // Readonly generic type
  const names: Readonly<string[]> = ["Ana", "Max"];
  // names.push("Tom"); // It will throw error

  const action: Readonly<object> = {
    walk: true,
  };
  // action.walk = false; // It will throw error
})();
