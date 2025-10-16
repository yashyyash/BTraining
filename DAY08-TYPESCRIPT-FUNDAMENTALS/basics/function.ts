function  salesNetProfit(cogs:number, expense:number,actualsales:number,gstPercent:number) : number{
    const gst:number = actualsales*gstPercent/100;
    return actualsales - (cogs+expense+gst);
}




console.log(`Profit is ${salesNetProfit(100,56,600,5)}/`);