import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "mike";
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// new syntax

class NewSyntax {
  name = "mike";
  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
const greeting = newSyntax.getGreeting;
console.log(greeting());
