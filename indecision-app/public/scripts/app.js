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
  options: ["one", "two"]
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

var count = 0;
/**
 * classes are defined as className in jsx coz it is a reserved keyword
 */
var myId = "add";
var addOne = function addOne() {
  console.log("addOne");
};
var minusOne = function minusOne() {
  console.log("addOne");
};
var reset = function reset() {
  console.log("reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count,
    " "
  ),
  React.createElement(
    "button",
    { id: myId, onClick: addOne, className: "btn" },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne, className: "btn" },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset, className: "btn" },
    "reset"
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
