// Write your solution in this file!
const employee = {name:"Kelvin",
streetAddress:"Kiamunyi"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}
const updateEmployee = uppdateEmployeeWithKeyAndValue(employee,"name","Njeri");
console.log(updateEmployee);
console.log(employee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","Kiamunyi");
console.log(updatedEmployee);
console.log(employee);
function deleteFromEmployeeByKey(employee, key, value){
  return {...employee, [key]:value}
}
const noNameEmployee = deleteFromEmployeeByKey(employee, "name","Kelvin")
delete noNameEmployee.name;
console.log(noNameEmployee);
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee
}
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);