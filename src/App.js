import React from "react";
import Todos from "./components/Todos/Todos";
import Header from "./components/Header/Header";
import AddTodo from "./components/Todos/AddTodo";
import uuid from "uuid";

import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 123,
        title: "adicionar contador de tasks realizadas, restantes e apagadas",
        completed: false
      },
      {
        id: 456,
        title: "previnir tasks em branco",
        completed: false
      },
      {
        id: 789,
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

  completedTodos = () => {
    return this.state.todos.filter(todo => todo.completed).length;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {" "}
          <Header
            titulo="Esse é o meu novo Titulo"
            numberOfTodos={this.state.todos.length}
            numberOfCompletedTodos={this.completedTodos()}
          />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
