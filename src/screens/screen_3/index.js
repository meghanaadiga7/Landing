import React from "react";
import { Heading, Button, Card } from "../../components";

const ScreenThree = () => {
  return (
    <div className="container">
      <Heading
        main="How are you planning to use Eden?"
        sub="We'll streamline your setup experience accordingly."
      />

      <Card
        sub="For Myself"
        text="Write better.Think more clearly.Stay organized."
      />
      <Button text="Create WorkSpace" nav="/screenfour" />
    </div>
  );
};

export default ScreenThree;
