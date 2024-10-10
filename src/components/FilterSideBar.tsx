import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItem,
  Typography,
  IconButton,
  Drawer,
  Card,
  Radio,
  Checkbox,
  ListItemPrefix,
  Button,
  Navbar,
  Switch,
  Input,
  Slider,
} from "@material-tailwind/react";
import SearchBar from "./SearchBar";

// Definimos el tipo de categoría
type categoryItemsType = {
  title: string;
  input: string;
  category: string[];
  icon?: string;
};

// Datos de las categorías con sus inputs
const categoryItems: categoryItemsType[] = [
  {
    title: "Tipos de Propiedad",
    input: "Radio",
    category: ["Casa", "Departamento", "Casa Quinta", "Local", "Oficina", "Quincho", "Habitación"],
    icon: "home",
  },
  {
    title: "Temporalidad",
    input: "Radio",
    category: ["Diario", "Mensual"],
    icon: "date_range",
  },
  {
    title: "Ambientes",
    input: "Radio",
    category: ["1", "2", "3", "4 o más"],
    icon: "bed",
  },
  {
    title: "Perfil del Inquilino",
    input: "Checkbox",
    category: ["Hombres", "Mujeres", "Familias", "Niños", "Bebés"],
    icon: "group",
  },
  {
    title: "Comodidades",
    input: "Checkbox",
    category: ["Parrilla", "Patio", "Garage", "Pileta"],
    icon: "bathtub",
  },
  {
    title: "Amoblado",
    input: "Radio",
    category: ["Si", "No", "Parcialmente"],
    icon: "chair",
  },
  {
    title: "Seguridad",
    input: "Checkbox",
    category: ["Sereno", "Portero", "Seguridad", "Cámaras", "Alarmas"],
    icon: "security",
  },
  {
    title: "Servicios extra",
    input: "Checkbox",
    category: ["Limpieza", "Basurero", "Lavadero", "Wifi"],
    icon: "build",
  },
  {
    title: "Espacios",
    input: "Checkbox",
    category: ["Dormitorios", "Baños", "Patio", "Terraza", "Balcón"],
    icon: "deck",
  },
  {
    title: "Proximidades",
    input: "Checkbox",
    category: ["Hospital", "Universidad", "Parque", "Farmacia", "Supermercado", "Piscina pública", "Gimnasio", "Bar", "Restaurant"],
    icon: "location_on",
  },
  {
    title: "Tipo de Contrato",
    input: "Checkbox",
    category: ["Contrato", "Inmobiliaria", "Dueño Directo"],
    icon: "assignment",
  },
  {
    title: "Método de Pago",
    input: "Checkbox",
    category: ["Efectivo", "Tarjeta"],
    icon: "payment",
  },
];

