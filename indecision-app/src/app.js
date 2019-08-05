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

const user = {
  username: "Benedict Mwendwa",
  userAge: 27,
  userLocation: "Nairobi"
};

// assignment
const template2 = (
  <div>
    <h1>{user.username} </h1>
    <p>Age: {user.userAge}</p>
    <p>Location: {user.userLocation}</p>
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
