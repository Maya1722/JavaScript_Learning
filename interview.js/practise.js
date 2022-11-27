const fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];

const arrayLength=fruits_seasonal.length;
console.log(arrayLength);

console.log("===================adding papaya in array============");
fruits_seasonal.unshift("papaya");
console.log(fruits_seasonal);

console.log("===============remove mango===============");

fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

fruits_seasonal.push("pineapple");
console.log(fruits_seasonal);

fruits_seasonal.splice(4,0,"Dragon fruits");
console.log(fruits_seasonal);

//replace orange with kiwi
fruits_seasonal.splice(2,1,"kiwi");
console.log(fruits_seasonal);

fruits_seasonal.pop("pineapple");
console.log(fruits_seasonal);


fruits_seasonal.push("coconut");

for (let index =fruits_seasonal.length-1; index>=0; index--) {
    const element = fruits_seasonal[3];
    
    console.log(element);
}





















