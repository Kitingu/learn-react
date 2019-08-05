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
  options: ['one', 'two']
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

const user = {
  username: "Benedict Mwendwa",
  userAge: 27,
  userLocation: "Nairobi"
};

const getLocation = location => {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

// assignment
const template2 = (
  <div>
    <h1>{user.username ? user.username : "anonymous"} </h1>
    {user.userAge && user.userAge >= 18 && <p>Age:{user.userAge} </p>}
    {getLocation(user.userLocation)}
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
