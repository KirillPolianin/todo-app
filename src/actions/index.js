export const ADD_TODO = 'add_todo';
export const DELETE_TODO = 'delete_todo';
export const CLEAR_TODOS = 'clear_todos';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  };
};
