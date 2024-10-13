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
import OrderBy from "../components/OrderBy";
import CardPropertyMini from "../components/CardPropertyMini";

const PROPIEDADES = [
  {
    id: '1',
    property: {
      title: 'Casa en Villa Sarita',
      location: 'Felix Aguirre 1519, Posadas',
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://media.admagazine.com/photos/6467b71e70d3fa4f8a2aa26c/16:9/w_2560%2Cc_limit/FedeC-LowRes7463.jpg",
        "https://planner5d.com/blog/content/images/2024/05/disenos.departamentos.software.1.jpg",
        "https://images.adsttc.com/media/images/6456/b87e/8c76/f501/7c64/053f/newsletter/apartamento-lucas-petit-minimo-arquitetura-e-design_2.jpg?1683404940",
        "https://blog.mk.cl/wp-content/uploads/2023/07/deptoschicos-10.jpg",
        "https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg",
        "https://www.iproyeccion.cl/content/uploads/2023/10/diseno-departamento-moderno.jpg"
      ],
      price: '850.000',
      inmobiliaria: 'Hugo Juanma'
    }
  },
  {
    id: '2',
    property: {
      title: 'Departamento Duplex en costa sur',
      location: 'Casa 180, Ruta 105',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg",
      ],
      price: '780.000',
      inmobiliaria: 'Hugo Juanma',
    }
  },
  {
    id: '3',
    property: {
      title: 'Departamento Duplex en costa sur',
      location: 'Casa 180, Ruta 105',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg",
      ],
      price: '780.000',
      inmobiliaria: 'Hugo Juanma',
    }
  },
  {
    id: '4',
    property: {
      title: 'Departamento Duplex en costa sur',
      location: 'Casa 180, Ruta 105',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg",
      ],
      price: '780.000',
      inmobiliaria: 'Hugo Juanma',
    }
  },
  {
    id: '5',
    property: {
      title: 'Departamento Duplex en costa sur',
      location: 'Casa 180, Ruta 105',
      images: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "https://revistaestilopropio.com/wp-content/uploads/2020/03/Apartamento_802-5-Copiar-589x330.jpg",
      ],
      price: '780.000',
      inmobiliaria: 'Hugo Juanma',
    }
  },
]


const PROFILE_REVIEWS = [
  //Review 1
  {
  userName:"Mastelone",
  nickName:"Juan Arranguez",
  reviewComment:"Muchas gracias Hugo por la amabilidad y disposición, por más como vos.",
  userProfile:"https://media.istockphoto.com/id/1392528328/es/foto/retrato-de-un-hombre-guapo-y-sonriente-con-camiseta-blanca-de-pie-con-los-brazos-cruzados.jpg?s=2048x2048&w=is&k=20&c=bhMWrb5xaZiIPW_wRkI5zCLjZ4_mdoK_OMhqF1-_ol8="
  },
  //Review 2
  {
    userName:"AgustinaF",
    nickName:"Agustina Feliciano",
    reviewComment:"Mejor de lo que pensé, no pude conocer al dueño pero hizo que todo esté de 10.",
    userProfile:"https://media.istockphoto.com/id/1387644817/es/foto/imagen-al-aire-libre-de-una-hermosa-dama-positiva-con-una-sonrisa-encantadora-y-cabello-gris.jpg?s=2048x2048&w=is&k=20&c=Rw3WtCDvRIno2d-3i4sM-Ghg_Bnt6JRLdZMO7LSx_OA="
  },
  //Review 3
  {
    userName:"Leandro007",
    nickName:"Leandro Potosí",
    reviewComment:"Un grande Huguito, me acompaño hasta el centro para mostrarme la farmacia.",
    userProfile:"https://media.istockphoto.com/id/492529287/es/foto/retrato-de-feliz-sonriente-hombre.jpg?s=2048x2048&w=is&k=20&c=IjCEtdOlwM-n2bK-FMv1frzsxrfRBBUgUXmD52Fi5l0="
  },
  //Review 4
    {
    userName:"AlejanTech",
    nickName:"Alejandro Techeira",
    reviewComment:"Todo ok, aunque me parece que podría mejorar el servicio.",
    userProfile:"https://media.istockphoto.com/id/1285140134/es/foto/retrato-de-hombre-mayor.jpg?s=2048x2048&w=is&k=20&c=bWGREH6HsqRqvzaNq0Z5N7ZL4n4uEmEKE8m4JCNtFS4="
    },
/*   //Review 5
  {
    userName:"Celestebor0",
    nickName:"Celeste Bordóz",
    reviewComment:"Algunas cosas me hicieron dudar, creo que ya no alquilaría con el.",
    userProfile:"https://media.istockphoto.com/id/1483329842/es/foto/retrato-de-estudio-de-una-mujer-atractiva-con-camisa-y-riendo-mientras-est%C3%A1-sentada-en-un.jpg?s=2048x2048&w=is&k=20&c=_y50x_CuEXedt7LG8Q2rqfNRjOyUpVkVh1EJLFYNqRg="
    },
  //Review 6
  {
    userName:"Granflauta1",
    nickName:"Patricia Kurtzke",
    reviewComment:"Muy buenos y todo, pero tardaron mucho en solucionar la humedad, la cual seguía estando.",
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
    reviewComment:"Según mis familiares son muy amables y predispuestos, están conformes",
    userProfile:"https://media.istockphoto.com/id/1178857901/es/foto/retrato-callejero-de-un-hombre-mayor-sonriente.jpg?s=2048x2048&w=is&k=20&c=PT64bWbP9K8NxXfcRCwfOFAfXm2G8try8PrFcq7s1rA="
    }, */
]


function Profile() {

  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  const [openAcc2, setOpenAcc2] = React.useState(true);

  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);

  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);


  return(
    <div className="flex min-h-screen">
    {/* Columna izquierda */}
    <div className="lg:w-1/5 md:2/5 p-4 hidden lg:block">
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
          Disfrutando de las pequeñas cosas de la vida: buena comida, familia y tranquilidad. Amante de los días al aire libre y los momentos en buena compañía. 🍂👨‍👩‍👧‍👦
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Otras Publicaciones</AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col items-end space-y-4 max-h-96 overflow-y-auto">
              <div className="flex justify-between w-full mt-2 items-end">
              <Typography variant="h5">5 Publicaciones</Typography>
              <OrderBy />
              </div>
              {PROPIEDADES.map(({ id, property }) =>
          (
            <CardPropertyMini 
              id={id} 
              title={property.title} 
              location={property.location} 
              images={property.images} 
              price={property.price} 
              inmobiliaria={property.inmobiliaria} 
            />
          ))}
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc3} className="mt-8">
          <AccordionHeader onClick={handleOpenAcc3}>Opiniones</AccordionHeader>
          <AccordionBody>
          <div className="flex justify-between mt-8 space-x-8 px-4">
          <div className="flex flex-col">
            <UserRating userRatings={userRatingDummyData} currentUserRating={currentUserRatingDummyData}/>
          </div>
          <div className="flex flex-col items-center space-y-6"> 
            {PROFILE_REVIEWS.map(({userName, nickName, reviewComment, userProfile})=>
            (
              <Review userName={userName} nickName={nickName} reviewComment={reviewComment} userProfile={userProfile}/>
            ))}
          </div>

        </div>

        <AllUsersOpinions/>
          </AccordionBody>
        </Accordion>

        

      </div>



    </Card>

    {/* Columna derecha */}
    <div className="xl:w-1/5 p-4 hidden xl:block">
      <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" className="object-cover rounded-md w-full h-1/4" />
    </div>
  </div>
  );
}

export default Profile;