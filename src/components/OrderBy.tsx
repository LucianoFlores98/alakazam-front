import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

type MenuItem = {
  key: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { key: "recomendados", label: "Recomendados" },
  { key: "precio_bajo", label: "Precio: Más bajo" },
  { key: "precio_alto", label: "Precio: Más alto" },
  { key: "mas_cerca", label: "Distancia: Más cerca" },
  { key: "mas_lejos", label: "Distancia: Más lejos" },
  { key: "recientes", label: "Fecha de publicación: Más recientes" },
  { key: "antiguos", label: "Fecha de publicación: Más antiguos" },
];

const OrderBy = () => {
  const [selectedKey, setSelectedKey] = React.useState<string>("recomendados");
  const [openMenu, setOpenMenu] = React.useState(false);

  const selectedValue =
    menuItems.find((item) => item.key === selectedKey)?.key.replace("_", " ") ||
    "Recomendados";

  const handleSelectionChange = (key: string) => {
    setSelectedKey(key);
    setOpenMenu(false);
  };

  return (
    <div className="flex items-center gap-2">
      <span>Ordenar Por:</span>
      <Menu open={openMenu} handler={setOpenMenu} /* allowHover */>
        <MenuHandler>
          <Button
            variant="text"
            size="sm"
            className="flex items-center gap-1 p-0 text-base font-normal capitalize tracking-normal bg-transparent hover:bg-transparent hover:text-primary rounded-md"
          >
            {/* Ordenar por: */ selectedValue}
            <span
              className={`material-symbols-rounded text-primary_2 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </Button>
        </MenuHandler>
        <MenuList className="rounded-xl">
          {menuItems.map(({ key, label }) => (
            <MenuItem
              key={key}
              onClick={() => handleSelectionChange(key)}
              // className="flex items-center justify-between gap-0 px-0 py-0 rounded-lg"
              className={`${
                selectedKey === key ? "bg-primary font-bold" : ""
              } px-2 py-0 rounded-lg`}
            >
              <Typography color="blue-gray">{label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default OrderBy;
