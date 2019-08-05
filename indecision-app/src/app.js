/**
 * react code live here
 * jsx javascript XML
 */

//assignment 2
const app = {
  title: "Indecision App",
  subtitle: "Talk is cheap"
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
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
ReactDOM.render(template, appRoot);
