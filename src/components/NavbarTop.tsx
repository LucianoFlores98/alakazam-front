import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  ListItem,
} from "@material-tailwind/react";
import { UserDropdown } from "./UserDropdown";
import { useAuthStore } from "../store/auth";
import { NotificationsMenu } from "./NotificationsMenu";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Container from "../layouts/Container";

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <span className="material-symbols-rounded h-[18px] w-[18px] text-blue-gray-500">
                search
              </span>{" "}
              Pages{" "}
              <span
                className={`h-3 w-3 material-symbols-rounded text-darkertransition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              >
                chevron_left
              </span>
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <span className="material-symbols-rounded h-28 w-28">seatch</span>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <span className="material-symbols-rounded h-[18px] w-[18px] text-blue-gray-500">
          search
        </span>{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: <span className="material-symbols-rounded text-darker">search</span>,
  },
  {
    label: "Blocks",
    icon: <span className="material-symbols-rounded text-darker">search</span>,
  },
  {
    label: "Docs",
    icon: <span className="material-symbols-rounded text-darker">search</span>,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-medium text-blue-gray-500"
      >
        {" "}
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          <span className="text-gray-900">search</span>
        </MenuItem>
      </Typography>
    </ul>
  );
}

export function NavbarTop() {
  const isAuth = useAuthStore((state) => state.isAuth);

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="fixed z-40 rounded-none w-full max-w-full ">
      <div className="py-2">
        <Container >
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/** logo*/}
              <Link className="flex" to="/">
                <img
                className="hidden md:block cursor-pointer"
                height="180"
                width="180"
                src="/public/HomeAlakazam2.png"
                />
              </Link>
            {/**end logo  */}

            <SearchBar />

            {/**login  */}
            <div>
              <div className="flex items-center relative h-8">
                <div className="flex mr-3 items-center">
                  {isAuth ? (
                    <Link
                      className="hidden lg:inline-block py-2 px-2 hover:bg-gray-200 rounded-full"
                      to="/new-publication"
                    >
                      <div className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
                        Publicá tu inmueble
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="hidden lg:inline-block py-2 px-2 hover:bg-gray-200 rounded-full"
                      to="/login"
                    >
                      <div className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
                        Publicá tu inmueble
                      </div>
                    </Link>
                  )}
                </div>

                {/** DIVISOR */}
                {isAuth && (
                  <span className="hidden lg:inline-block h-6 border-l border-gray-300 mr-1"></span>
                )}

                {/**Notificationes */}
                {isAuth && <NotificationsMenu />}
                <div className="block ml-3">
                  <div className="inline relative">
                    {/**Dropdown User component */}
                    <UserDropdown />
                  </div>
                </div>
              </div>
            </div>
            {/**end login  */}
          </div>
        </Container>
      </div>

      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
