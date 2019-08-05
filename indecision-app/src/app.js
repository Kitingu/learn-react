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
const username = "Benedict Mwendwa";
const userAge = 27;
const userLocation = "Nairobi";
// assignment
const template2 = (
  <div>
    <h1>{username.toLowerCase()} </h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
