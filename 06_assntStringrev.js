console.log("============string reverse============");
function reverseString1(arg){

  var argLength=arg.length-1;
  var reverse=" ";
for (let index=argLength;index>=0;index--){
var char=arg.charAt(index);
 reverse=reverse+ arg.charAt(index);
}
console.log(reverse);
}
reverseString1("hard work is always pay back");
reverseString1("soon i will be Angular IT champ");


console.log("====count the total number using include() for string=======");
var giveResult=function(myString){

  var vowelsLowercase="aeiou";
  var vowelsUppercase="AEIOU";
  var vowelsCount=0;
  for(let index=0;index<myString.length;index++){
    var char=myString.charAt(index);
    var isLowerAvailable=vowelsLowercase.includes(char);
    var isUpperAvailable=vowelsUppercase.includes(char);

   if( isLowerAvailable|| isUpperAvailable) {

      vowelsCount=vowelsCount+1;
   }

  }
console.log(`total vowels count:${vowelsCount}`);
}
giveResult("good morning IT champ");

