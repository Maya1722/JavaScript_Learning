let setOfNumbers= new Set();
console.log(typeof setOfNumbers);
console.log("================adding elememt into the set collection================");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);

console.log(setOfNumbers);
console.log("==============checking number available into set===================");
console.log(setOfNumbers.size);

console.log("===================deleting element 9==============");
setOfNumbers.delete(9);
console.log(setOfNumbers);
console.log("===========check whether 7 available into set or not============");
let is_available=setOfNumbers.has(7);
console.log(is_available);
console.log("===========traversing element in set============");
for (const element of setOfNumbers) {
        console.log(element);
        
    }

    let arrayNumbers=[2,3,4,5,6,3,5];
    let arrayUniqueElements=[...new Set(arrayNumbers)];
    console.log(arrayUniqueElements);