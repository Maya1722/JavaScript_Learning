console.log("==========01=======");
var wordLengthSquare=function(word){

   var result =word.length;
   console.log(`word length is:${result}`);
   var total= result*result;
   console.log("word length square is:",total);
}
wordLengthSquare("javascript");
wordLengthSquare("google");
wordLengthSquare("developer");
console.log("=============02==========");
var world=function(){
var str="I am angular developer";
var result=str.length;
console.log("length of given string:",result);
var total=str.split(" ");
console.log(total);
console.log("==============================");
var total_word=total.length;
console.log("total words in given string:",total_word);
       var givenResult= result/total_word;
console.log("====================================");
       console.log("string length divided by total no of words:",givenResult);
       var test=result*total_word;
       console.log("string length multiply by total no of word:",test);


}
world();



