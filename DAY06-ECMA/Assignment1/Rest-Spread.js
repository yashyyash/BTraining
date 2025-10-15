// function travelCities(country, ...cities) {
//   console.log(`In country ${country} - You will travel to - `);
//   for (const city of cities) {
//     console.log(`City - ${city}!`);
//   }
// }
// travelCities("India", "Bangalore", "Chennai");
// travelCities("India", "Bangalore", "Chennai", "Hyderabad");

// //Spread operator - It unpacks the collection values [Array, String, Object]
// travelCities("India", ...BajajOffices);

const PizzaOrder = {
  orderId: 3893,
  orderDate: new Date(),
  pizza: "Veg Italiano",
  price: 450,
  status: "PizzaHut has accepted your order!",
};
const PizzaInOven={
    ...PizzaOrder,
    status:"Your Pizza is getting baked!"
}
const PizzaOutForDelivery={
    ...PizzaInOven,
    status:"Your Pizza is out for delivery!"
}
const PizzaDeliverd={
    ...PizzaOutForDelivery,
    status:"Pizza Delivered at home"
}

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaDeliverd);