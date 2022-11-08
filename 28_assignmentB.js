const array_numbers=[1,-7,40,505,-77,91,0,108,89,-601];
console.log("========using for each loop=======");
array_numbers.forEach(function(currentValue,index,array) {
    
    console.log(currentValue,index,array);
});

console.log("===========arrow  function=========");
array_numbers.forEach((currentValue,index,array)=>{

console.log(currentValue,index,array);

});
console.log("======== negative number using for each loop=======");
array_numbers.forEach(function(currentValue) {
    if(currentValue<0){
    console.log(currentValue);
    }

});


console.log("=========== negative number using arrow  function=========");
array_numbers.forEach((currentValue)=>{
    if(currentValue<0){
        console.log(currentValue,);
        }
    

});
console.log("======== positive number using for each loop=======");
array_numbers.forEach(function(currentValue) {
    if(currentValue>0){
    console.log(currentValue,);
    }

});


console.log("=========== positive number using arrow  function=========");
array_numbers.forEach((currentValue)=>{
    if(currentValue>0){
        console.log(currentValue);
        }
    

});
console.log("===========even numbers using for each loop============");

array_numbers.forEach(function(currentValue) {
    if(currentValue%2==0){
    console.log(currentValue);
    }

});

console.log("=========== even number using arrow  function=========");
array_numbers.forEach((currentValue)=>{
    if(currentValue%2==0){
        console.log(currentValue);
        }
    

});


console.log("=========== even positioned value using arrow  function=========");
array_numbers.forEach((currentValue,index)=>{
    if(index%2==0){
        console.log(currentValue,index);
        }
    

});
console.log("=========== odd position value and if it is negative using arrow  function=========");
array_numbers.forEach((currentValue,index)=>{
    if(index%2!=0&&currentValue<0){
        console.log(currentValue,index);
        }
    

});










