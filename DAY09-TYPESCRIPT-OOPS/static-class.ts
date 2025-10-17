class Counter{
    static Count:number = 1;
    constructor(){
        console.log(`Counter class inheritance number is ${Counter.Count++}`)
    }
    static incrementCounter(){
        return Counter.Count++;
    }
}

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

