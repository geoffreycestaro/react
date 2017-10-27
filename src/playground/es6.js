// function square(x) {
//   return x * x;
// };

// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow2 = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(9));
// console.log(squareArrow2(10));

// const getFn = (name) => {
//   return name.split(' ')[0];
// };

// const getFn2 = (name) => name.split(' ')[0];

// console.log(getFn('Geoffrey Cestaro'));
// console.log(getFn2('Geoffrey Cestaro'));

const add = function (a,b) {
  console.log(arguments);
  return a + b;
};

const add2 = (a,b) => {
  return a + b;
};

console.log(add(50,1));
console.log(add2(50,1));

const user = {
  name: 'Geoffrey',
  cities: ['New York', 'San Francisco', 'Atlanta'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
  };

console.log(user.printPlacesLived());

const multiplier = {
  num: [1,2,3],
  multiplyBy: 2,
  multiply() {
    return this.num.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

const user = {
  name: 'Geoffrey Cestaro',
  age: 18,
  location: 'Atlanta, GA'
};

function getLocation (location) {
 if (location) {
   return <p>Location: {location}</p>;
 } 
};

let count = 0;
const addOne = () => {
  count ++;
  renderCounterApp();
};

const minusOne = () => {
  count --;
  renderCounterApp();
 };

 const reset = () => {
  count = 0;
  renderCounterApp();
 };

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();