import React from "react";
const Form = () => {
  return (
    <form className="form-css">
      <label class="form-label">Full Name</label>
      <br />
      <input class="input-css" type="text" placeholder="Steve Jobs" />
      <br />
      <label class="form-label">Display Name</label>
      <br />
      <input class="input-css" type="text" placeholder="Steve" />
    </form>
  );
};
export default Form;
