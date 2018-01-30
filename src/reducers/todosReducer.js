import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../actions';
import { bake_cookie, read_cookie } from 'sfcookies';

const todo = action => {
  return {
    text: action.payload.text,
    dueDate: action.payload.dueDate,
    id: Math.random()
  };
};

const removeById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
};

export default (state = [], action) => {
  let todos = null;
  state = read_cookie('todos');
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      bake_cookie('todos', todos);
      return todos;
    case DELETE_TODO:
      todos = removeById(state, action.payload);
      bake_cookie('todos', todos);
      return todos;
    case CLEAR_TODOS:
      todos = [];
      bake_cookie('todos', todos);
      return todos;
    default:
      return state;
  }
};
