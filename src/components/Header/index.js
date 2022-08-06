import React from "react";
const Heading = (props) => {
  return (
    <div>
      <h1>{props.main}</h1>
      <p>{props.sub}</p>
    </div>
  );
};
export default Heading;
