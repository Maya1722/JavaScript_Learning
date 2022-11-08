let map=new Map();
map.set(22,"sachin");
map.set(11,"dravid");
map.set(33,"ganguly");
map.set(27,"maya");
map.set(77,"sachin");
console.log(map);
console.log("============adding duplicate key===========");
map.set(11,"gautam");
console.log(map);
console.log("============retriving value===========");
let value =map.get(33);
console.log(value);
console.log("===================deleting element 9==============");
map.delete(9);
console.log(map);
console.log("===========check whether 7 available into set or not============");
let is_available=map.has(27);
console.log(is_available);
console.log("===========traversing over map collection============");

let setOfKeys =map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    
    console.log(map.get(key));
}


class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }

    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    
    }
}
let peronSachin = new Person( 22,"Sachin Tendulkar", "Pune", "Male");
let personRohit = new Person( 33,"Rohit Shram", "Mumbai", "Male");
let personBill = new Person(44,"Bill Gates", "Mumbai", "Male");

let mapOfPersons=new Map();
mapOfPersons.set(22,peronSachin);
mapOfPersons.set(33,personRohit);
mapOfPersons.set(44,personBill);

let mapKeys=mapOfPersons.keys();
for (const key of mapKeys) {

let personObject=mapOfPersons.get(key);
personObject.details();
}








