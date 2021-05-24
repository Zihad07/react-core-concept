import { Person } from './person'

export const promote = (param)=> { console.log(param) };
export default class Teacher extends Person {

  constructor(name, subject){
    super(name);
    this.subject = subject;
  }
  teach(){
    console.log(`${this.name} teaches ${this.subject} subject`);
  }
}