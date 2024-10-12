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

const PROFILE_REVIEWS = [
  //Review 3
  {
  userName:"",
  nickName:"",
  reviewComment:"",
  userProfile:"URL"
  },
  //Review 2
  {
    userName:"",
    nickName:"",
    reviewComment:"",
    userProfile:"URL"
  },
  //Review 3
  {
    userName:"",
    nickName:"",
    reviewComment:"",
    userProfile:"URL"
  },
]


function Profile() {

  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


  return(
    <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="lg:w-1/5 md:2/5 p-4 hidden lg:block">
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
    <Card className="xl:w-3/5 md:4/5 w-full p-4 mb-4 mt-4 mx-2 ">

      <div className="p-4 space-y-4">
        {/* Aca el contenido principal */}
        <UserBanner userName="Hugo Juanma" isVerified={true} userLocation="Posadas, Misiones." userImage="https://media.istockphoto.com/id/1148861340/es/foto/joven-hipster-macho-con-capucha-amarilla-sonriendo-y-posando-con-los-brazos-cruzados-sobre.jpg?s=1024x1024&w=is&k=20&c=HmRBRjuA5ut4Wu6g2w08_Iw4uUn7dFzrfB6sJKZyOBY=" />

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
            {PROFILE_REVIEWS.map(({userName, nickName, reviewComment, userProfile})=>
            (
              <Review userName={userName} nickName={nickName} reviewComment={reviewComment} userProfile={userProfile}/>
            ))}
          </div>

        </div>

        <AllUsersOpinions/>

        

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="xl:w-1/5 p-4 hidden xl:block">
      <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" className="object-cover rounded-md w-full h-3/4" />
    </div>
  </div>
  );
}

export default Profile;