

var impQuote="  hey you are doing good, keep it up  ";
 console.log(impQuote);

var str="  hey you are doing good, keep it up  ";
var demo= str.length;
console.log("length of given string is:",demo);
var demo= str.trim();
console.log("length of given string before trim:",demo.length);
console.log(demo.length);

var demo="hey you are doing good, keep it up";
var test=demo.charAt(0);
console.log("first character after trim is:",test);
var test=demo.charAt(32); 
console.log("last character after trim is:",test);

console.log("index of word good:",demo.indexOf("good"));
console.log("substring starting from index 22:",demo.substring(22));
console.log("substring start from 22:",demo.slice(22));
console.log("string ends with word up:",demo.includes("up"));
console.log(" string start with word hey after trim :",str.includes("hey"));
console.log(" the total number of word in given string",demo.split(" "));






