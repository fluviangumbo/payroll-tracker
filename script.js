// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee object
  let addEmployee = true;

  while (addEmployee) {
    let firstName = window.prompt('Enter first name:');
    if (!firstName) {
      addEmployee = false;
      return;
    }
    
    let lastName = window.prompt('Enter last name:');
    if (!lastName) {
      addEmployee = false;
      return;
    }
    
    let salary = window.prompt('Enter salary:', 0);
    if (isNaN(salary)) {
      salary = window.prompt('Please enter a number for salary:');
    }
    
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    }

    employeesArray.push(newEmployee);

    addEmployee = window.confirm('Do you want to add another employee?');
  };
  return employeesArray;
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const roster = employeesArray.length;
  let avgSalary = 0;
  let salTotal = 0;

  for (i = 0; i < roster; i++) {
    salTotal = parseFloat(salTotal) + parseFloat(employeesArray[i].salary);
  }

  console.log(parseFloat(roster));
  console.log(parseFloat(salTotal));

  avgSalary = parseFloat(salTotal)/parseFloat(roster).toFixed(2);
  console.log('The average employee salary between our ' + roster + ' employee(s) is $' + parseFloat(avgSalary).toFixed(2));
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * (employeesArray.length));
  console.log(employeesArray[index]);
  
  console.log('Congratulations to ' + employeesArray[index].firstName + ' ' + employeesArray[index].lastName + ', our random drawing winner!');
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
   if (a.lastName < b.lastName) {
     return -1;
   } else {
     return 1;
   }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
