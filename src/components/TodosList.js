import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { deleteTodo, clearTodos } from '../actions';

class TodosList extends Component {
  renderTodos = () =>
    this.props.todos.map(todo => (
      <li key={todo.id} className="list-group-item">
        <div className="list-item">
          <div>{todo.text}</div>
          <div>
            <em>{moment(new Date(todo.dueDate)).fromNow()}</em>
          </div>
        </div>
        <div
          className="list-item delete-button"
          onClick={() => this.props.deleteTodo(todo.id)}
        >
          &#x2715;
        </div>
      </li>
    ));

  render = () => (
    <div className="col-sm-4">
      <ul className="list-group">{this.renderTodos()}</ul>
      <button
        className="btn btn-danger"
        onClick={() => this.props.clearTodos()}
      >
        Clear Todos
      </button>
    </div>
  );
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, { deleteTodo, clearTodos })(TodosList);
