
console.log("=============print sum of number 1 to 10========");
var giveResult = function () {
   var add = 0;
   for (let index = 0; index <= 10; index++) {

      add = add + index;

   }
   console.log(`addition is:${add}`);
}
giveResult();

console.log("=============print sum of square of number==========");
var giveTest = function () {
   var add = 0;
   for (let index = 0; index <= 5; index++) {
      add = add * add + index;
   }
   console.log(`addition is:${add}`);
}
giveTest();

console.log("=========even position in given string=======");

function evenPositionedChars1(){
   
   var str1 = "hard work is always pay back";
   var totalChar = str1.length;
   for (let index = 0; index <totalChar; index++) {
       if (index%2==0) {
           var charAt = str1.charAt(index);
           console.log(charAt); 
       }  
   }
}
evenPositionedChars1();
console.log("=======================================");

function evenPositionedChars2(){

   var str2 = "soon i will angular it champ";
   var totalChar = str2.length;
   for (let index = 0; index <totalChar; index++) {
       if (index%2==0) {
           var charAt = str2.charAt(index);
           console.log(charAt); 
       }  
   }
}
evenPositionedChars2();
console.log("=======================odd position in given string===========");

function oddPositionedChars3(){

   var str1 = "hard work is always pay back";
   var totalChar = str1.length;
   for (let index = 0; index <totalChar; index++) {
       if (index%2!=0) {
           var charAt = str1.charAt(index);
           console.log(charAt); 
       }  
   }
}
oddPositionedChars3();
console.log("======================================================");
function oddPositionedChars4(){

   var str2 = "soon i will angular it champ";
   var totalChar = str2.length;
   for (let index = 0; index <totalChar; index++) {
       if (index%2!=0) {
           var charAt = str2.charAt(index);
           console.log(charAt); 
       }  
   }
}
oddPositionedChars4();

