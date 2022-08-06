import React from "react";
const FormSec = () => {
  return (
    <form className="form-css">
      <label class="form-label">WorkSpace Name</label>
      <br />
      <input class="input-css" type="text" placeholder="Eden" />
      <br />
      <label class="form-label">
        WorkSpace URL<spam class="text-muted"> (optional)</spam>
      </label>
      <br />
      <input class="input-css" type="text" placeholder="Example" />
    </form>
  );
};
export default FormSec;
