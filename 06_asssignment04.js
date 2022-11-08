
console.log("=============print sum of number 1 to 10========");
var giveResult = function () {
   var add = 0;
   for (let index = 0; index <= 10; index++) {

      add = add + index;

   }
   console.log(`addition is:${add}`);
}
giveResult();

console.log("=============print sum of qube of number==========");
var giveTest = function () {
   var sum = 0;
   for (let index = 0; index <= 5; index++) {
      sum= sum + index*index*index;
   }
   console.log(`addition is:${sum}`);
}
giveTest();
console.log("=========even position in given string=======");

function evenPositionedChars(myString){
   
   var result=" ";
   for (let index = 0; index < myString.length; index++) {
           var char = myString.charAt(index);
           if(index%2==0 && char !=" "){
           result=result+char;
    
       }  
   }
   console.log(result);
}
evenPositionedChars("Hard work is always pay back");
evenPositionedChars("soon i will be  angular It champ");

console.log("=======================odd position in given string===========");

function oddPositionedChars(myString){

   var result="";
   for (let index = 0; index <myString.length; index++) {
           var char = myString.charAt(index);
           if (index%2!==0 && char !=" ") {
           result=result+char;
       }
   }
   console.log(result);

}
oddPositionedChars("Hard work is always pay back");
oddPositionedChars("soon i will be Angular IT champ");

