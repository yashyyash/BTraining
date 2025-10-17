"use strict";
var Counter = /** @class */ (function () {
    function Counter() {
        console.log("Counter class inheritance number is ".concat(Counter.Count++));
    }
    Counter.incrementCounter = function () {
        return Counter.Count++;
    };
    Counter.Count = 1;
    return Counter;
}());
new Counter();
new Counter();
new Counter();
new Counter();
new Counter();
Counter.incrementCounter();
Counter.incrementCounter();
Counter.incrementCounter();
Counter.incrementCounter();
Counter.incrementCounter();
//# sourceMappingURL=static-class.js.map