export function FilterSideBar() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Maneja la apertura de los acordeones
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  // Abre y cierra el drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = "";
  };

  const handleSwitchChange = () => setIsSwitchOn(!isSwitchOn);

  // Función que renderiza los inputs según el tipo
  const renderInput = (category: string[], inputType: string) => {
    return category.map((item, idx) => {
      if (inputType === "Radio") {
        return (
          <ListItem key={idx} className="p-0">
            <label className="flex w-full cursor-pointer">
              <ListItemPrefix>
                <Radio
                  id={`radio-${item}`}
                  name="property" // Agrupamos los radio buttons en un mismo grupo
                  value={item}
                  label={item}
                  ripple={false}
                  className="checked:border-akzm_red hover:before:opacity-0"
                  icon={<span className="material-symbols-rounded align-middle text-akzm_red">radio_button_checked</span>}
                  onChange={(e) => console.log(e.target.value)} // Manejo del evento de cambio
                />
              </ListItemPrefix>
            </label>
          </ListItem>
        );
      }

      if (inputType === "Checkbox") {
        return (
          <ListItem key={idx} className="p-0">
            <label className="flex w-full cursor-pointer">
              <ListItemPrefix>
                <Checkbox
                  id={`checkbox-${item}`}
                  value={item}
                  label={item}
                  ripple={false}
                  className="checked:border-akzm_red checked:bg-akzm_red hover:before:opacity-0"
                  onChange={(e) => console.log(e.target.value)} // Manejo del evento de cambio
                />
              </ListItemPrefix>
            </label>
          </ListItem>
        );
      }
      return null; // Si no hay un tipo válido, no renderizamos nada
    });
  };

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        <span className="material-symbols-rounded h-8 w-8 stroke-2 flex items-center justify-center">
          filter_alt
        </span>
      </IconButton>

      {/* Drawer que contiene los filtros */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="w-80">
        <Card
          color="transparent"
          shadow={false}
          className="w-full h-full overflow-y-auto"
        >
          {/* Navbar con el titulo del drawer y boton de cerrar */}
          <Navbar className="w-full rounded-none p-1">
            <div className="flex items-center gap-4">
              <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <span className="material-symbols-rounded text-[20px] align-middle">close</span>
              </IconButton>
              <Typography variant="h6" color="blue-gray">
                Filtros
              </Typography>
            </div>
          </Navbar>

          <div className="mt-2 p-3 flex-1 overflow-y-auto">
            {/* Input para buscar categorias */}
            <div>
              <SearchBar label="Busque una categoria" />
            </div>
            <div className="my-3 flex flex-row items-center gap-6 justify-center">
              {/* <Chip
                value={<Typography variant="h1" className="text-xs">Alquiler</Typography>}
                size="lg"
                className={`w-24 text-center bg-info ${!isSwitchOn ? "bg-opacity-80" : "bg-opacity-50"}`}
              /> */}
              <Button
                ripple={false}
                onClick={() => setIsSwitchOn(false)}
                className={`text-blue-gray-900 text-center w-24 focus:opacity-100 bg-akzm_red ${!isSwitchOn ? "bg-opacity-90" : "bg-opacity-60"}`}
              >
                <Typography variant="h1" className="text-xs">Alquiler</Typography>
              </Button>
              <Switch
                ripple={false}
                checked={isSwitchOn}
                onChange={handleSwitchChange}
                className="bg-akzm_red checked:bg-akzm_red"
              />
              <Button
                ripple={false}
                onClick={() => setIsSwitchOn(true)}
                className={`text-blue-gray-900 text-center w-24 focus:opacity-100 bg-akzm_red ${isSwitchOn ? "bg-opacity-90" : "bg-opacity-60"}`}
              >
                <Typography variant="h1" className="text-xs">Venta</Typography>
              </Button>
              {/* <Chip
                value={<Typography variant="h1" className="text-xs">Venta</Typography>}
                size="lg"
                className={`w-24 text-center text-blue-gray-900 bg-info ${isSwitchOn ? "bg-opacity-80" : "bg-opacity-50"}`}
              /> */}
            </div>
            <div>
              {categoryItems.map((item, index) => (
                <Accordion
                  key={index}
                  open={open === index + 1}
                  icon={
                    <span
                      className={`material-symbols-rounded mx-auto h-4 w-4 transition-transform flex items-center justify-center ${open === index + 1 ? "rotate-180" : ""
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
                      <ListItemPrefix>
                        <span className="material-symbols-rounded h-3 w-5 flex items-center justify-center">
                          {item.icon ?? 'category'}
                        </span>
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="mr-auto font-normal">
                        {item.title} {/* Usamos el título de la categoría */}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>

                  {/* Cuerpo del acordeón donde se muestran los inputs */}
                  <AccordionBody className="py-1">
                    {/* Renderizamos los inputs dinámicamente según la categoría */}
                    {renderInput(item.category, item.input)}
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
            {/* Iteramos sobre las categorías */}

          </div>
          <Navbar className="w-full rounded-none border p-2 flex justify-center border-t-blue-gray-100 shadow-inner">
            <Button
              variant="text"
              className="gap-2 px-2 py-1 hover:text-akzm_red hover:bg-transparent group"
            >
              Aplicar filtros
              <span className="material-symbols-rounded text-blue-gray-900 transition-none group-hover:duration-300 group-hover:transition-transform group-hover:rotate-[360deg]">refresh</span>
            </Button>

          </Navbar>
        </Card>
      </Drawer>
    </>
  );
}
