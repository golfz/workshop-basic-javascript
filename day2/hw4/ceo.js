class CEO extends Employee {
  constructor(firstname, lastname, salary) {
    super(firstname, lastname, salary);
    this.dressCode = 'suit';
  }
  getSalary() {  // simulate public method
    return super.getSalary() * 2;
  };

  gossip(employee, message) {
    console.log(`Hey ${employee.firstname}, Today is very cold!`)
  }

  work(employee) {  // simulate public method
    this._fire(employee);
    this._hire(employee);
    this._seminar();
    this._golf();
  }
  increaseSalary(employee, newSalary) {
    const salary = employee.setSalary(newSalary)
    if (salary) {
      console.log(`${employee.firstname}\'s salary has been set to ${salary}`)
    } else {
      console.log(`${employee.firstname}\'s salary is less than before!!`)
    }
  }

  _fire(employee) {
    console.log(`${employee.firstname} has been fired! Dress with :${employee.dressCode}`)
  }

  _hire(employee) {
    console.log(`${employee.firstname} has been hired back! Dress with :${employee.dressCode}`)
  }

  _seminar() {
    console.log(`He is going to seminar Dress with :${this.dressCode}`)
  }

  _golf() { // simulate private method
    this.dressCode = 'golf_dress';
    console.log("He goes to golf club to find a new connection. Dress with :" + this.dressCode);
  };
}