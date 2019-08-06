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
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};
const numbers = [55, 158, 82];
const resetLength = e => {
  app.options.length = 0;
  renderTemplate();
};
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.title && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={resetLength}>remove all</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

// functions in react expressions are referenced to not called
// arrays in jsx must have a key
// react ignores null undefined and false i.e falsie statements and objects, booleans
const appRoot = document.getElementById("app");
renderTemplate();
