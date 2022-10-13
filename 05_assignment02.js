console.log("==============01=============");
 var checkEven= function(arg3){

        if(arg3%2==0){

            console.log(arg3,": is Even");
        }
        else{
             console.log(arg3,":value is odd");
        }
        }

        checkEven(45);
        checkEven(70); 
        checkEven(67);
        checkEven(98);
    console.log("==========02============");
     var EligibilityVote=function(age){
         if(age>=18){
         console.log(age,": you are eligible for vote");
        }
        else{
             console.log(age,":you are not not eligible for vote");
        }
        }
        EligibilityVote(18);
        EligibilityVote(20);
        EligibilityVote(17);
        EligibilityVote(40);
console.log("===================03================");
var stringCheck=function(arg){

    var str="javaScript-ES6";
    var testResult=str.length;
     console.log(testResult);
    if(testResult>10){
        console.log("javascript-ES6 contain more than 10 character");
    }
      else{
        console.log("javascript not contain more than 10 character");
      }
}
stringCheck(14);
console.log("=====================04===============");
var checkString=function(){

    var str="javascript language";
    var strResult=str.startsWith("java");
    console.log(strResult);
    if(strResult=true){
        console.log("the given string start with java");
    }
}
checkString();

 