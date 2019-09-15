import React from "react";

const Button = props => {
  const { onClick, className, value, type = "" } = props;
  return (
    <button
      onClick={() => type.toLowerCase() !== "submit" && onClick()}
      className={className}
      type={type}
    >
      {value}
    </button>
  );
};

export default Button;
