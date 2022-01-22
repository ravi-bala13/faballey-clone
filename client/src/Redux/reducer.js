import { ADD_TODO } from "./actionTypes";

const init = { userid: "" };

export const reducer = (state = init, { type, payload }) => {
  console.log("state from redu:", state);
  switch (type) {
    case ADD_TODO:
      return state;

    default:
      return state;
  }
};
