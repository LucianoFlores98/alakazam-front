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

const PUBLICATION_REVIEWS = [
  //Review 1
  {
  userName:"Mastelone",
  nickName:"Juan Arranguez",
  reviewComment:"El inmueble estaba muy lindo, impecable y bien equipado",
  userProfile:"https://media.istockphoto.com/id/1392528328/es/foto/retrato-de-un-hombre-guapo-y-sonriente-con-camiseta-blanca-de-pie-con-los-brazos-cruzados.jpg?s=2048x2048&w=is&k=20&c=bhMWrb5xaZiIPW_wRkI5zCLjZ4_mdoK_OMhqF1-_ol8="
  },
  //Review 2
  {
    userName:"AgustinaF",
    nickName:"Agustina Feliciano",
    reviewComment:"Las fotos no le hacen justicia a lo lindo que es el inmueble",
    userProfile:"https://media.istockphoto.com/id/1387644817/es/foto/imagen-al-aire-libre-de-una-hermosa-dama-positiva-con-una-sonrisa-encantadora-y-cabello-gris.jpg?s=2048x2048&w=is&k=20&c=Rw3WtCDvRIno2d-3i4sM-Ghg_Bnt6JRLdZMO7LSx_OA="
  },
  //Review 3
  {
    userName:"Leandro007",
    nickName:"Leandro Potosí",
    reviewComment:"Volvería una y mil veces!!! Tiene hasta bidet!!!",
    userProfile:"https://media.istockphoto.com/id/492529287/es/foto/retrato-de-feliz-sonriente-hombre.jpg?s=2048x2048&w=is&k=20&c=IjCEtdOlwM-n2bK-FMv1frzsxrfRBBUgUXmD52Fi5l0="
  },
  //Review 4
    {
    userName:"AlejanTech",
    nickName:"Alejandro Techeira",
    reviewComment:"Cumplió con todo lo que prometió en su publicación. 10 de 10.",
    userProfile:"https://media.istockphoto.com/id/1285140134/es/foto/retrato-de-hombre-mayor.jpg?s=2048x2048&w=is&k=20&c=bWGREH6HsqRqvzaNq0Z5N7ZL4n4uEmEKE8m4JCNtFS4="
    },
  //Review 5
  {
    userName:"Celestebor0",
    nickName:"Celeste Bordóz",
    reviewComment:"Estaba bien, aunque en las fotos parecía más lindo.",
    userProfile:"https://media.istockphoto.com/id/1483329842/es/foto/retrato-de-estudio-de-una-mujer-atractiva-con-camisa-y-riendo-mientras-est%C3%A1-sentada-en-un.jpg?s=2048x2048&w=is&k=20&c=_y50x_CuEXedt7LG8Q2rqfNRjOyUpVkVh1EJLFYNqRg="
    },
  //Review 6
  {
    userName:"Granflauta1",
    nickName:"Patricia Kurtzke",
    reviewComment:"No volvería, muy amables, pero mucha humedad.",
    userProfile:"https://media.istockphoto.com/id/1413764595/es/foto/exitosa-mujer-de-negocios-madura-mirando-a-la-c%C3%A1mara.jpg?s=2048x2048&w=is&k=20&c=yJOmFDLs0HbUDN7Vb8wtMlFMCPBUN95B-_syrgjn-9g="
    },
  //Review 7
  {
    userName:"TCopernic",
    nickName:"Tania Copernico",
    reviewComment:"Un 7, normal.",
    userProfile:"https://media.istockphoto.com/id/1398800679/es/foto/retrato-en-primer-plano-de-la-cara-y-los-ojos-de-una-mujer-de-raza-mixta-mirando-hacia.jpg?s=2048x2048&w=is&k=20&c=eKGnXapS7kB2xaKuCqLTlRzZfEeA0iyHAfJSNBJTQ5E="
    },
  //Review 8
  {
    userName:"Tomatin",
    nickName:"Tomás Herbert",
    reviewComment:"Alquilé para un familiar y están más que contentos!!!",
    userProfile:"https://media.istockphoto.com/id/1178857901/es/foto/retrato-callejero-de-un-hombre-mayor-sonriente.jpg?s=2048x2048&w=is&k=20&c=PT64bWbP9K8NxXfcRCwfOFAfXm2G8try8PrFcq7s1rA="
    },
]

function Publication() {

  //Nos traemos el ID de la publicacion para mostrarlo
  const {publicationId} = useParams()
  
  return(
  <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="w-1/5  p-4">
      <div className="flex flex-col">
        
      <Link className="inline-block py-2 px-2 rounded-lg bg-primary " to="/">
          <div className="flex items-center relative cursor-pointer whitespace-nowrap text-white">
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
            {PUBLICATION_REVIEWS.map(({userName, nickName, reviewComment, userProfile})=>
            (
              <Review userName={userName} nickName={nickName} reviewComment={reviewComment} userProfile={userProfile}/>
            ))}
          </div>

        </div>

        <AllUsersOpinions />

        

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

