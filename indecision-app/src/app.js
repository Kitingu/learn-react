/**
 * react code live here
 * jsx javascript XML
 */

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is my first jsx expression</p>
    <ol>
      <li> Item One</li>
    </ol>
  </div>
);
// assignment
const template2 = (
  <div>
    <h1>Benedict Mwendwa</h1>
    <p>Age: 25</p>
    <p>Location Nairobi</p>
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
