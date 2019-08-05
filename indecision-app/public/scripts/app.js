"use strict";

/**
 * react code live here
 * jsx javascript XML
 */

//assignment 2
var app = {
  title: "Indecision App",
  subtitle: "Talk is cheap"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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

// assignment
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.username,
    " "
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.userLocation
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
