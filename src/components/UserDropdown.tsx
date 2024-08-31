import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function UserDropdown() {

  return (
    <Menu>
      <MenuHandler>
        <div className="flex gap-3 items-center cursor-pointer border border-1 border-akzm_gray p-1 rounded-full">
          <span className="material-symbols-rounded text-2xl text-darker">
            menu
          </span>
          <Avatar variant="circular" alt="tania andrew" className="" size="sm"
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </MenuHandler>
      <MenuList className="rounded-xl">
        
        <MenuItem disabled className="opacity-100 flex items-center justify-start gap-2">
            <span className="gap-1">
            <Typography variant="paragraph" className="font-bold text-dark">
                Nombre De Usuario
              </Typography>
              <Typography variant="small" className="font-medium text-akzm_orange opacity-60">
                @nombre_usuario
              </Typography>
            </span>
        </MenuItem>
        <hr className="my-1 pointer-events-none border-gray-300" />

        <Link to="/profile">
          <MenuItem className="flex items-center justify-start gap-2 group">
              <span className="material-symbols-rounded text-akzm_orange group-hover:brightness-125 transition-all">account_circle</span>
              <Typography variant="paragraph" className="font-medium text-dark group-hover:text-akzm_red transition-all">
                Mi perfil
              </Typography>
          </MenuItem>
        </Link>

        <MenuItem className="flex items-center justify-start gap-2 group">
          <span className="material-symbols-rounded text-akzm_orange group-hover:brightness-125 transition-all">favorite</span>
          <Typography variant="paragraph" className="font-medium text-dark group-hover:text-akzm_red transition-all">
            Favoritos
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center justify-start gap-2 group">
          <span className="material-symbols-rounded text-akzm_orange group-hover:brightness-125 transition-all">house</span>
          <Typography variant="paragraph" className="font-medium text-dark group-hover:text-akzm_red transition-all">
            Mis inmuebles
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center justify-start gap-2 group">
          <span className="material-symbols-rounded text-akzm_orange group-hover:brightness-125 transition-all">notifications</span>
          <Typography variant="paragraph" className="font-medium text-dark group-hover:text-akzm_red transition-all">
            Notificaciones
          </Typography>
        </MenuItem>

        <hr className="my-3 pointer-events-none border-gray-300" />

        <MenuItem className="flex items-center justify-start gap-2 group">
          <span className="material-symbols-rounded text-gray-500 group-hover:text-danger transition-all ">logout</span>
          <Typography variant="small" className="font-medium text-akzm_gray group-hover:text-danger transition-all">
            Cerrar sesión
          </Typography>
        </MenuItem>

      </MenuList>
    </Menu>
  );
}