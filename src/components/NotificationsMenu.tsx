/* import { Badge, Button } from "@material-tailwind/react";
 
export function Notifications() {
  return (
    <Badge content="5"  className="bg-">
      <Button>
      <span className="material-symbols-rounded text-sm text-darker group-hover:text-akzm_red transition-all">
        notifications
      </span>
      </Button>
    </Badge>
  );
} */
  import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Avatar,
    Typography,
    // Badge,
  } from "@material-tailwind/react";

  
  export function NotificationsMenu() {
    return (
      <Menu>
        <MenuHandler>
              <IconButton variant="text" className="rounded-full text-center text-sm transition-all text-darker hover:bg-slate-100 ">
                {/* <Badge> */}
                <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
                {/* </Badge> */}
              </IconButton>
        </MenuHandler>
        <MenuList className="flex flex-col gap-2 items-start">
          <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
            <Avatar
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="flex flex-col gap-1">
              <Typography variant="small" color="gray" className="font-semibold">
                Juan te envió un mensaje.
              </Typography>
              <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
              <span className="material-symbols-rounded text-sm">schedule</span>Hace 10 Min.
              </Typography>
            </div>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
            <Avatar
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            />
            <div className="flex flex-col gap-1">
              <Typography variant="small" color="gray" className="font-semibold">
                Natali Realizo un comentario en una de tus publicaciones.
              </Typography>
              <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                <span className="material-symbols-rounded text-sm">schedule</span>Hace 30 Min.
              </Typography>
            </div>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
            <Avatar
              variant="circular"
              alt="paypal"
              src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
            />
            <div className="flex flex-col gap-1">
              <Typography variant="small" color="gray" className="font-semibold">
                Recibiste un pago.
              </Typography>
              <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
              <span className="material-symbols-rounded text-sm">schedule</span>Hace 5 horas
              </Typography>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }