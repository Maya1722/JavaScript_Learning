let variable_name="";
let person={
fullName: "MOHIT",
city: "pune ",
age:"42",
is_married:"true",
address:{

        street:"as club",
        pincode:"12345",
        city:"pune",
        state:"MH"
},
eat:function(){

     console.log("i am non-vegetarian");

},
walk:function(){
    
    console.log("i am walk everyday");
},
details:function(){
let personDetails=`details are:${this.fullName},${this.age},${this.address.state}`;
 return personDetails;
}
}
console.log(Object.entries(person));
let pDetails= person.details();
console.log(pDetails);
person.eat();
console.log(typeof person);
console.table(person.address);
console.table(person.address.street);
person.address.landmark="near FC Road"

person.fullName="sachin ramesh tendulkar";
person.profession="Angular developer";
person.pincode="443301";
delete person.age;
console.log(person);
console.log(person.city);
console.log(person.age);
console.log(person);
let personfullName=person.fullName;
console.log(person.fullName);
console.log(personfullName);

let teacher={
    

degrees:{

    
},

certificate:{





},

 details: function(){
  let personDetails= this.fullName+" "+this.age+" "+this.address.city;
  return personDetails;
 }
}