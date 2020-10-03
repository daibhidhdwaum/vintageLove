import React from "react";

const Button = (props) => {
  return (
    <button type="submit" className="button" onClick={props.onSumit}>
      Submit
    </button>
  );
};

export default Button;
