class IndecisionApp extends React.Component {
  render() {
    const title = "indecision";
    const subTitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
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
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Add Options component here</p>;
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
