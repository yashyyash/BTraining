//Function-As-A-Class
function Person(fname,lname,city){
    //public
    this.firstName=fname;
    this.lastName=lname;
    this.city=city;
    this.getPersonInfo=function(){
        return "Person " + this.firstName + " " + this.lastName  + " lives in city " + this.city + "!";
    }
    //private
    var _socialId;
}

var p1=new Person("Pravinkumar","R. D.","Pune");
console.log(p1.getPersonInfo());
console.log(typeof(Person));