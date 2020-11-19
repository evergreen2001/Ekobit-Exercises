import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: ["Go to school"],
  };
  render() {
    return (
      <div>
        <h1>TodoList</h1>

        <Todo todo={this.state.todos} />
      </div>
    );
  }
}
