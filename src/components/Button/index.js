import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  console.log(props);

  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(props["nav"]);
      }}
      type="button"
      className="btn-four btn btn-css"
    >
      {props.text}
    </button>
  );
};
export default Button;
