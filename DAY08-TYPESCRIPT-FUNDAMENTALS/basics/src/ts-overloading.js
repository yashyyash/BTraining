"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShopProducts = [
    {
        productID: 1255,
        productName: 'Samsung Galaxy',
        companyName: 'samsung',
        unitPrice: 3400,
        availableQuantity: 45
    },
    {
        productID: 1255,
        productName: 'Apple 16',
        companyName: 'sapple',
        unitPrice: 3400,
        availableQuantity: 45
    },
    {
        productID: 1255,
        productName: 'Apple 17',
        companyName: 'apple',
        unitPrice: 3400,
        availableQuantity: 45
    },
    {
        productID: 1255,
        productName: 'Cherry 12',
        companyName: 'Cherry',
        unitPrice: 3400,
        availableQuantity: 45
    }
];
function searchProducts(value) {
    var availableProducts = __spreadArray([], ShopProducts, true);
    var Products = [];
    if (typeof (value) === 'string') {
        for (var _i = 0, availableProducts_1 = availableProducts; _i < availableProducts_1.length; _i++) {
            var product = availableProducts_1[_i];
            if (product.companyName === value)
                Products.push(product.productName);
        }
    }
    else {
        for (var _a = 0, availableProducts_2 = availableProducts; _a < availableProducts_2.length; _a++) {
            var product = availableProducts_2[_a];
            if (product.availableQuantity >= value) {
                Products.push(product.productName);
            }
        }
    }
    return Products;
}
console.log(searchProducts("Samsung"));
console.log(searchProducts(35));
//# sourceMappingURL=ts-overloading.js.map