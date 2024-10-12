import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

type MenuItemType = {
  key: string;
  label: string;
};

const menuItems: MenuItemType[] = [
  { key: "recomendados", label: "Recomendados" },
  { key: "calificación", label: "Calificación" },
  { key: "precio", label: "Precio" },
  { key: "distancia", label: "Distancia" },
  { key: "fecha", label: "Fecha de publicación" },
];

const directionItems: MenuItemType[] = [
  { key: "descendente", label: "Descendente" },
  { key: "ascendente", label: "Ascendente" },
];

const OrderBy = () => {
  const [selectedKey, setSelectedKey] = React.useState<string>("recomendados");
  const [selectedDirection, setSelectedDirection] = React.useState<
    string | null
  >(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleSelectionChange = (key: string) => {
    if (key === "recomendados") {
      setSelectedKey(key);
      setSelectedDirection(null); // Restablecer la dirección al seleccionar "Recomendados"
    } else if (directionItems.some((item) => item.key === key)) {
      setSelectedDirection(key);
    } else {
      setSelectedKey(key);
      setSelectedDirection("descendente"); // Seleccionar "descendente" por defecto para otros ítems
    }
    setOpenMenu(false);
  };

  // Determinar la flecha de dirección
  const directionIcon = (
    <span
      className={`material-symbols-rounded text-primary_2 transition-transform ${
        selectedDirection === "ascendente" ? "rotate-180" : "rotate-0"
      }`}
    >
      keyboard_arrow_down
    </span>
  );

  const checkIcon = <span className="material-symbols-rounded text-sm text-primary_2">check</span>;

  // Mostrar el valor seleccionado y la flecha si no es "Recomendados"
  const selectedValue = (
    <>
      {menuItems.find((item) => item.key === selectedKey)?.key ||
        "Recomendados"}{" "}
      {selectedKey !== "recomendados" && directionIcon}
    </>
  );

  return (
    <div className="flex items-center">
      <span>Ordenar Por:</span>
      <Menu open={openMenu} handler={setOpenMenu}>
        <MenuHandler>
          <Button
            variant="text"
            size="sm"
            className="flex items-center gap-1 py-1 px-2 text-base font-normal capitalize tracking-normal outline-none focus:outline-none hover:bg-transparent hover:text-akzm_red"
          >
            {selectedValue}
          </Button>
        </MenuHandler>
        <MenuList>
          {menuItems.map(({ key, label }) => (
            <MenuItem
              key={key}
              onClick={() => handleSelectionChange(key)}
              className={"px-2 py-1 flex justify-between items-center"}
            >
              <Typography className="text-darker text-sm">{label}</Typography>
              {selectedKey == key && checkIcon}
            </MenuItem>
          ))}
          <hr className="my-1 hover:border-none" />
          {directionItems.map(({ key, label }) => (
            <MenuItem
              key={key}
              onClick={() => handleSelectionChange(key)}
              className={`${selectedKey === "recomendados" ? "opacity-50 cursor-not-allowed" : "" } px-2 py-1 flex justify-between items-center`}
              disabled={selectedKey === "recomendados"}
            >
              <Typography className="text-darker text-sm">{label}</Typography>
              {selectedDirection == key && checkIcon}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default OrderBy;
