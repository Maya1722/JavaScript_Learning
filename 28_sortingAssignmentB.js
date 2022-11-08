
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
const emp_radha = new Employee(33, "radha", "IT", 74000, "WIPRO");
const emp_rishi = new Employee(44, "rishi", "Finance", 47000, "TCS");
const emp_vinay = new Employee(55, "vinay", "IT", 45000, "INFO");
const emp_maya = new Employee(66, "maya", "IT", 40000, "WIPRO");
const emp_monika = new Employee(77, "monika", "IT", 75000, "TCS");
const emp_mahi = new Employee(88, "mahesh", "HR", 85000, "INFO");

const array=[emp_anil,emp_radha,emp_rishi,emp_vinay,emp_maya,emp_monika,emp_mahi];
console.log("===============array object ==============");




