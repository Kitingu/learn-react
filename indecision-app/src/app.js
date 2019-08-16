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
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
