import React from "react";
import { Heading, FormSec, Button } from "../../components";

const ScreenTwo = () => {
  return (
    <div className="container">
      <Heading
        main="Let's set up a home for all your work"
        sub="You can always create another workspace later."
      />
      <FormSec />
      <Button text="Create WorkSpace" nav="/screenthree" />
    </div>
  );
};

export default ScreenTwo;
