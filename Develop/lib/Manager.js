const Employee = require("./Employee")

// Class definition for Managers, based off of Employees
class Manager extends Employee () {
  constructor(name,id,email,officeNumber) {
    super(name,id,email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager'
  }
}

module.exports = Manager;