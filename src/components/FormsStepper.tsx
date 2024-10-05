import React from "react";
import { Stepper, Step, Button, Typography, Card } from "@material-tailwind/react";
import { useForm, FormProvider } from "react-hook-form";

// Props para los hijos que contendrán los campos del formulario
interface Props {
  children: React.ReactNode;
}

const FormsStepper: React.FC<Props> = ({ children }) => {
  // Manejo del estado para el paso activo
  const [activeStep, setActiveStep] = React.useState(0);

  // Validar si es el primer y último paso
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === 2; // Ajustar según el número de pasos

  // Configuración de React Hook Form
  const methods = useForm({
    mode: "onChange", // para validaciones en tiempo real
  });

  // Avanzar al siguiente paso
  const handleNext = methods.handleSubmit(() => {
    if (!isLastStep) {
      setActiveStep((prev) => prev + 1);
    }
  });

  // Retroceder al paso anterior
  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-11/12 mx-auto">
        <Stepper activeStep={activeStep} className="mb-4">
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
        </Stepper>

        <Card className="p-6">
          <Typography
            variant="h2"
            color="black"
            className="mb-6 font-medium leading-[1.5]"
          >
            Crear nueva Publicación
          </Typography>

          {/* Renderizar el contenido del paso actual */}
          {children}

          {/* Botones de navegación */}
          <div className="mt-8 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Atrás
            </Button>

            <Button onClick={handleNext}>
              {isLastStep ? "Enviar" : "Siguiente"}
            </Button>
          </div>
        </Card>
      </div>
    </FormProvider>
  );
};

export default FormsStepper;



/* import React from "react";
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
