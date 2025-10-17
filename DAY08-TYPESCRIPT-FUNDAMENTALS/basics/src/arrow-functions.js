"use strict";
var Customer = {
    customerName: 'Alisha C.',
    city: 'Mumbai',
    getCustomerInfo: function () {
        var _this = this;
        setTimeout(function () {
            console.log("Customer name is ".concat(_this.customerName, ", and lives in ").concat(_this.city));
        }, 2000);
    }
};
var msg = function () { return console.log("welcome one liner"); };
msg();
var square = function (num) { return num * num; };
square(20);
//# sourceMappingURL=arrow-functions.js.map