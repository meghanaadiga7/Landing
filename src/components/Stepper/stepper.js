import React from "react";
import Stepper from "react-stepper-horizontal";
const Stepe = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1);
  };
  return (
    <div className="stepper-css">
      <Stepper
        steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
        activeStep={0}
        activeColor="blueviolet"
        completeColor="blueviolet"
        defualtColor="whitesmoke"
        defualtBarColor="whitesmoke"
        completeBarColor="blueviolet"
      />
    </div>
  );
};
export default Stepe;
