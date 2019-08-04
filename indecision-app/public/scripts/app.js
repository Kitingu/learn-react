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
// assignment
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Benedict Mwendwa"
  ),
  React.createElement(
    "p",
    null,
    "Age: 25"
  ),
  React.createElement(
    "p",
    null,
    "Location Nairobi"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
