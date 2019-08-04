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
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
