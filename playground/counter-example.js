let count = 0;
/**
 * classes are defined as className in jsx coz it is a reserved keyword
 */
const myId = "add";
const addOne = () => {
  count += 1;
  renderCounterApp();
  console.log("addOne");
};
const minusOne = () => {
  count -= 1;
  renderCounterApp();
  console.log("addOne");
};
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log("reset");
};



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count} </h1>
      <button id={myId} onClick={addOne} className='btn'>
        +1
      </button>
      <button onClick={minusOne} className='btn'>
        -1
      </button>
      <button onClick={reset} className='btn'>
        reset
      </button>
    </div>
  );

};

renderCounterApp();
