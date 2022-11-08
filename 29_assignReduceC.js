console.log("=============assignment using reduce method===============");
const array_numbers=[20,11,40,25,23,11,9,90,60,2,19];


console.log("======sum of all element============");
let add=array_numbers.reduce((runningTotal,currentValue)=>{
return runningTotal+currentValue;

},0);

console.log(`addition is :${add}`);

console.log("======even number in given array============");
let even=array_numbers.filter((currentValue)=>{
return currentValue%2==0;

});

console.log(`even number :${even}`);
console.log("===========sum of all even number==================");
let evenAdd=even.reduce((runningTotal,currentValue)=>{

return runningTotal+currentValue;

});

console.log(evenAdd);

console.log("============Average of element================");

let average=null;
let sum=array_numbers.reduce((runningTotal,value,index)=> {
    runningTotal=runningTotal+value;
    if(index==array_numbers.length-1){

        average=runningTotal/array_numbers.length;
    }
     return runningTotal;
});
console.log(`sum is:${sum} ,total elements:${array_numbers.length}, Average:${average}`);