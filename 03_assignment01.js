
console.log("=========function expression=====");
var square=function(value){
    console.log(value*value);
    return result;
}
var result=square(5);
var result=square(6);
var result=square(10);
console.log(typeof square);


console.log("============area of triangle==========");

var test=function(base,height){
    console.log("area of triangle") ;
    result = 1/2 *base*height;
    console.log(result);
}
   test(45,34);

var rect=function(height,width){
    console.log("area of rectangle");
    aR=height*width;
    console.log(aR);
}
    rect(499,917);

    var swap_values=function(arg1,arg2){

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

       var safe="javascript the most popular language";
       console.log(safe);
       var count=safe.length;
       console.log(count);
       console.log(safe.charAt(8));
       console.log(safe.indexOf("s"));
       console.log(safe.indexOf("lang"));
       console.log(safe.indexOf('e'));

       







