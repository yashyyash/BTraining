var customer = {
    customerId: 2738,
    contactName: "Alisha C",
    city: "Mumbai",
};

// customer Alisha C with customer id 2738 lives in mumbai
console.log(customer.customerId + "with customer id" + customer.customerId + "lives in" + customer.city);
console.log("CUstomer %s with customer id %d lives in %s", customer.contactName, customer.customerId, customer.city)

// const customer = {
//     customerId: 2738,
//     contactName: "Alisha C",
//     city: "Mumbai",
// };

// tempelate literals

console.log(`Customer ${customer.contactName} with customer id${customer.customerId}`);

var offices = ["banglore","pune","mumbai"];
offices.forEach(element => {
    console.log(element);
});