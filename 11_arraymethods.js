let arrayOfNumbers=[1,3,7,8,9,3,7];
arrayOfNumbers[4]=11;
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));

for(let index=0;index<arrayOfNumbers.length;index++){
const element=arrayOfNumbers[index];
    console.log(element);
}

for (const index in arrayOfNumbers) {
        const element = arrayOfNumbers[index];
        console.log(element);
    
}

let totalElements=arrayOfNumbers.length-1;
for (let index=totalElements;index>=0;index--){

 const element=arrayOfNumbers[index];
 console.log(element);  
}

const array=[4,6,7,8,3,2];
for(let index=(array.length-1);index>=0;index--){
    const element= array[index];
    console.log(element);
}