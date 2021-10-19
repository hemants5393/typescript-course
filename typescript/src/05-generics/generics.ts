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
