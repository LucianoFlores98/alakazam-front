import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { zodResolver} from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from "react-hook-form"
import { loginSchema } from '../models/validations/loginSchema';
import { loginRequest, profileRequest } from '../services/auth';
import { useAuthStore } from '../store/auth';

interface IFormInput{
  email:string,
  password: string,
}

interface User {
  id: number;
  name: string;
}

interface Props {
  user: User;
}

// Función para manejar los iconos SVG
const Icon: React.FC<{ name: string }> = ({ name }) => (
  <img 
    src={`/icons/${name}.svg`}
    alt={`${name} Icon`}
    style={{ width: '20px', height: '20px', marginRight: '8px' }}
  />
);

const LoginPopUp: React.FC<Props> = () => {

  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state => state.setProfile)

  const [isOpen, setIsOpen] = useState(false); //Apertura y cierre del dialog
  // Funciones para abrir y cerrar el diálogo
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    reset(); // Reseteamos el formulario al cerrar el diálogo
  };

  const { register, handleSubmit, formState:{errors}, reset} = useForm<IFormInput>({ //Funcionalidades de react form que se utilizaran
    resolver: zodResolver(loginSchema), //para utilizar zod con react hook form
  })

  //Funcion para manejar el envio del form
  const onSubmit: SubmitHandler<IFormInput> = async (dataForm) => {
    try{
      //intento de inicio de sesion
      const resLogin = await loginRequest(dataForm.email, dataForm.password);
      setToken(resLogin.data.token);

      //Si es exitoso, se muestra el perfil
      const resProfile = await profileRequest();
      setProfile(resProfile.data.profile);

      //Se cierra el dialog
      handleClose();

      console.log('Inicio de sesion exitoso');
    }catch(error) {
      console.error('Error en el inicio de sesion', error);
    }
  };

  const handleGoogleLogin = async() => {
    //logica para iniciar sesion con gulugulu
    console.log('Inicio de sesion con Google');
  };

  const handleFacebookLogin = async() => {
    //logica para iniciar sesion con facebuk
    console.log('Inicio de sesion con Facebook');
  };

  return (
    <>
      <Button onClick={handleOpen}>Ingresar</Button>
      <Dialog
        size="xs"
        open={isOpen}
        handler={handleClose}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient" 
            color="blue" 
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Iniciar sesión  
            </Typography>
          </CardHeader>
          <CardBody className='flex flex-col gap-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <Input
                type='email'
                label='Correo Electronico'
                size='lg'
                {...register("email")}
                error={!!errors.email}
              />
              {errors.email && (
                <Typography color="red" className="text-xs">
                  {errors.email.message}
                </Typography>
              )}
              <Input 
                type="password"
                label="Contraseña"
                size="lg"
                {...register('password')}
                error={!!errors.password}
              />
              {errors.password && (
                <Typography color="red" className="text-xs">
                  {errors.password.message}
                </Typography>
              )}
              <Button type='submit' fullWidth>
                Iniciar Sesion
              </Button>
            </form>
          </CardBody>
          <CardFooter className='pt-0'>
            <div className="flex flex-col gap-4">
                {/* Botones para inicio de sesión con Google y Facebook */}
                <Button
                  variant="outlined"
                  color="blue-gray"
                  className="flex items-center justify-center gap-3"
                  onClick={handleGoogleLogin}
                >
                  <Icon name="googleIconLogin" />
                  Continuar con Google
                </Button>
                <Button
                  variant="outlined"
                  color="blue"
                  className="flex items-center justify-center gap-3"
                  onClick={handleFacebookLogin}
                >
                  <Icon name="facebookIconLogin" />
                  Continuar con Facebook
                </Button>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default LoginPopUp;