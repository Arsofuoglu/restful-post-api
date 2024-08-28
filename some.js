const employees = [
    { name: "John", age: 30, department: "IT" },
    { name: "Alice", age: 28, department: "HR" },
    { name: "Bob", age: 25, department: "IT" },
    { name: "Charlie", age: 32, department: "Finance" }
  ];
  
  
  const departmentNames = {};
  for (let employee of employees){
    let department = employee.department
    if (departmentNames[department]===undefined){
      departmentNames[department]=[];
    }
    departmentNames[department].push(employee);
  }
console.log(departmentNames)
