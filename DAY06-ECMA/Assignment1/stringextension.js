let hrmessage = "welcome to bajaj finserv pvr ltd"
console.log(hrmessage.startsWith("wel"));
// includes , ends with

let face = "\u{1f600}" ;
console.log(`This is my ${face.repeat(5)} Face!`);


const myArray = new Array(123);
console.log(myArray.length);
const anotherArray = myArray;
console.log(anotherArray);

export const TEST_DATA = {
    employees: [
        {
            employeeId: 2370,
            employeeName: "Pravinkumar R. D.",
            address: "Suncity, A8/404",
            city: "Pune",
            zipcode: 411051,
            phone: "+91 23892893",
            email: "pravin.r.d@synechron.com",
            skillSets: "Microsoft/JavaScript",
            country: "India",
            joiningDate:new Date(),
            avatar: "images/noimage.png"
        },
        {
            employeeId: 2372,
            employeeName: "Manish Kaushik",
            address: "Mooncity, Z8/404",
            city: "Raipur",
            zipcode: 459899,
            phone: "+91 9039039090",
            email: "manish.kaushik@synechron.com",
            skillSets: "DBA",
            country: "India",
            joiningDate:new Date(),
            avatar: "images/noimage.png"
        },
        {
            employeeId: 2374,
            employeeName: "Alisha C.",
            address: "Mooncity, B8/404",
            city: "Mumbai",
            zipcode: 510512,
            phone: "+91 30003000",
            email: "alisha.c@synechron.com",
            skillSets: "Java",
            country: "India",
            joiningDate:new Date(),
            avatar: "images/noimage.png"
        }
    ],
    events:[
        {
            eventId: 1001,
            eventCode: 'SEMJQ3',
            eventName: 'Seminar on jQuery 3.x',
            description: 'Seminar will discuss all the new features of jQuery 3.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 800,
            seatsFilled: 70,
            logo: 'images/jq3.png'
        },
        {
            eventId: 1002,
            eventCode: 'SEMNG1',
            eventName: 'Seminar on Angular JS 1.5.x',
            description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 600,
            seatsFilled: 50,
            logo: 'images/ng1.png'
        },
        {
            eventId: 1003,
            eventCode: 'SEMNG2',
            eventName: 'Seminar on Angular 2.x',
            description: 'Seminar will discuss all the new features of Angular 2.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1000,
            seatsFilled: 80,
            logo: 'images/ng2.png'
        },
        {
            eventId: 1004,
            eventCode: 'SEMNG4',
            eventName: 'Seminar on Angular 4.x',
            description: 'Seminar will discuss all the new features of Angular 4.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1000,
            seatsFilled: 76,
            logo: 'images/ng2.png'
        },
        {
            eventId: 1005,
            eventCode: 'SEMBS3',
            eventName: 'Seminar on Bootstrap 3.x',
            description: 'Seminar will discuss all the new features of Bootstrap 3.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 500,
            seatsFilled: 34,
            logo: 'images/bs3.png'
        }
    ]
}


//  fetch employee containing u
const employeewithu = TEST_DATA.employees.includes("u");
console.log(employeewithu);

const amounts = [1200, 1450, 1800, 670];
const discount = 10;

const discountedAmounts = Array.from(amounts, amt => amt - (amt * discount) / 100);

console.log(amounts);           // [1200, 1450, 1800, 670]
console.log(discountedAmounts); // [1080, 1305, 1620, 603]


const values=[10,21,12,11,4,21,78,98,789];
console.log(values.fill(11,-5,-2));