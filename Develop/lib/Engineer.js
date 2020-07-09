const Employee = require("./Employee")

// Class definition for Engineers, based off of Employees
// Adds a github property to Employee and changes role
class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;