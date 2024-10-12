import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({isAllowed,children,redirectTo = "/login"}: Props) => {
  if (!isAllowed) return <Navigate to={redirectTo} />;

  

  return children ? children : <Outlet />;
};


/* import { Navigate, useLocation, Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode; //el ? indica que no necesariamente se puede recibir un children
  isAllowed: boolean
}

const ProtectedRoute: React.FC<Props> = ({ isAllowed, children }) => {
  
  //Para almacenar la ubicacion de donde está al usuario para redireccionarlo otra vez donde estaba
  const location = useLocation()
  
  if (!isAllowed){
    <Navigate to="/login" state={{location}}/>
  }

  //si existe un children que devuelva ese children, sino el outlet(donde estan varias rutas anidadas)
  return children ? children : <Outlet />
}

export default ProtectedRoute */