// import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Typography} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { loginSchema } from "../models/validations/loginSchema";
import { loginRequest, profileRequest } from "../services/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { Doggy } from "../components/Buddy/Doggy";

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
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      
        <div className="w-1/2 h-screen hidden lg:flex flex-col justify-between bg-gradient-to-t from-primary/60 to-white">
          <div className="flex justify-center pt-32 mb-24">
            <img src="/public/HomeAlakazam2.png" height="400" width="400" alt="" />
          </div>
          <div className="flex justify-center pt-24">
          <Doggy />
          </div>
        </div>


        <div className="lg:p-36 md:p-52 sm:20 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Iniciar Sesion</h1>
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
            
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
              <label for="remember" className="text-gray-600 ml-2">Recordarme</label>
            </div>
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">Has olvidado la contraseña?</a>
            </div>

            {/** ------------ Submit ------------ */}
            <Button className="mt-6 bg-primary_2" type="submit" fullWidth>
              Ingresar
            </Button>

          </form>
          </div>
    </div>
  );
};

export default Login;

{/* <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
<div class="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" class="object-cover w-full h-full">
</div>
<!-- Right: Login Form -->
<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500">
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Sign up Here</a>
  </div>
</div>
</div> */}