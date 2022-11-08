let bank_sbi ={
    name: "mohit sharma",
    age: 27,
    Mobile: 345678,
    is_married: "yes",
}

let bank_location = {
    city: "pune",
    street: "Mh",
    pincode: 442202,

}

console.log(bank_sbi);
console.log(bank_location);
console.log("==============using assign{} method================");
let mergedObject = Object.assign(bank_sbi,bank_location);
console.log(mergedObject);


console.log("=============by using spread operator==============");
let result={...bank_sbi,...bank_location}
console.log(result);
console.table(result);


console.log("==============new object rate of interest=====================");
const rate_of_interest = {
    home_loan_interest: "13%", 
    personal_loan_interest: "8%",
    due_interest:"6%",
}
console.table(mergedObject);

console.log(rate_of_interest);
const sbi_details = Object.assign( bank_sbi, bank_location, rate_of_interest);
console.log(sbi_details);
console.table(sbi_details);

console.log("=======traverse array by using loop=====");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        
        console.log(key,"=",element);
    }
}






