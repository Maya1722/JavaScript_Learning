
    let teacher= {
      
           fullName:"maya shingne",
           age:27,
           city:"aurangabad",
           pincode:"12345",
           state:"mh",

    degrees:{
             BE:"COMPUTER",
             ME:"computer",
             PHD:"adv computing",
           
    },

    certificate:{
          FIRST:"cyber security",
          SECOND:"paper presentaion",
          THIRD:"data mining",
    
    
    },
    details:function(){
      let personDetails=`details are:${this.fullName},${this.age},${this.city}`;
      return personDetails;

    }
}
let tDetails= teacher.details();
console.log(tDetails);
console.log("==================type of object=================");
console.log(typeof teacher);
console.log("==============modify teacher name========================");
teacher.fullName="maya anil shingne";
console.log(teacher.fullName);
console.log("===============add profession==============");
teacher.profession="angular developer";
console.log(teacher.profession);
console.log(teacher.degrees);
console.log(teacher.certificate);
console.log(Object.entries(teacher.degrees));
console.log(Object.entries(teacher.certificate));
console.table(teacher);
