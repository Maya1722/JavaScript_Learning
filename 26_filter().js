const array_numbers=[2,3,4,5,6,1];
let newArray=array_numbers.filter((element)=>{
    return element>=4;

});
console.log(newArray);

console.log("=================reduce()=================")
const arrayOfNumbers=[2,3,4,5,6,1];
let newOfArray=arrayOfNumbers.reduce((value,runningTotal)=>{
    return value+runningTotal;

});
console.log(newOfArray);
  





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
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");

sachin.details();
console.log(sachin);
console.log(rohit);