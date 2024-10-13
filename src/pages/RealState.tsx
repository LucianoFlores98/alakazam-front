const PROPIEDADES = [ 
 //propiedad 2
 {
   id: '2',
   title: 'Departamento Duplex en costa sur',
   location: 'Casa 180, Ruta 105',
   isRealState: true,
   images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
   price: '780.000',
   inmobiliaria: 'Zapani Inmobiliaria',
   profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
 },
 //propiedad 3  
 {
   id: '3',
   title: 'Casa de 3 dormitorios con Balcón',
   location: 'Alberdi, Posadas',
   isRealState: true,
   images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
   price: '1.250.000',
   inmobiliaria: 'Zapani Inmobiliaria',
   profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
 },
 //propiedad 4
 {
   id: '4',
   title: 'Casa en La Eugenia',
   location: 'Casa 76, Ruta 105',
   isRealState: true,
   images: ['https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
   price: '20.000.000',
   inmobiliaria: 'Zapani Inmobiliaria',
   profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
 },
 //propiedad 5  
 {
   id: '5',
   title: 'Casa en A4',
   location: 'Chester Bennington 1, Posadas',
   isRealState: true,
   images: ['https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
   price: '805.000',
   inmobiliaria: 'Zapani Inmobiliaria',
   profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
 },
 //propiedad 6
 {
   id: '6',
   title: 'Casa en Chacra 105',
   location: 'Freddy Vega 1600, Posadas',
   isRealState: true,
   images: ['https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
   price: '77.000.000',
   inmobiliaria: 'Zapani Inmobiliaria',
   profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
 },
 ]

import OrderBy from "../components/OrderBy";
import CardProperty from "../components/CardProperty";
import { Avatar, Button, Card, Chip, Dialog, Typography } from "@material-tailwind/react";
import FilterBarNoDrawer from "../components/FilterBarNoDrawer";
import React from "react";
import { Link } from "react-router-dom";
import { UserRating } from "../components/UserRating";
import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";

function RealState() {

  
const getVerificationIcon = (isVerified: boolean) =>
  isVerified ? "verified" : "brightness_empty";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

return(
  <div className="flex flex-col w-full">
    
        <Card className="lg:w-full w-64 p-4 flex flex-col gap-3 lg:flex-row justify-between">
        <div className="flex justify-center">
          <Button
            onClick={handleOpen}
            className="p-0.5 bg-transparent"
          >
            <Avatar
              size="xxl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s"
              alt={"Foto de perfil de "}
              className=" ring-info p-0.5 lg:size-40"
            />
          </Button>
          <Dialog open={open} handler={handleOpen} size="xs">
            <img
              alt="nature"
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s"
            />
          </Dialog>
        </div>

        {/* Información del usuario */}
        <div className="">
          <Typography className="text-2xl lg:text-3xl font-bold text-gray-900 inline">
                <Link to="/real-state">
                Zapani Inmobiliaria
            <span
              className={`material-symbols-rounded text-info align-middle ml-2`}
            >
              {getVerificationIcon(true)}
            </span>
                </Link>
          </Typography>

          <Typography className="text-xs text-secondary lg:text-sm flex items-center mt-1">
            <span className="material-symbols-rounded">location_on</span>
            {location}
          </Typography>

          <div className="flex flex-wrap max-w-sm gap-1 mt-2">

            <Chip
              variant="filled"
              className="bg-info"
              value="Amable"
              size="sm"
            />
            <Chip
              variant="outlined"
              className="text-info border-info"
              value="Se ocupa"
              size="sm"
            />
            <Chip
              variant="ghost"
              className="bg-info bg-opacity-20 text-info"
              value="Confiable"
              size="sm"
            />
            <Chip
              variant="gradient"
              className="bg-gradient-to-tr from-light-blue-300 to-info"
              value="Volveria a alquilar"
              size="sm"
            />
          </div>
        </div>

        <div>
          <UserRating
            userRatings={userRatingDummyData}
            currentUserRating={currentUserRatingDummyData}
          />
          <Typography className="text-center text-info hover:underline mt-2 text-sm">
            <a href="#">Ver opiniones</a>
          </Typography>
        </div>
      </Card>


    <main className="flex flex-col w-full space-y-3 pb-8 ">
    <Card className="fixed h-screen flex flex-col py-2 px-2 z-10 overflow-y-auto" shadow={false}>
      <FilterBarNoDrawer />
    </Card>

      <div className="flex justify-end w-full px-8 py-2">
        <OrderBy />
      </div>

      <div className="flex pl-14 flex-wrap gap-4">
      {PROPIEDADES.map(({title, location, images, price, inmobiliaria, profileImage, isRealState})=>
      (
        <CardProperty title={title} location={location} images={images} price={price} inmobiliaria={inmobiliaria} profileImage={profileImage} isRealState={isRealState}/>
      ))}
      </div>
    </main>
  </div>
);
}

export default RealState;

