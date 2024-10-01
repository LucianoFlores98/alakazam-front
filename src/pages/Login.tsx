// import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Input, Button, Typography} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { loginSchema } from "../models/validations/loginSchema";
import { loginRequest, profileRequest } from "../services/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

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

const Login: React.FC<Props> = () => {
  
  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state => state.setProfile)
  const navigate = useNavigate()

  const { register, handleSubmit, formState:{errors}} = useForm<IFormInput>({ //las funcionalidades de react form que utilizaremos
    resolver: zodResolver(loginSchema), //Para utilizar zod con react hook form
  })

  //----------------- Submit--------------------
  const onSubmit:SubmitHandler<IFormInput> = async (dataForm) => {
    //Logearse, obtener token y guardarlo en el store utilizando setToken
    try {
      const resLogin = await loginRequest(dataForm.email, dataForm.password)
      setToken(resLogin.data.token);
      navigate('/')
    } catch(error){
      console.log(error)
    }

    //Obtener info del perfil y guardarlo en el store utilizando setToken
    try {
      const resProfile = await profileRequest();
      setProfile(resProfile.data.profile)
    } catch (error) {
      console.error(error);
    } 

  }; 
  
  return (
    <div className="flex justify-center items-center ">
      
      <Card color="white" shadow={false} className="px-5 py-4 mt-4 ">
        <Typography variant="h4" color="blue-gray" className="justify-center text-center">
          Inicio de sesión
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-2">
            {/** ------------ Email ------------ */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              id="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              error={!!errors.email}
              {...register('email')}
            />
            {
            errors.email?.message && //Si ocurre un error mostramos una sugerencia
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >{errors.email.message}</Typography>
            }

            {/** ------------ Password ------------ */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              error={!!errors.password} // Para mostrar la variante de tipo error del input
              {...register('password')}
            />
            {
            errors.password?.message && //Si ocurre un error mostramos una sugerencia
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >{errors.password.message}</Typography>
            }
          </div>
          
          {/** ------------ Submit ------------ */}
          <Button className="mt-6 bg-success" type="submit" fullWidth>
            Ingresar
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default Login;
