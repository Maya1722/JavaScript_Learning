 var myString="TCS the Indian IT Giant Company";
 var myStringLength=myString.length-1;
  var reverse=" ";
for (let index=myStringLength;index>=0;index--){
var char=myString.charAt(index);
 reverse=reverse+ myString.charAt(index);
}
console.log(reverse);

console.log("============vowels count");
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
console.log("=================");
var result=myString.length;
console.log("length of given string:",result);
var total=myString.split(" ");

console.log("==============================");

var total_word=total.length;
console.log("total words in given string:",total_word);
       var givenResult= result/total_word;
console.log("====================================");
       console.log("string length divided by total no of words:",givenResult);
       var test=result*total_word;
       console.log("string length multiply by total no of word:",test);

       console.log("========================");
var totalChar = myString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = myString.charAt(index);
        console.log(charAt); 
    }  
}



