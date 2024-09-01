import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

interface User {
  id: number;
  name: string;
} 

interface Props {
  user: User
}

const Login: React.FC<Props> = ({user}) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state)
  console.log(location.state.from.path)
  
  const handleClick = () => {
    
    navigate(location.state)
  }

  return(
    <div className="flex max-w-full flex-wrap h-max bg-gray-100">
        {
          user ? (
            <Button onClick={handleClick}>Logout</Button>
          ): (
            <Button onClick={handleClick}>Login</Button>
          )
        } 
    </div>
  );
}

export default Login;