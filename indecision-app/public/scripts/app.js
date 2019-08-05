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
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};
var resetLength = function resetLength(e) {
  app.options.length = 0;
  renderTemplate();
};
var renderTemplate = function renderTemplate() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: resetLength },
      "remove all"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        " Item One"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

// functions in react expressions are referenced to not called
var appRoot = document.getElementById("app");
renderTemplate();
