import React from "react";
import "./index.css";

const Header = props => {
  return (
    <header>
      <h1>{props.titulo}</h1>

      <p>
        {`Total de tarefas: ${props.numberOfTodos}`}
        <br />
        <br />
        {`Tarefas realizadas: ${props.numberOfCompletedTodos}`}
      </p>
    </header>
  );
};

export default Header;
