const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("first and last element is:");
console.log(fruits_seasonal.at(0));
console.log(fruits_seasonal.at(-1));

console.log("================================");
fruits_seasonal.unshift("papaya");
console.log("add papaya in given array");
console.log(fruits_seasonal);
console.log("================================");
console.log("remove mango in given array");
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log("===========================");
fruits_seasonal.splice(5,0,"pineapple");
console.log(fruits_seasonal);

console.log("=============================");
console.log("insert dragon fruits before watermelon ");
fruits_seasonal.splice(4,0,"dragon fruits");
console.log(fruits_seasonal);
console.log("==============================");
console.log("replace orange with kiwi");
fruits_seasonal.splice(2,1,"kiwi");
console.log(fruits_seasonal);
console.log("================================");
console.log(fruits_seasonal.slice(1,4));
console.log("==============================");
console.log(fruits_seasonal.slice(-3));