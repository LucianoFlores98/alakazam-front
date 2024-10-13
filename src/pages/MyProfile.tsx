import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";

import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";

import { UserRating } from "../components/UserRating";
import { Review } from "../components/Review";
import { AllUsersOpinions } from "../components/AllUsersOpinions";
import UserBanner from "../components/UserBanner";
import UserFeaturedInfo from "../components/UserFeaturedInfo";
import UserProfileConfig from "../components/UserProfileConfig";
import UserRenterHistory from "../components/UserRenterHistory";

const MYUSER_REVIEWS = [
  //Review 1
  {
  userName:"Mastelone",
  nickName:"Juan Arranguez",
  reviewComment:"Un ídola Yuliana, muy responsable",
  userProfile:"https://media.istockphoto.com/id/1392528328/es/foto/retrato-de-un-hombre-guapo-y-sonriente-con-camiseta-blanca-de-pie-con-los-brazos-cruzados.jpg?s=2048x2048&w=is&k=20&c=bhMWrb5xaZiIPW_wRkI5zCLjZ4_mdoK_OMhqF1-_ol8="
  },
  //Review 2
  {
    userName:"AgustinaF",
    nickName:"Agustina Feliciano",
    reviewComment:"Me atendió de manera espectacular y siempre atenta.",
    userProfile:"https://media.istockphoto.com/id/1387644817/es/foto/imagen-al-aire-libre-de-una-hermosa-dama-positiva-con-una-sonrisa-encantadora-y-cabello-gris.jpg?s=2048x2048&w=is&k=20&c=Rw3WtCDvRIno2d-3i4sM-Ghg_Bnt6JRLdZMO7LSx_OA="
  },
  //Review 3
  {
    userName:"Leandro007",
    nickName:"Leandro Potosí",
    reviewComment:"10 de 10, recomendado.",
    userProfile:"https://media.istockphoto.com/id/492529287/es/foto/retrato-de-feliz-sonriente-hombre.jpg?s=2048x2048&w=is&k=20&c=IjCEtdOlwM-n2bK-FMv1frzsxrfRBBUgUXmD52Fi5l0="
  },
  //Review 4
    {
    userName:"AlejanTech",
    nickName:"Alejandro Techeira",
    reviewComment:"Todo ok.",
    userProfile:"https://media.istockphoto.com/id/1285140134/es/foto/retrato-de-hombre-mayor.jpg?s=2048x2048&w=is&k=20&c=bWGREH6HsqRqvzaNq0Z5N7ZL4n4uEmEKE8m4JCNtFS4="
    },
/*   //Review 5
  {
    userName:"Celestebor0",
    nickName:"Celeste Bordóz",
    reviewComment:"Algunas cosas me hicieron dudar, pero fue muy buena.",
    userProfile:"https://media.istockphoto.com/id/1483329842/es/foto/retrato-de-estudio-de-una-mujer-atractiva-con-camisa-y-riendo-mientras-est%C3%A1-sentada-en-un.jpg?s=2048x2048&w=is&k=20&c=_y50x_CuEXedt7LG8Q2rqfNRjOyUpVkVh1EJLFYNqRg="
    }, */
  //Review 6
/*   {
    userName:"Granflauta1",
    nickName:"Patricia Kurtzke",
    reviewComment:"Muy buena y todo.",
    userProfile:"https://media.istockphoto.com/id/1413764595/es/foto/exitosa-mujer-de-negocios-madura-mirando-a-la-c%C3%A1mara.jpg?s=2048x2048&w=is&k=20&c=yJOmFDLs0HbUDN7Vb8wtMlFMCPBUN95B-_syrgjn-9g="
    },
  //Review 7
  {
    userName:"TCopernic",
    nickName:"Tania Copernico",
    reviewComment:"Buen servicio.",
    userProfile:"https://media.istockphoto.com/id/1398800679/es/foto/retrato-en-primer-plano-de-la-cara-y-los-ojos-de-una-mujer-de-raza-mixta-mirando-hacia.jpg?s=2048x2048&w=is&k=20&c=eKGnXapS7kB2xaKuCqLTlRzZfEeA0iyHAfJSNBJTQ5E="
    },
  //Review 8
  {
    userName:"Tomatin",
    nickName:"Tomás Herbert",
    reviewComment:"Yuliana es muy amable y predispuesta, conforme",
    userProfile:"https://media.istockphoto.com/id/1178857901/es/foto/retrato-callejero-de-un-hombre-mayor-sonriente.jpg?s=2048x2048&w=is&k=20&c=PT64bWbP9K8NxXfcRCwfOFAfXm2G8try8PrFcq7s1rA="
    }, */
]


function MyProfile() {

  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


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
      <UserRenterHistory image="https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg"/>
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
          Amante de las aventuras, el café y las buenas conversaciones. Siempre buscando el lado positivo de la vida. 🌍☕✨
          </AccordionBody>
        </Accordion>


        <div className="flex justify-between mt-8 space-x-8 px-4">
          <div className="flex flex-col">
            <Typography variant="h5" className="mb-2" color="black">Opiniones</Typography>
            <UserRating userRatings={userRatingDummyData} currentUserRating={currentUserRatingDummyData}/>
          </div>
          <div className="flex flex-col items-center space-y-6"> 
            {MYUSER_REVIEWS.map(({userName, nickName, reviewComment, userProfile})=>
            (
              <Review userName={userName} nickName={nickName} reviewComment={reviewComment} userProfile={userProfile}/>
            ))}
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