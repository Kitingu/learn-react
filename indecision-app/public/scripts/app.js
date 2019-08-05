"use strict";

/**
 * react code live here
 * jsx javascript XML
 */

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is my first jsx expression"
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
ReactDOM.render(template2, appRoot);
