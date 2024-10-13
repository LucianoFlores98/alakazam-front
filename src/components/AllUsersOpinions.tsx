import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Review } from "./Review";
 

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
  //Review 5
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
    },
]

export function AllUsersOpinions() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} fullWidth variant="gradient" color="indigo" className="mt-4">Ver todas las opiniones</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Todas las opiniones</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <div className=" flex flex-col items-center space-y-4">
          {PROFILE_REVIEWS.map(({userName, nickName, reviewComment, userProfile})=>
            (
              <Review userName={userName} nickName={nickName} reviewComment={reviewComment} userProfile={userProfile}/>
            ))}
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}