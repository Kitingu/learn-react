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
var username = "Benedict Mwendwa";
var userAge = 27;
var userLocation = "Nairobi";
// assignment
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    username.toLowerCase(),
    " "
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
