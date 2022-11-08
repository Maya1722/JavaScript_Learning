const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("=============square of each element==========");
   const arrayGreater=array_numbers.filter((element)=>{
        
         return element>50;
  
       });
       console.log(arrayGreater);

       console.log("=============even number==========");
   const arrayEven=array_numbers.filter((element)=>{
        
         return element%2==0;
  
       });
       console.log(arrayEven);
       console.log("=============odd number==========");
   const arrayOdd=array_numbers.filter((element)=>{
        
         return element%2!=0;
  
       });
       console.log(arrayOdd);
       console.log("=======between 20 and 50===========");
       const arrayBet=array_numbers.filter((element)=>{
        if(element>20 && element<50){
        return element;
        }
      });
      console.log(arrayBet);