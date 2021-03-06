console.log('App.js is run.');

const app = {
  title: 'Indecision App.',
  subtitle: 'Let a computer decide what you do next.',
  options: ['One','Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options.'}</p>
    {
      <ol>
        <li>Item one.</li>
        <li>Item two.</li>
      </ol>
    }
  </div>
);

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