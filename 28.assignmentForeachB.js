

console.log("========== Assignment for each loop===========");

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
        

    
}
const emp_anil = new Employee(22, "Anil", "IT", 5000, "TCS");
const emp_radha = new Employee(33, "radha", "HR", 74000, "WIPRO");
const emp_rishi = new Employee(44, "rishi", "Finance", 47000, "TCS");
const emp_vinay = new Employee(55, "vinay", "IT", 45000, "INFO");
const emp_maya = new Employee(66, "maya", "IT", 40000, "WIPRO");
const emp_monika = new Employee(77, "monika", "IT", 75000, "TCS");
const emp_mahi = new Employee(88, "mahesh", "HR", 85000, "INFO");


const array=[emp_anil,emp_radha,emp_rishi,emp_vinay,emp_maya,emp_monika,emp_mahi];

console.log("=======Tcs Employee Details=======");
array.forEach((Employee)=>{
     if(Employee.emp_company=="TCS"){
    console.log(`Name:${Employee.emp_name}company:${Employee.emp_company}`);

     }
});
console.log("=======Employee Department=======");
array.forEach((Employee)=>{
    if(Employee.emp_salary>=50000){
        console.log(`Id:${Employee.emp_id} Name:${Employee.emp_name}company:${Employee.emp_company} salary:${Employee.emp_salary}`);
    
    }
});

console.log("=======sum of all employee salary=======");
let sum=0;
array.forEach((Employee)=>{
      return sum =sum+Employee.emp_salary;

});
console.log(`SUM OF salary:${sum}`);;



console.log("==========department employee whose salary is greater than or equal to 75000=======");
array.forEach((Employee)=>{
    if(Employee.emp_dept=="TI"||Employee.emp_dept=="HR" && Employee.emp_salary>=75000){
        console.log(`Id:${Employee.emp_id} Name:${Employee.emp_name} company:${Employee.emp_company} salary:${Employee.emp_salary}`);
    
    }
});












