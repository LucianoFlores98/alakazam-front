// import { useLocation, useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form"

// import { loginRequest } from "../services/auth";

interface IFormInput {
  email: string,
  password: string
}

interface User {
  id: number;
  name: string;
}

interface Props {
  user: User;
}

const Login: React.FC<Props> = () => {

/*   const navigate = useNavigate();
  const location = useLocation(); */

/*   console.log(location.state);
  console.log(location.state.from.path); */

  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit:SubmitHandler<IFormInput> = async () => {
    console.log("Submiteadd")
  /*     const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
  */
  /*     const resLogin = await loginRequest(email,password);
    console.log(resLogin); */
    // navigate(location.state);
  }; 
  

  return (
    <div className="flex justify-center items-center ">
      <Card color="white" shadow={false} className="px-5 py-4 mt-4 ">
        <Typography variant="h4" color="blue-gray" className="justify-center text-center">
          Inicio de sesión
        </Typography>

        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(data => console.log(data))}>
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              id="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register('email')}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register('password')}

            />
          </div>
          
          <Button className="mt-6 bg-success" type="submit" fullWidth>
            Ingresar
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default Login;
