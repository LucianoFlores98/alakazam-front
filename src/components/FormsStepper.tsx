import React from "react";
import { Stepper, Step, Button, Typography, Card } from "@material-tailwind/react";

interface Props {
  children: React.ReactNode;
}

const FormsStepper: React.FC<Props> = ({ children }) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


  return(
    <div className="w-11/12 mx-auto">
      <Stepper
      className="mb-4"
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className="bg-white" onClick={() => setActiveStep(0)}>1</Step>
        <Step className="bg-white" onClick={() => setActiveStep(1)}>2</Step>
        <Step className="bg-white" onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <Card className="p-6">

        <Typography variant="h2"
            color="black"
            className="mb-6 font-medium leading-[1.5]">Crear nueva Publicación</Typography>
        {children}
        <div className="mt-8 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Atrás
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Siguiente
          </Button>
        </div>
      </Card>
    </div>
  );

}

export default FormsStepper



/**
import React from "react";
import { Stepper, Step, Button, Typography, Card } from "@material-tailwind/react";

interface Props {
  children: React.ReactNode;
}

const FormsStepper: React.FC<Props> = ({ children }) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


  return(
    <Card className="w-11/12 mx-auto p-6">
      <Stepper
      className="mb-4"
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <Typography variant="h2" color="black" className="mb-6 font-medium leading-[1.5]">
        Crear Publicación
      </Typography>
      {children}
      <div className="mt-8 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </Card>
  );

}

export default FormsStepper
*/
