
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getIntro() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Geoffrey',48);
console.log(me.getGreeting());
console.log(me.getIntro());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getIntro());