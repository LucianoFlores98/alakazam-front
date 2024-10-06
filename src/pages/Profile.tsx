import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";

import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";

import { UserRating } from "../components/UserRating";
import { GalleryUsersPhotos } from "../components/GalleryUsersPhotos";
import { Review } from "../components/Review";
import { AllUsersOpinions } from "../components/AllUsersOpinions";
import UserBanner from "../components/UserBanner";
import UserActivity from "../components/UserActivity";
import UserFeaturedInfo from "../components/UserFeaturedInfo";


function Profile() {

  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


  return(
    <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="w-1/5  p-4">
      <div className="flex flex-col">
        
        <Link className="inline-block py-2 px-2 hover:bg-gray-200 rounded-lg" to="/new-publication">
          <div className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
            <span className="material-symbols-rounded">chevron_left</span>
            Volver al inicio
          </div>
        </Link>

      </div>
      <div className="mt-4">
      {/** ACTIVIDAD */}
      <UserActivity />
      </div>
    </div>

    {/* Columna central (Principal) */}
    <Card className="w-3/5 p-4 mb-4 mt-4">

      <div className="p-4 space-y-4">
        {/* Aca el contenido principal */}
        <UserBanner userName="Hugo Juanma" isVerified={true} userLocation="Posadas, Misiones." userImage="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4yArsFz1tENJ3-P4UE_lTTm8L7yDFvwq_oXmaF8WJ0be1pOlZ" />

        <UserFeaturedInfo trustLevel="ALTO (88%)" responsabilityLevel="Responsable" rentalCount="12" paymentMethod="Efectivo & Tranferencia"/>

        <Accordion open={openAcc1}>
          <AccordionHeader onClick={handleOpenAcc1}>Presentación</AccordionHeader>
          <AccordionBody>
            Soy una persona simple, me gusta la coca bien fría y ver los atardeceres douuu.
          </AccordionBody>
        </Accordion>


        <div className="flex justify-between mt-8">
          <div className="flex flex-col">
            <Typography variant="h5" className="mb-2" color="black">Opiniones</Typography>
            <UserRating userRatings={userRatingDummyData} currentUserRating={currentUserRatingDummyData}/>
          </div>
          <div className="flex flex-col items-center space-y-2"> 
            <GalleryUsersPhotos />
            <Review />
            <Review />
            <Review />
          </div>

        </div>

        <AllUsersOpinions/>

        

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="w-1/5 p-4">

    </div>
  </div>
  );
}

export default Profile;