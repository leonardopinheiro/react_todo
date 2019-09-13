import React, { Component } from "react";
import Button from "../Button";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.title.trim().length > 0) {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "5px" }}
          name="title"
          placeholder="Nova tarefa..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <Button value="Adicionar" className="btn" type="submit" />
      </form>
    );
  }
}

export default AddTodo;
