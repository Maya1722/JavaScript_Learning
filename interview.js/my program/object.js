var Employee =

{

company: 'abc'

}

var Emp1 = Object.create(Employee);

delete Emp1.company;
 console.log(Emp1.company);

 //array remove duplicate
 var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

 var unique=[...new Set(names)];
 console.log(unique);


 // write a program tp print fibbonacci serires

 const number=6;
 let n1=0;
 n2=1;
 nextTerm=0;

 console.log("fibonacci serires");
for(i=1;i<=number;i++){
  console.log(n1);
  nextTerm=n1+n2;
  n1=n2;
  n2=nextTerm;
}