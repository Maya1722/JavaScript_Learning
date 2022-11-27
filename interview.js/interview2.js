let arrayNumber=[1,6,5,3,11,23,4];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if(index%2!=0){
        console.log(element);
    }
    
}

for(let index=(arrayNumber.length-1);index>=0;index--){
    const element= arrayNumber[index];
    console.log(element);
}
arrayNumber.reverse();
console.log(`Reverse array is:${arrayNumber}`);

let arraySort=arrayNumber.sort();
console.log(arraySort);

arrayNumber.sort((a,b)=>{
return a>b?1:-1;

});
console.log(arrayNumber);

arrayNumber.sort((a,b)=>{
    return a>b?-1:1;
    
    });
    console.log(arrayNumber);
    
    for (let index=arrayNumber.length-1; index>=0; index--) {
        const element = arrayNumber[index];
        if(index==3){
            console.log(element);
        }
        
    }

    let arrayOfNumber=[1,5,67,9,8,7,6]
     arrayOfNumber.unshift(2,33);
    console.log(arrayOfNumber);
    
arrayOfNumber.sort((a,b) => {
    
    return  a-b;


});
let result=arrayOfNumber[0];
console.log(result);

arrayOfNumber.sort((a,b) => {
    return b-a;

});

let gretestReturn=arrayOfNumber[0];
console.log(gretestReturn);















