const Customer = {
    customerName : 'Alisha C.',
    city: 'Mumbai',
    getCustomerInfo:function(){
        setTimeout(()=>{
            console.log(`Customer name is ${this.customerName}, and lives in ${this.city}`);
        },2000)
    }
}


const msg = ()=> console.log("welcome one liner");
msg();


const square = (num:number):number => num * num;

square(20);