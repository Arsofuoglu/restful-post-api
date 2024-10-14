const employees = [
  { name: "John", age: 30, department: "IT" },
  { name: "Alice", age: 28, department: "HR" },
  { name: "Bob", age: 25, department: "IT" },
  { name: "Charlie", age: 32, department: "Finance" }
];

/* const departmentList = {};
  for (let i=0; i<employees.length ;i++) {
    let currentObject=employees[i]
    let departmentName=currentObject.department
    if(departmentList[departmentName]===undefined){
       departmentList[departmentName]=[];
    }
    
    departmentList[departmentName].push(currentObject);
    
    
  }
 console.log(departmentList) */



const departmentList=employees.reduce((employeeList,employee) => {
  if (employeeList[employee.department]===undefined){
    employeeList[employee.department]=[];
  } 
  employeeList[employee.department].push(employee)
  return employeeList
}, {})
const departmentLists=departmentList;
module.exports=departmentLists;
