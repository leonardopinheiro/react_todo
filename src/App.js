import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

import "./App.css";

const bottomStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "18px"
};

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
    const completedTodos = () => {
      return this.state.todos.filter(todos => todos.completed).length;
    };
    return (
      <div className="App">
        <div className="container">
          {" "}
          <Header />
          <p style={bottomStyle}>
            {"Total de tarefas: " + this.state.todos.length}
            <br />
            <br />
            {"Tarefas realizadas: " + completedTodos()}
          </p>
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
