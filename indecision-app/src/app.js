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
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);

    alert("handleRemove");
  }
  render() {
    return (
      //bind this for the render method
      <div>
        <button onClick={this.handleRemoveAll}>Remove All?</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='option' />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// this is only available to render and class methods
