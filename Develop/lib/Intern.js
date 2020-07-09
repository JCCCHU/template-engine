const Employee = require("./Employee")

// Class definition for Interns, based off of Employees
// Adds a School property and changes role
class Intern extends Employee () {
  constructor(name,id,email,school) {
    super(name,id,email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;