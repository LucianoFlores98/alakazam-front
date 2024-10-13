import React from "react";
import { Stepper, Step, Button, Typography, Card } from "@material-tailwind/react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

// Props para los hijos que contendrán los campos del formulario
interface Props {
  childrenArray: React.ReactNode[];
  steps: number;
}

const FormsStepper: React.FC<Props> = ({ childrenArray, steps }) => {
  // Manejo del estado para el paso activo
  const [activeStep, setActiveStep] = React.useState(0);
  const stepsArray = Array.from({ length: steps }, (_, index) => index);

  // Validar si es el primer y último paso
  const isFirstStep = activeStep === stepsArray[0];
  const isLastStep = activeStep === stepsArray[stepsArray.length - 1];

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
      <div className="flex flex-col w-11/12 max-w-screen-xl mx-auto gap-6">
        <Stepper activeStep={activeStep} className="w-[100%]">
          {stepsArray.map((index) => (
            <Step onClick={() => setActiveStep(index)}>{index+1}</Step>
          ))} 
        </Stepper>

        <Typography
          className="text-3xl text-white">
            Crear publicación
        </Typography>
        <Card className="w-[100%] p-[2rem] min-h-[450px] m-auto">
          {/* Renderizar el contenido del paso actual */}
          {childrenArray.map((children, index) => (
            <span className={`${activeStep === index ? "" : "hidden"}`}>
              {children}
            </span> 
          ))}

          {/* Botones de navegación */}
          <div className="mt-auto flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Atrás
            </Button>

            {!isLastStep && (
              <Button onClick={handleNext}>
                Siguiente
              </Button>
            )}
            {isLastStep && (
              <Button>
                <Link to={"/"}>
                  Enviar
                </Link>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </FormProvider>
  );
};

export default FormsStepper;

