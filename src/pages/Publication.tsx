import { useParams } from "react-router-dom";
import { PropertyCaroussel } from "../components/PropertyCaroussel";
import { realStatePropertyDummyData } from "../data/realStateProperty";
import { Link } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import SectionHeader from "../components/SectionHeader";
import { UserRating } from "../components/UserRating";

import { currentUserRatingDummyData } from "../data/currentUserRating"; 
import { userRatingDummyData } from "../data/userRatings"
import { FeaturedReview } from '../components/FeaturedReview';
import { Review } from "../components/Review";
import { GalleryUsersPhotos } from "../components/GalleryUsersPhotos";
import { AllUsersOpinions } from "../components/AllUsersOpinions";
import UserBanner from "../components/UserBanner";

function Publication() {

  //Nos traemos el ID de la publicacion para mostrarlo
  const {publicationId} = useParams()
  
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
      </div>
    </div>

    {/* Columna central (Principal) */}
    <Card className="w-3/5 p-4 mb-4 mt-4">

      <div className="p-4">
        {/* Aquí colocas el contenido principal como perfil, calificaciones, publicaciones, etc. */}
        <PropertyCaroussel realEstateProperty={realStatePropertyDummyData}/>

        <SectionHeader title="Conoce al locador"/>
        <UserBanner userName="Hugo Juanma" isVerified={true} userLocation="Posadas, Misiones." userImage="https://media.istockphoto.com/id/1148861340/es/foto/joven-hipster-macho-con-capucha-amarilla-sonriendo-y-posando-con-los-brazos-cruzados-sobre.jpg?s=1024x1024&w=is&k=20&c=HmRBRjuA5ut4Wu6g2w08_Iw4uUn7dFzrfB6sJKZyOBY=" />

        <SectionHeader title="Caracteristicas"/>
        <ul className="list-disc pl-8" >
          <li>Balcon</li>
          <li>Terraza</li>
          <li>Mmm balcon</li>
          <li>Tiene un buen balcon</li>
        </ul>

        <SectionHeader title="Descripción"/>
        <Typography variant="paragraph">
          Material Tailwind is an easy to use components library for Tailwind CSS
          and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and everything
          you need.
        </Typography>

        <SectionHeader title="Otros Inquilinos dicen:" className="mb-8"/>

        <FeaturedReview />

        <hr className="border-t-1 border-gray-300/80 my-4 mx-6 " />

        <div className="flex justify-between mt-8">
          <div className="flex flex-col">
            <Typography variant="h5" className="mb-2" color="black">Opiniones</Typography>
            <UserRating userRatings={userRatingDummyData} currentUserRating={currentUserRatingDummyData}/>
          </div>
          <div className="flex flex-col items-center space-y-2"> 
            <GalleryUsersPhotos />
            <Review userName="" nickName="" reviewComment=""/>
            <Review userName="" nickName="" reviewComment=""/>
            <Review userName="" nickName="" reviewComment=""/>
          </div>

        </div>

        <AllUsersOpinions className=""/>

        

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="w-1/5 p-4">

    </div>
  </div>
  );
}

export default Publication;

/*       <PropertyCaroussel realEstateProperty={realStatePropertyDummyData}/>
      <div className="flex max-w-full flex-wrap h-max bg-gray-100">
        <h2>Publicacion {publicationId}</h2>
      </div> */

