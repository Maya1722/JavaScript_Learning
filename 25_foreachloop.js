let show=(n1,test)=>{

console.log("hi");
}
show(10,"test");
//for each using callback
const array_numbers=[10,20,30,40,50,60];
array_numbers.forEach(function(currentValue,index,array){
console.log(currentValue,index,array);
}
);
// foreach using arrow function
array_numbers.forEach((currentValue)=>{
    console.log(currentValue);
});


