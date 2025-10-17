const PizzaOrder = {
  orderId: 3893,
  orderDate: new Date(),
  pizza: "Veg Italiano",
  price: 450,
  status: "YashhhyPizzeriaaa has accepted your order!",
};

const PizzaInOven = {...PizzaOrder, status:"YashhhyPizzeriaaa is Preparing ya order for delivery;",}

const PizzaOutForDelivery = {...PizzaInOven,status: "YashhhyPizzeriaaa has Dispatched ",};

const PizzaDelivered = {...PizzaOutForDelivery,status: "YashhhyPizzeriaaa has been delivered",};

const Insaan= {
    ...PizzaDelivered,
};
console.log({...Insaan});

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaDelivered);

const Yash : (string|number|boolean)[] = ["45",60,true,"50",60,false];
console.log(...Yash);