import React, { useState, useEffect } from 'react';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from '../models/validations/loginSchema';
import { loginRequest, profileRequest } from '../services/auth';
import { useAuthStore } from '../store/auth';
import RegistroExpressUsuario from './RegistroExpressUsuario';

const styles = {
  wave: {
    animation: 'wave 10s ease infinite',
    backgroundSize: '400% 400%',
  } as React.CSSProperties,
};

interface IFormInput {
  email: string,
  password: string,
}

interface User {
  id: number;
  name: string;
}

interface Props {
  user: User;
}

const Icon: React.FC<{ name: string }> = ({ name }) => (
  <img 
    src={`/icons/${name}.svg`}
    alt={`${name} Icon`}
    className="w-5 h-5 mr-2"
  />
);

const injectGlobalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes wave {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  document.head.appendChild(style);
};

const LoginPopUp: React.FC<Props> = () => {
  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (dataForm) => {
    try {
      const resLogin = await loginRequest(dataForm.email, dataForm.password);
      setToken(resLogin.data.token);

      const resProfile = await profileRequest();
      setProfile(resProfile.data.profile);

      handleClose();
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
    }
  };

  const handleGoogleLogin = async () => {
    console.log('Inicio de sesión con Google');
  };

  const handleFacebookLogin = async () => {
    console.log('Inicio de sesión con Facebook');
  };

  useEffect(() => {
    injectGlobalStyles();
  }, []);

  return (
    <>
      <Button 
        onClick={handleOpen} 
        variant="outlined" 
        color="deep-orange" 
        className="rounded-lg hover:bg-deep-orange-50 transition-all duration-300" fullWidth
      >
        Ingresar
      </Button>
      <Dialog
        size="xs"
        open={isOpen}
        handler={handleClose}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] shadow-xl">
          <CardHeader
            variant="gradient" 
            color="deep-orange"
            className="mb-4 grid h-28 place-items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-deep-orange-500 to-orange-300" style={styles.wave} />
            <Typography variant="h3" color="white" className="relative z-10 font-bold">
              Alakazam
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <Input
                type="email"
                label="Correo Electrónico"
                size="lg"
                {...register("email")}
                error={!!errors.email}
                icon={<Icon name="iconEmail" />}
              />
              {errors.email && (
                <Typography color="red" className="text-xs mt-1">
                  {errors.email.message}
                </Typography>
              )}
              <Input 
                type="password"
                label="Contraseña"
                size="lg"
                {...register('password')}
                error={!!errors.password}
                icon={<Icon name="passKey" />}
              />
              {errors.password && (
                <Typography color="red" className="text-xs mt-1">
                  {errors.password.message}
                </Typography>
              )}
              <Button 
                type="submit" 
                color="deep-orange"
                className="rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                fullWidth
              >
                Iniciar Sesión
              </Button>
            </form>
            <Typography variant="small" className="text-center flex flex-col">
              ¿No tienes una cuenta?{" "}
              <RegistroExpressUsuario/>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="flex items-center justify-center mb-3">
              o continúa con
            </Typography>
            <div className="flex flex-col gap-3">
              <Button
                variant="outlined"
                color="blue-gray"
                className="flex items-center justify-center gap-2 rounded-full hover:bg-blue-gray-50 transition-all duration-300"
                onClick={handleGoogleLogin}
              >
                <Icon name="googleIconLogin" />
                Continuar con Google
              </Button>
              <Button
                variant="outlined"
                color="blue"
                className="flex items-center justify-center gap-3 rounded-full hover:bg-blue-50 transition-all duration-300"
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