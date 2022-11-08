class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "TI", 5000, "TCS");
const emp_radha = new Employee(33, "radha", "HR", 74000, "WIPRO");
const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
const emp_vinay = new Employee(66, "vinay", "TI", 45000, "INFO");
const emp_maya = new Employee(77, "maya", "TI", 40000, "WIPRO");
const emp_monika = new Employee(88, "monika", "TI", 75000, "TCS");
const emp_mahi = new Employee(99, "mahesh", "HR", 85000, "INFO");

const array=[emp_anil,emp_radha,emp_rishi,emp_vinay,emp_maya,emp_monika,emp_mahi];

array.forEach((Employee)=>{
 
    console.log(`Id:=====>${Employee.emp_id} Name:${Employee.emp_name} Dept:${Employee.emp_dept} company:${Employee.emp_company} salary:${Employee.emp_salary}`);

});



let map_employees=new Map();
map_employees.set(22,emp_anil);
map_employees.set(33,emp_radha);
map_employees.set(55,emp_rishi);
map_employees.set(66,emp_vinay);
map_employees.set(77,emp_maya);
map_employees.set(88,emp_monika);
map_employees.set(99,emp_mahi);
console.log(map_employees);




console.log("=======traverse using for each loop=====");
map_employees.forEach((key,value) => {
    console.log(key,value);
});




