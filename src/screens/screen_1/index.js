import React from "react";
import { Heading, Button, Form } from "../../components";

const ScreenOne = () => {
  return (
    <div className="container">
      <Heading
        main="Welcome! First things first..."
        sub="You can always change them later."
      />
      <Form />
      <Button text="Create WorkSpace" nav="/screentwo" />
    </div>
  );
};

export default ScreenOne;
