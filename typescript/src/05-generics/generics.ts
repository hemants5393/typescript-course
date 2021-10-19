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
