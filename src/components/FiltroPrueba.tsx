import React, { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
  Radio,
  Checkbox,
} from "@material-tailwind/react";

type categoryItemsType = {
  title: string;
  inputType: string;
  category: string[];
  icon?: string;
};

const categoryItems: categoryItemsType[] = [
  {
    title: "Tipos de Propiedad",
    inputType: "Radio",
    category: ["Casa", "Departamento", "Casa Quinta", "Local", "Oficina", "Quincho", "Habitación"],
  },
  {
    title: "Prueba Checkbox",
    inputType: "Checkbox",
    category: ["Cosa 1", "Cosa 2", "Cosa 3"],
  },
  // Agrega más elementos a la lista si es necesario
];

export function FiltroPrueba() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const getDrawerIcon = (isDrawerOpen: boolean) =>
    isDrawerOpen ? "close" : "filter_alt";

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        <span className="material-symbols-rounded h-8 w-8 stroke-2 flex items-center justify-center">
          {getDrawerIcon(isDrawerOpen)}
        </span>
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} placement="right">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="flex justify-between">
            <div className="mb-2 flex items-center gap-4 p-1">
              <span className="material-symbols-rounded h-8 w-8 flex items-center justify-center">
                filter_alt
              </span>
              <Typography variant="h5" color="blue-gray">
                Filtros
              </Typography>
            </div>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <span className="material-symbols-rounded text-[20px]">close</span>
            </IconButton>
          </div>
          <div className="p-2">
            <Input
              icon={
                <span className="material-symbols-rounded h-5 w-5 flex items-center justify-center">
                  search
                </span>
              }
              label="Radio"
            />
          </div>
          <List>
            {categoryItems.map((item, index) => (
              <Accordion key={index} open={open === index + 1}>
                <ListItem className="p-0" selected={open === index + 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <span className="material-symbols-rounded h-3 w-5 flex items-center justify-center">
                        {item.icon || "show_chart"}
                      </span>
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      {item.title}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {item.category.map((category, categoryIndex) => (
                      <ListItem key={categoryIndex}>
                        <ListItemPrefix>
                          {item.inputType === "Radio" ? (
                            <Radio name={item.title} value={category} />
                          ) : (
                            <Checkbox name={item.title} value={category} />
                          )}
                        </ListItemPrefix>
                        <Typography color="blue-gray">{category}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            ))}
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <span className="material-symbols-rounded h-5 w-5">inbox</span>
              </ListItemPrefix>
              Notificaciones
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <span className="material-symbols-rounded h-5 w-5">person</span>
              </ListItemPrefix>
              Perfil
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}