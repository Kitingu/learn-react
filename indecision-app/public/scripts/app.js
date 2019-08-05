"use strict";

/**
 * react code live here
 * jsx javascript XML
 * undefined null and false are ignored by jsx
 * ternary operator, unlike normal functions can be used inside jsx expression
 */

//assignment 2
var app = {
  title: "Indecision App",
  subtitle: "Talk is cheap",
  options: ['one', 'two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.title && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " Item One"
    )
  )
);

var user = {
  username: "Benedict Mwendwa",
  userAge: 27,
  userLocation: "Nairobi"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};

// assignment
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.username ? user.username : "anonymous",
    " "
  ),
  user.userAge && user.userAge >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.userAge,
    " "
  ),
  getLocation(user.userLocation)
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
