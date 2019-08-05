/**
 * react code live here
 * jsx javascript XML
 * undefined null and false are ignored by jsx
 * ternary operator, unlike normal functions can be used inside jsx expression
 */

//assignment 2
const app = {
  title: "Indecision App",
  subtitle: "Talk is cheap",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.title && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li> Item One</li>
    </ol>
  </div>
);

let count = 0;
/**
 * classes are defined as className in jsx coz it is a reserved keyword
 */
const myId = "add";
const addOne = () => {
  count += 1;
  renderCounterApp();
  console.log("addOne");
};
const minusOne = () => {
  count -= 1;
  renderCounterApp();
  console.log("addOne");
};
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log("reset");
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count} </h1>
      <button id={myId} onClick={addOne} className='btn'>
        +1
      </button>
      <button onClick={minusOne} className='btn'>
        -1
      </button>
      <button onClick={reset} className='btn'>
        reset
      </button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
