var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);

console.log("================imp quotes==========");
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);


 console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));
 console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));
 console.log("==============includes()===============");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));
console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);

 var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);

 var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);