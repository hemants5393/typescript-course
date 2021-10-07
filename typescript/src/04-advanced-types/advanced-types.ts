console.log("******************04 advanced types******************");
/*
    Intersection Types
*/
(function () {
  type Admin = {
    name: string;
    privileges: string[];
  };
  type Employee = {
    name: string;
    startDate: Date;
  };
  type ElevatedEmployee = Admin & Employee;
  let ee: ElevatedEmployee = {
    name: "Hemant Singh",
    privileges: ["admin"],
    startDate: new Date(),
  };

  console.log("Elevated employee:", ee);

  interface BusinessPartner {
    name: string;
    credit: number;
  }
  interface Contact {
    email: string;
    phone: string;
  }
  type Customer = BusinessPartner & Contact;
  let c: Customer = {
    name: "ABC Inc.",
    credit: 1000000,
    email: "sales@abcinc.com",
    phone: "(408)-897-5735",
  };
  console.log("Customer:", c);
})();
