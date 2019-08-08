class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      count: 0
    };
  }
  addOne() {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      };
    });
  }

  minusOne() {
    this.setState(prevState => {
      return {
        count: (prevState.count -= 1)
      };
    });
  }
  resetCounter() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;
// /**
//  * classes are defined as className in jsx coz it is a reserved keyword
//  */
// const myId = "add";
// const addOne = () => {
//   count += 1;
//   renderCounterApp();
//   console.log("addOne");
// };
// const minusOne = () => {
//   count -= 1;
//   renderCounterApp();
//   console.log("addOne");
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("reset");
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count} </h1>
//       <button id={myId} onClick={addOne} className='btn'>
//         +1
//       </button>
//       <button onClick={minusOne} className='btn'>
//         -1
//       </button>
//       <button onClick={reset} className='btn'>
//         reset
//       </button>
//     </div>
//   );

// };

// renderCounterApp();
