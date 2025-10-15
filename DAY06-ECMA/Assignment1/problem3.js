    function addition(num1, num2){
        if(!num1) num1 = 0;
        if(arguments.length>=3){
            return num1 + num2 + arguments[2];
        }else{
            return num1+num2;
        }
    }
    addition(21,21,312);
    addition(21,21);


    function salesNetProfit(cogs,expense,actualSales,gstpercentage=0){
        let gst = (actualSales * gstpercentage)/100;
        return actualSales - (cogs + expense +gstpercentage);
    }

    console.log(

    )



    //Profit = Incoming - Outgoing
//Incoming - actual Sales Amount
//Out Going - cogs, expense, gst
//Default Parameters
function salesNetProfit(cogs, expense, actualSales, gstPercent = 0) {
  let gstAmount = (actualSales * gstPercent) / 100;
  return actualSales - (cogs + expense + gstAmount);
}

console.log(
  `Bajaj Products Sales Net Profit without GST is INR ${salesNetProfit(
    12000,
    13000,
    150000
  )}/-`
);

console.log(
  `Bajaj Products Sales Net Profit with 18% GST is INR ${salesNetProfit(
    12000,
    13000,
    150000,
    18
  )}/-`
);

// default at end can be escaped , and if in between default is given pass nan
// cant escape , default parameter befor the last 