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
