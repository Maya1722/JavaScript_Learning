console.log("=========01=======");
function my_game(){
    console.log("my first function");
}
   my_game();

function my_hobbies(){
console.log("my second function ");
}
my_hobbies();

console.log("========02======");
function my_details(firstName,lastName){

    console.log("First name:",firstName);
    console.log("last name:",lastName);
}
my_details("maya","shingne");
console.log("======03=====");
function swap_values(arg1,arg2){

    console.log("=====before swap=====");
    console.log(arg1,arg2);
    console.log("========after swap======");
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}
   swap_values("virat","anushka");
   swap_values("1000","2000");
    console.log("========03======");

   function addition(arg1,arg2,arg3){
    console.log(arg1 + arg2 + arg3);
        
   }
   addition(10.23,600,40);
   addition("hello","good","morning");
   
      