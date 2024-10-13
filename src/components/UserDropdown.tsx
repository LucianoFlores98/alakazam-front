import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import LoginPopUp from "./LoginPopUp";

interface User {
  id: number;
  name: string;
}

export function UserDropdown() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const user: User = {id:1, name:"Juanito el turista"};

  return (
    <Menu>
      <MenuHandler>
        <Card className="flex flex-row gap-3 items-center cursor-pointer px-2 py-1 rounded-full hover:shadow-xl transition duration-300">
          <span className="material-symbols-rounded text-xl text-akzm_gray">
            menu
          </span>
          <Avatar
            variant="circular"
            alt="user profile"
            className="hidden md:block"
            size="sm"
            src={
              isAuth
                ? "https://media.istockphoto.com/id/1392783238/es/foto/retrato-de-una-adolescente-sonriente-mirando-a-la-c%C3%A1mara-sobre-un-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=y5kP9CeEnicrQq0hGq0jp6OvGK-yQXY0bihAAfoqshs="
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
          />
        </Card>
      </MenuHandler>
      <MenuList className="rounded-xl">
        {isAuth ? (
          <>
            <MenuItem
              disabled
              className="opacity-100 flex items-center justify-start gap-2"
            >
              <span className="gap-1">
                <Typography variant="paragraph" className="font-bold text-dark">
                  Yuliana Alvez
                </Typography>
                <Typography
                  variant="small"
                  className="text-darker opacity-60"
                >
                  @yuli_205
                </Typography>
              </span>
            </MenuItem>
            <hr className="my-1 pointer-events-none border-gray-300" />

            <Link to="/my-profile">
              <MenuItem className="flex items-center justify-start gap-2 group">
                <span className="material-symbols-rounded text-darker group-hover:text-akzm_red transition-all">
                  account_circle
                </span>
                <Typography
                  variant="paragraph"
                  className="text-dark group-hover:text-akzm_red transition-all"
                >
                  Mi perfil
                </Typography>
              </MenuItem>
            </Link>

            <MenuItem className="flex items-center justify-start gap-2 group">
              <span className="material-symbols-rounded text-darker group-hover:text-akzm_red transition-all">
                favorite
              </span>
              <Typography
                variant="paragraph"
                className="text-dark group-hover:text-akzm_red transition-all"
              >
                Favoritos
              </Typography>
            </MenuItem>

            <MenuItem className="flex items-center justify-start gap-2 group">
              <span className="material-symbols-rounded text-darker group-hover:text-akzm_red transition-all">
                house
              </span>
              <Typography
                variant="paragraph"
                className="text-dark group-hover:text-akzm_red transition-all"
              >
                Mis inmuebles
              </Typography>
            </MenuItem>

            <hr className="my-3 pointer-events-none border-gray-300" />

            <MenuItem className="flex items-center justify-start gap-2 group">
              <span className="material-symbols-rounded text-gray-500 group-hover:text-danger transition-all ">
                logout
              </span>
              <Typography
                variant="small"
                className="text-akzm_gray group-hover:text-danger transition-all"
              >
                <button onClick={logout}>Cerrar sesión</button>
              </Typography>
            </MenuItem>
          </>
        ) : (
          <LoginPopUp user={user}/>
        )}
      </MenuList>
    </Menu>
  );
}
