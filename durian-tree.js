class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinates(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
    // ada.addSubordinate(arvinder);
    // ada.addSubordinate(angela);
    // ada.addSubordinate(phil);
  }
}
const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

console.log(ada.addSubordinates(craig));
console.log(ada)