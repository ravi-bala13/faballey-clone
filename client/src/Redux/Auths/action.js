import { ADD_TODO } from "./actionTypes";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});
