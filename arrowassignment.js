

function display(){
    console.log("good morning,today is wednesday");
}

let show =  () => {
    console.log("good morning,today is wednesday");
}
show();


let multi = (n1, n2,n3) =>  n1 * n2 * n3;

console.log( multi(5,5,2));
let mul = (n1, n2,n3=1) =>  n1 * n2 * n3;

console.log( mul(10,4,1));

let add = (n1, n2,n3,n4,n5) =>  n1 +n2+ n3+n4+n5;

console.log(`addition is:${add(100,100,200,349,756)}`);
let adds = (n1, n2,n3,n4,n5,n6,n7,n8,n9) =>  n1 +n2+ n3+n4+n5+n6+n7+n8+n9;

console.log(`addition is:${adds("i am"," ","learning"," ","ES6"," ","features"," ","in depth")}`);




