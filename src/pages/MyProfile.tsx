import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";

import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";

import { UserRating } from "../components/UserRating";
import { Review } from "../components/Review";
import { AllUsersOpinions } from "../components/AllUsersOpinions";
import UserBanner from "../components/UserBanner";
import UserActivity from "../components/UserActivity";
import UserFeaturedInfo from "../components/UserFeaturedInfo";
import UserProfileConfig from "../components/UserProfileConfig";

function MyProfile() {

  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


  return(
    <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="w-1/5  p-4">
      <div className="flex flex-col">
        
        <Link className="inline-block py-2 px-2 hover:bg-gray-200 rounded-lg" to="/">
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
    <Card className="w-3/5 p-4 mb-8 mt-4">

      <div className="p-4 space-y-4">
        {/* Aca el contenido principal */}
        <UserBanner userName="Yuliana Alvez" isVerified={true} userLocation="Posadas, Misiones." userImage="https://media.istockphoto.com/id/1392783238/es/foto/retrato-de-una-adolescente-sonriente-mirando-a-la-c%C3%A1mara-sobre-un-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=y5kP9CeEnicrQq0hGq0jp6OvGK-yQXY0bihAAfoqshs=" />

        <UserFeaturedInfo trustLevel="ALTO (88%)" responsabilityLevel="Responsable" rentalCount="12" paymentMethod="Efectivo & Tranferencia"/>

        <Accordion open={openAcc1}>
          <AccordionHeader onClick={handleOpenAcc1}>Presentación</AccordionHeader>
          <AccordionBody>
            Soy una persona simple, me gusta la coca bien fría y ver los atardeceres douuu.
          </AccordionBody>
        </Accordion>


        <div className="flex justify-between mt-8">
          <div className="flex flex-col ">
            <Typography variant="h5" className="mb-2" color="black">Opiniones</Typography>
            <UserRating userRatings={userRatingDummyData} currentUserRating={currentUserRatingDummyData}/>
          </div>
          <div className="flex flex-col space-y-2"> 
            <Review userName="Luciano" nickName="lucho98" reviewComment="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
            <Review userName="Juany" nickName="juany_aa" reviewComment="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
            <Review userName="Kevin" nickName="kevin_uwu" reviewComment="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
          </div>

        </div>

        <AllUsersOpinions/>

        

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="w-1/5 p-4 flex flex-col">
      <UserProfileConfig />

    </div>
  </div>
  );
}

export default MyProfile;