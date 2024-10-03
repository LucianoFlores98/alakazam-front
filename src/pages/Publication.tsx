import { useParams } from "react-router-dom";
import { PropertyCaroussel } from "../components/PropertyCaroussel";
import { realStatePropertyDummyData } from "../data/realStateProperty";
import { Link } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import SectionHeader from "../components/SectionHeader";
import { UserRating } from "../components/UserRating";

import { currentUserRatingDummyData } from "../data/currentUserRating"; 
import { userRatingDummyData } from "../data/userRatings"

function Publication() {

  //Nos traemos el ID de la publicacion para mostrarlo
  const {publicationId} = useParams()
  
  return(
  <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="w-1/5 bg-gray-100 p-4">
      <div>
        <Link className="inline-block py-2 px-2 hover:bg-gray-200 rounded-lg" to="/new-publication">
          <div className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
            <span className="material-symbols-rounded">chevron_left</span>
            Volver al inicio
          </div>
        </Link>      </div>
      <div className="mt-4">
      {/** ACTIVIDAD */}
      </div>
    </div>

    {/* Columna central (Principal) */}
    <Card className="w-3/5 p-4">

      <div className="p-4">
        {/* Aquí colocas el contenido principal como perfil, calificaciones, publicaciones, etc. */}
        <PropertyCaroussel realEstateProperty={realStatePropertyDummyData}/>

        <SectionHeader title="Conoce al locador"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Happy_Shrek_%28cropped%29.jpg" alt=""  className="mt-2"/>

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

        <SectionHeader title="Opiniones del inmueble"/>
        <UserRating userRatings={userRatingDummyData} 
          currentUserRating={currentUserRatingDummyData}/>

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="w-1/5 bg-gray-100 p-4">

    </div>
  </div>
  );
}

export default Publication;

/*       <PropertyCaroussel realEstateProperty={realStatePropertyDummyData}/>
      <div className="flex max-w-full flex-wrap h-max bg-gray-100">
        <h2>Publicacion {publicationId}</h2>
      </div> */