console.log("hello world");

const u = function Hello(id:number,name:string,lname:string):string{
    return `ID:${id} NAME: ${name} LASTNAME: ${lname}`;
}

console.log(u(123,"yash","mutatkar"));

class FavHotels{
    constructor(){
        console.log("\n1.Aswaad\n2.pancham\n3.anandam.\n4.Nana-Vade");
    }
    
    selectFavHotel(value:number){
        while(value!=6){
        switch(value){
            case 1: 
                console.log("Aswaad Hotel");
                break;
            case 2: 
                console.log("Panchan Hotel");
                break;
            case 3: 
                console.log("Anandam");
                break;
            case 4: 
                console.log("NanaWade");
                break;
            case 5: 
                console.log("exit");
                throw new Error("Exiting the sytem");
                
            default : 
                console.log("Aswaad Hotel");
                break;
        }
    }  
    } 
}


const p : FavHotels = new FavHotels();
p.selectFavHotel(1);
p.selectFavHotel(2);
p.selectFavHotel(3);
p.selectFavHotel(4);
p.selectFavHotel(5);