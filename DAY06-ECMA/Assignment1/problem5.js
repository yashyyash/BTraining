var mobiles = ["Apple", "Motorola", "Samsung", "Nokia"];
var [mobile1, mobile2, mobile3, mobile4] = mobiles;

console.log(mobile1); 
console.log(mobile2); 
console.log(mobile3); 
console.log(mobile4); 


let [m1, ...allMobiles] = mobiles;
console.log(m1);

console.log(allMobiles);

// Object Destructuring

const Customer = {
    custId: 13,
    custName: "Aman",
    city: "Pune",
};

let {custId, custName, city} = Customer;
console.log(city);

let customerId, customerName, custCity;

({custId: customerId, custName: customerName, city: custCity}=Customer);
console.log(customerName);

// String destructuring

const [a, b, c, d, e] = "Hello";
console.log(b);