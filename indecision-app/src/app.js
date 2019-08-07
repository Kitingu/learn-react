class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button>What should I do?</button>;
  }
}

class Options extends React.Component {
  render() {
    return <p>Options component here</p>;
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Add Options component here</p>;
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
    {/* the componenent being called for rendering */}
  </div>
);
ReactDOM.render(jsx, document.getElementById("app"));
// every react component must include render method
// every class must start with caps in react
