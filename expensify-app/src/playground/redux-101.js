import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;

      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy == "number" ? action.decrementBy : 1;

      return {
        count: state.count - decrementBy
      };

    case "SET":
      return {
        count:  action.count
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };

    default:
      return state;
  }
});
/**
 * Adds a change listener.
 * It will be called any time an action is dispatched,
 * and some part of the state tree may potentially
 *  have changed. You may then call getState()
 *  to read the current state tree inside the callback.
 */
// store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

// unsubscribe()

store.dispatch({
  type: "DECREMENT",
  decrementBy: 2
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "SET",
  count: 101
});
