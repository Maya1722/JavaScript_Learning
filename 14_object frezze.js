

const person={
     name:"mohit",
     rollNo :1234,

}
Object.freeze(person);
let students={

    city:"pune",

}
person.name="mohit sharma";
person.street=" As club";
console.log(person);


//object cloning

const student= {

name:"mohit",
rollNo:1234,

}
const address={
    city:"pune",
    street:"Mh",
}

let studentClone=Object.assign({},student);
studentClone.name="mohit sharma";
console.log(studentClone);
console.log(student);

let mergedObject=Object.assign({},student,address);
console.log(mergedObject);








