import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItem,
  Input,
  Typography,
  IconButton,
  Drawer,
  Card,
  Radio,
  Checkbox,
  List
} from "@material-tailwind/react";

// Definimos el tipo de categoría
type categoryItemsType = {
  title: string;
  input: string;
  category: string[];
};

// Datos de las categorías con sus inputs
const categoryItems: categoryItemsType[] = [
  {
    title: "Tipos de Propiedad",
    input: "Radio", // Especifica el tipo de input
    category: ["Casa", "Departamento", "Casa Quinta", "Local", "Oficina"],
  },
  {
    title: "Servicios",
    input: "Checkbox", // Checkbox para esta categoría
    category: ["Luz", "Agua", "Internet"],
  },
];

export function FilterSideBar() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Maneja la apertura de los acordeones
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  // Abre y cierra el drawer
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Función que renderiza los inputs según el tipo
  const renderInput = (category: string[], inputType: string) => {
    return category.map((item, idx) => {
      if (inputType === "Radio") {
        return (
          <ListItem key={idx} className="flex items-center gap-2 p-0">
            <Radio
              id={`radio-${item}`}
              name="property" // Agrupamos los radio buttons en un mismo grupo
              value={item}
              label={item}
              className="checked:border-akzm_red"
              icon={ <span className="material-symbols-rounded align-middle text-akzm_red">radio_button_checked</span> }
              onChange={(e) => console.log(e.target.value)} // Manejo del evento de cambio
            />
          </ListItem>
        );
      }

      if (inputType === "Checkbox") {
        return (
          <div key={idx} className="flex items-center gap-2">
            <Checkbox
              id={`checkbox-${item}`}
              value={item}
              label={item}
              className="checked:border-akzm_red checked:bg-akzm_red"
              onChange={(e) => console.log(e.target.value)} // Manejo del evento de cambio
            />
          </div>
        );
      }
      return null; // Si no hay un tipo válido, no renderizamos nada
    });
  };

  const getDrawerIcon = (isDrawerOpen: boolean) =>
    isDrawerOpen ? "close" : "filter_alt";

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        <span className="material-symbols-rounded h-8 w-8 stroke-2 flex items-center justify-center">
          {getDrawerIcon(isDrawerOpen)}
        </span>
      </IconButton>

      {/* Drawer que contiene los filtros */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          {/* Título del Drawer */}
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

          {/* Input para buscar categorias */}
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

          {/* Iteramos sobre las categorías */}
          {categoryItems.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={
                <span
                  className={`material-symbols-rounded mx-auto h-4 w-4 transition-transform flex items-center justify-center ${
                    open === index + 1 ? "rotate-180" : ""
                  }`}
                >
                  keyboard_arrow_down
                </span>
              }
            >
              {/* Título del acordeón */}
              <ListItem className="p-0" selected={open === index + 1}>
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    {item.title} {/* Usamos el título de la categoría */}
                  </Typography>
                </AccordionHeader>
              </ListItem>

              {/* Cuerpo del acordeón donde se muestran los inputs */}
              <AccordionBody className="py-1">
                {/* Renderizamos los inputs dinámicamente según la categoría */}
                <List>
                    {renderInput(item.category, item.input)}  
                </List>
              </AccordionBody>
            </Accordion>
          ))}
        </Card>
      </Drawer>
    </>
  );
}
