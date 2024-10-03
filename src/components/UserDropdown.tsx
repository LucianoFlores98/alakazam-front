import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export function UserDropdown() {
  const isAuth = useAuthStore((state) => state.isAuth);

  const logout = useAuthStore((state) => state.logout);

  return (
    <Menu>
      <MenuHandler>
        <div className="flex gap-3 items-center cursor-pointer border border-1 border-akzm_gray/30 px-2 py-1 rounded-full hover:shadow-md transition duration-300">
          <span className="material-symbols-rounded text-xl text-akzm_gray">
            menu
          </span>
          <Avatar
            variant="circular"
            alt="user profile"
            className=""
            size="sm"
            src={
              isAuth
                ? "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D"
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
          />
        </div>
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
                  Nombre De Usuario
                </Typography>
                <Typography
                  variant="small"
                  className="text-darker opacity-60"
                >
                  @nombre_usuario
                </Typography>
              </span>
            </MenuItem>
            <hr className="my-1 pointer-events-none border-gray-300" />

            <Link to="/profile">
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

            <MenuItem className="flex items-center justify-start gap-2 group">
              <span className="material-symbols-rounded text-darker group-hover:text-akzm_red transition-all">
                notifications
              </span>
              <Typography
                variant="paragraph"
                className="text-dark group-hover:text-akzm_red transition-all"
              >
                Notificaciones
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
          <Link
            className="hover:bg-gray-200"
            to="/login"
          >
            <MenuItem
              disabled
              className="opacity-100 flex items-center justify-start"
            >
                <Typography
                  variant="small"
                  className="text-darker opacity-60"
                >
                Iniciar Sesion
                </Typography>
            </MenuItem>
          </Link>
        )}
      </MenuList>
    </Menu>
  );
}
