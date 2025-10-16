"use strict";
function salesNetProfit(cogs, expense, actualsales, gstPercent) {
    var gst = actualsales * gstPercent / 100;
    return actualsales - (cogs + expense + gst);
}
console.log("Profit is ".concat(salesNetProfit(100, 56, 600, 5), "/"));
//# sourceMappingURL=function.js.map