let somchai = new CEO("Somchai", "Sudlor", 30000);
let somsri = new Employee("Somsri", "Sudsuay", 22000);

somchai.gossip(somsri, "Today is very cold!");
somchai.work(somsri);

somchai.increaseSalary(somsri, 20);
somchai.increaseSalary(somsri, 25000);

// these are our expectations
//
// Hey Somsri, Today is very cold!
// Somsri has been fired! Dress with :tshirt
// Somsri has been hired back! Dress with :tshirt
// He is going to seminar Dress with :suit
// He goes to golf club to find a new connection. Dress with :golf_dress 
// Somsri's salary is less than before!!
// Somsri's salary has been set to 25000