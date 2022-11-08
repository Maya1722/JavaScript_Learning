
class vehicle{
    constructor(vehicleName, color, number, model){
      this.vehicleName =  vehicleName;
      this.color = color;
      this.Number= number;
      this.Model= model;
    }
    
}
let vehicle1 = new vehicle("BIKE", "black",667788 , "pulsar");
let vehicle2 = new vehicle("Ambulance", "white",334455, "van");
let vehicle3 = new vehicle("car", "white", 3131, "creata");
let vehicle4 = new vehicle("taxi", "yellow", 323232, "car");
let vehicle5 = new vehicle("bus", "red", 454545, "bus");
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
console.log(vehicle5);


console.log("===========================class college=============================");
class college{
    constructor(collegeName, collegeType, city,collegeDegree){
      this.collegeName =  collegeName;
      this.collegeType = collegeType;
      this.city= city;
      this.collegeDegree= collegeDegree;
    }
    
}
let college1 = new college("A.E.C Engg college", "private","chikhli" , "B.E");
let college2 = new college("M.G.M", "SEMI GOVT","aurangabad", "M.B.B.S");
let college3 = new college("DEOGIRI", "SEMI GOVT", "aurangabad", "B.S.C");
let college4 = new college("junior", "GOVT", "mehkar", "Polytechnic");
console.log(college1);
console.log(college2);
console.log(college3);
console.log(college4);
console.log("================================================");
for (const key in college1) {
  if (Object.hasOwnProperty.call(college1, key)) {
    const element = college1[key];
    
    console.log(element);
  }
}
console.log("================================================");
for (const key in vehicle1){
  if (Object.hasOwnProperty.call(vehicle1, key)) {
    const element = vehicle1[key];
    
    console.log(element);
  }
}



    
