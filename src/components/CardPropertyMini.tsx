{/*

** PARA CARGAR LOS DATOS **

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
      inmobiliaria: 'FS Servicios inmobiliarios'
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
      inmobiliaria: 'Zapani Inmobiliaria',
    }
  },
]

** DENTRO DEL RETURN **

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

*/}


import { Link } from 'react-router-dom';
import { Card, Typography, Avatar, Carousel, Chip } from '@material-tailwind/react';
import React from 'react'
import FavIcon from './FavIcon';

interface Props {
    id: string;
    title: string;
    location: string;
    images: string[];
    price: string;
    inmobiliaria: string;
}

const CardPropertyMini: React.FC<Props> = ({ id, title, location, images, price, inmobiliaria }) => {
    return (
        <Card className="w-full h-36 flex flex-row">
            <header className="flex justify-center relative overflow-hidden w-1/3 p-4">

                <img src={images[0]} alt="" className="rounded-md" />

                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 mb-2">
                    <div className="flex px-1 py-0.5 space-x-2 rounded-lg bg-white/70 shadow-lg">
                        <Typography color="black" className="flex items-center font-bold text-xs">
                            <span className="material-symbols-rounded text-xl">bed</span>
                            3
                        </Typography>

                        <Typography color="black" className="flex items-center font-bold text-xs">
                            <span className="material-symbols-rounded text-xl">garage</span>
                            2
                        </Typography>

                        <Typography color="black" className="flex items-center font-bold text-xs">
                            <span className="material-symbols-rounded text-xl">bathtub</span>
                            3
                        </Typography>
                    </div>
                </div>

            </header>
            <Link to={`/publication/${id}`} className='flex flex-row gap-2 my-4 mr-4 w-full'>
                <div className="flex-1 flex-col flex">
                    {/**Ubicación */}
                    <Typography variant="paragraph" className="text-dark leading-5" >
                        {title}
                    </Typography>

                    <Typography variant="small" className="text-dark flex items-center gap-1 text-xs">
                        <span className="material-symbols-rounded text-danger text-base">location_on</span>
                        {location}
                    </Typography>

                    {/* Inmobiliaria */}
                    <Link to="/real-state" className="mt-auto flex flex-col items-center">
                        <div className='flex items-center w-full'>
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size='sm' />
                            <div className='ml-2 w-full'>
                                <Typography variant="h6" className="leading-4 text-dark text-sm">{inmobiliaria}</Typography>

                                <Typography variant="small" color="blue" className="font-normal text-xs">
                                    Inmobiliaria
                                    <span className="material-symbols-rounded text-info align-middle text-sm">verified</span>
                                </Typography>
                            </div>
                        </div>

                    </Link>


                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-row'>
                        <div className='grid grid-cols-3'>
                            <Typography color="black" className="flex flex-col text-xs whitespace-nowrap">
                                <span className='material-symbols-rounded'>meeting_room</span>
                                3 amb.
                            </Typography>
                            <Typography color="black" className="flex flex-col text-xs whitespace-nowrap">
                                <span className='material-symbols-rounded'>square_foot</span>
                                <span>32 m<sup>2</sup></span>
                            </Typography>
                            <Typography color="black" className="flex flex-col text-xs whitespace-nowrap">
                                <span className='material-symbols-rounded'>mintmark</span>
                                $10.626 / m2
                            </Typography>
                            <Typography color="black" className="flex flex-col text-xs whitespace-nowrap">
                                <span className='material-symbols-rounded'>calendar_clock</span>
                                Cada 3 meses
                            </Typography>
                        </div>
                        <div className="ml-4">
                            <FavIcon />
                        </div>
                    </div>


                    <div className="mt-auto ml-auto">
                        <Typography variant="h5" color="green" textGradient>${price + "/mes"}</Typography>
                    </div>

                </div>
            </Link>


        </Card>
    )
}

export default CardPropertyMini