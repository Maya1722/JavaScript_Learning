const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
const totalElements=array_numbers.length;
console.log("total element in given array:",totalElements);
console.log("first and last element of array:");
console.log(array_numbers.at(0));
console.log(array_numbers.at(-1));
console.log("last third element using length property")
console.log(array_numbers.at(7));
console.log("===================================");
console.log (" traverse array in reverse order");
for(let index=(array_numbers.length-1);index>=0;index--){
    const element= array_numbers[index];
    console.log(element);
}
console.log("================even positioned value======================");
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if(index%2==0){
        console.log(element);

    }
    }



console.log("===============odd positioned value=========================");
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if(index%2!=0){
        console.log(element);

    }
    
}

console.log("=================================");

var sum=0;
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    sum=sum+array_numbers[index];
}
console.log(array_numbers);
console.log(array_numbers.includes(115));
console.log(array_numbers.includes(23));