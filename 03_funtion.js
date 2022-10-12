 // function with no argument ,no return value
 function ball(){
console.log("print anyone msg");
 }
 ball();

 //function with argument and return value
function sachin(pocket) {

    console.log(pocket);
    console.log("sachin go in market");
    console.log("buy some vegetable");
    return "vegetable bag";
    
}
   var veg= sachin(500);
   console.log(veg);
    
// function with argument
    function functionName(city,street,age,is_married){

    
        console.log(city,street,age,is_married);
    }
      functionName("pune","lohgaon",27,"yes");

    function sachin(money){     
    console.log(" Please go in market with Rs.: ", money);     
    console.log(" Buy some vegetables");    
    return "Vegetables bag"; 
     } 
    var veg = sachin(500); 
    console.log(veg);  

    // 
    function functionName(city, street, age, is_married){
     console.log(city , street, age , is_married);     
     return city + street+age+is_married; 
     } 
     var value =  functionName("Pune", "Khawgalli", 22,"yes");
    console.log(value);   

     //function swap values 

    function swap_values(arg1, arg2)
    {     
    console.log("---------- Before swap-------------");    
    console.log(arg1, arg2);     
    console.log("---------- After swap-------------");     
    var temp = arg1;     
    arg1 = arg2;     
    arg2 = temp;    
    console.log(arg1, arg2); 
    } 
    swap_values("Virat", "Anushka"); 
    swap_values("Mango", "Apple"); 
    swap_values(100, 300); 
     console.log("---------- Addition function-------------"); 
     function addition(arg1, arg2, arg3){     
        console.log(arg1 + arg2 + arg3); 
    } 
    addition(200, 300, 600); 
    addition("Sachin", "Ramesh", "Tendulkar");