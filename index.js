// Write your solution in this file!
const employee = {
    name: "Hayden",
    streetAddress: "Dunmore Pl"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {

    const updatedEmployee = { ...employee };
  
    updatedEmployee[key] = value;
  
    console.log(updatedEmployee);
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {

    employee[key] = value;
    return employee
   
  }

  function deleteFromEmployeeByKey(employee, key, value) {

    const employeeWithKeyRemoved = { ...employee };
  
   delete employeeWithKeyRemoved[key]

    return employeeWithKeyRemoved;
  }

  function destructivelyDeleteFromEmployeeByKey (employee, key, value) {

    delete employee[key];
    return employee
  }