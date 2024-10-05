import React from "react";
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
} from "@material-tailwind/react";

 
export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <>
            <span className="material-symbols-rounded h-8 w-8 stroke-2 flex items-center justify-center">close</span>
          </>
        ) : (
          <span className="material-symbols-rounded h-8 w-8 stroke-2 flex items-center justify-center">filter_alt</span>
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <span
              className="material-symbols-rounded h-8 w-8 flex items-center justify-center"
            >filter_alt</span>
            <Typography variant="h5" color="blue-gray">
              Filtros
            </Typography>
          </div>
          <div className="p-2">
            <Input
              icon={<span className="material-symbols-rounded h-5 w-5 flex items-center justify-center" >search</span>}
              label="Search"
            />
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <span
                  className={`material-symbols-rounded mx-auto h-4 w-4 transition-transform flex items-center justify-center ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                >keyboard_arrow_down</span>
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                  <span className="material-symbols-rounded h-3 w-5 flex items-center justify-center">show_chart</span>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <span className="material-symbols-rounded h-3 w-5 flex items-center justify-center">chevron_right</span>
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <span  className="material-symbols-rounded h-3 w-5 flex items-center justify-center">chevron_right</span>
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <span  className="material-symbols-rounded h-3 w-5 flex items-center justify-center">chevron_right</span>
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <span
                  className={`material-symbols-rounded mx-auto h-4 w-4 transition-transform flex items-center justify-center ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                >keyboard_arrow_down</span>
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                  <span  className="material-symbols-rounded h-3 w-5 flex items-center justify-center">shopping_cart</span>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <span  className="material-symbols-rounded h-3 w-5 flex items-center justify-center">chevron_right</span>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <span  className="material-symbols-rounded h-3 w-5">chevron_right</span>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
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
                <span className="material-symbols-rounded h-5 w-5" >person</span>
              </ListItemPrefix>
              Perfil
            </ListItem>
          </List>
          
        </Card>
      </Drawer>
    </>
  );
}