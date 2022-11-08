

console.log("===========assignment using sorting method===============");
const array_roll_number=[113,45,56,11,32,45,109,799,56,45];
array_roll_number.reverse();
console.log(`Reverse array is:${array_roll_number}`);

let arraySort=array_roll_number.sort();
console.log(arraySort);

array_roll_number.sort((a,b)=>{
return a>b?1:-1;

});

console.log(array_roll_number);

array_roll_number.sort((a,b)=>{
    return a>b?-1:1;
    
    });
    
    console.log(array_roll_number);
    
    array_roll_number.sort((a,b)=>{
        if (a>=b){

              return  a;
        }
        
        });
        

        console.log(array_roll_number);
        
        