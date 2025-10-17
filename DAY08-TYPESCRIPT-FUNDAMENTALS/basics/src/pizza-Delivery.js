"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PizzaOrder = {
    orderId: 3893,
    orderDate: new Date(),
    pizza: "Veg Italiano",
    price: 450,
    status: "YashhhyPizzeriaaa has accepted your order!",
};
var PizzaInOven = __assign(__assign({}, PizzaOrder), { status: "YashhhyPizzeriaaa is Preparing ya order for delivery;" });
var PizzaOutForDelivery = __assign(__assign({}, PizzaInOven), { status: "YashhhyPizzeriaaa has Dispatched " });
var PizzaDelivered = __assign(__assign({}, PizzaOutForDelivery), { status: "YashhhyPizzeriaaa has been delivered" });
var Insaan = __assign({}, PizzaDelivered);
console.log(__assign({}, Insaan));
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaDelivered);
var Yash = ["45", 60, true, "50", 60, false];
console.log.apply(console, Yash);
//# sourceMappingURL=pizza-Delivery.js.map