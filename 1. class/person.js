

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `welcome my name is ${this.name} and my age is ${this.age}`;
    }
}

class Employee extends Person{
    constructor(name,age,dept){
        
        super(name,age);
        this.dept.position = dept.position;
    }
    greet(){
        return `hello my name is ${this.name} and my position is ${this.dept.position}`;
    }
    #salary ; // private filed 
    getSalary(){
        return this.#salary;
    }
    setSalary(salary){
        this.#salary = salary;
    }
    static compareSalraries(emp1,emp2){
        if(emp1.#salary > emp2.#salary){
            return `emp1 has higher salary than emp2`;
        } else  if(emp1.#salary < emp2.#salary){
            return `emp2 has higher salary than emp1`;
        } else {
            return `both has same salary`;
        }
    }
}

// const emp = new Employee('dheeraj mehra' , 25 , 'software developer');
// console.log(emp.greet());
// emp.setSalary(2323);

// const emp1 = new Employee("raj" , 23 , 'doctor');
// emp1.setSalary(5343);

//   const ans= Employee.compareSalraries(emp1,emp);
//   console.log(ans);


  class Department{
    constructor(name){
        this.name = name;
    }
    describe(){
        return `this is the hr deparement`
    }
  }

  const hrDept = new Department("HR");
  const emp2 = new Employee("dheeraj",25,hrDept);
  console.log(emp2.greet());


