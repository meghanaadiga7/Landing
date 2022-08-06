import React from "react";
import { Heading, Button } from "../../components";
const ScreenFour = () => {
  return (
    <div class="container fourth">
      <i class="fa-solid fa-circle-check fa-3x"></i>
      <Heading
        main="Congratulations, Eren!"
        sub="You have completed onboarding, you can start using the Eden."
      />
      <Button text="Lauch Eden" nav="/screenfour" />
    </div>
  );
};

export default ScreenFour;
