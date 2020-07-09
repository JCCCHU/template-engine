const Employee = require("./Employee")

// Class definition for Managers, based off of Employees
// Changes role and adds an office number
class Manager extends Employee {
  constructor(name,id,email,officeNumber) {
    super(name,id,email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager'
  }
}

module.exports = Manager;