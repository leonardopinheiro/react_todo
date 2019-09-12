import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "adicionar contador de tasks realizadas, restantes e apagadas",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "previnir tasks em branco",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "atencao chegou chatuba em",
        completed: false
      }
    ]
  };

  //Toogle complete

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete todo

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {" "}
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />{" "}
          {/* passa os todos para todos.js como props*/}
        </div>
      </div>
    );
  }
}
export default App;
