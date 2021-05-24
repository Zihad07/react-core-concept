class Person {
  constructor(name){
    this.name = name
  }

  walk(){
    console.log(this.name + " walkes.")
  }
}

class Teacher extends Person {

  constructor(name, subject){
    super(name);
    this.subject = subject;
  }
  teach(){
    console.log(`${this.name} teaches ${this.subject} subject`);
  }
}

const person = new Person('Nahid');
person.walk();
const teacher = new Teacher('Akash', 'Math');
teacher.walk()
teacher.teach()