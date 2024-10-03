/*
Agregar esto a App() para probar, también fue agregado a la página Profile:
---------------------------------------------------------------------- 
import { PropertyCaroussel } from "./components/PropertyCaroussel";
import { realStatePropertyDummyData } from "./data/realStateProperty";

<PropertyCaroussel realEstateProperty={realStatePropertyDummyData} />
---------------------------------------------------------------------- 
*/

import React from "react";
import { Button, Typography } from '@material-tailwind/react';
import { RealEstateProperty as RealStatePropertyType } from "../types/realStateProperty";
import { UserRating } from "./UserRating";

interface PropertyCarousselProps extends React.HTMLAttributes<HTMLDivElement> {
  realEstateProperty: RealStatePropertyType;
}

export function PropertyCaroussel({ realEstateProperty }: PropertyCarousselProps) {
  const propertyImages = realEstateProperty.images
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Referencia al contenedor de imágenes de la galería.
  const containerRef = React.useRef<HTMLDivElement>(null);
  // Referencia a las imágenes.
  const imageRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  /** Actualiza la imagen activa modificando el índice activo y scrolleando a 
   * la imagen en la galería. */
  function updateImage(index: number) {
    setActiveIndex(index);
    scrollToActiveImage(index);
  }

  /** Scrollea a la imagen del índice activo.*/
  function scrollToActiveImage(index: number) {
    // Si existe una imagen en el índice recibido:
    if (imageRefs.current[index]) {
    // Scrollea a esa imagen.
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }

  /** Va a la imagen previa. Si llegó al comienzo, va al final.*/
  function previousImage() {
    let newActiveIndex = activeIndex - 1
    if (newActiveIndex < 0) {
      newActiveIndex = propertyImages.length - 1
    }
    setActiveIndex(newActiveIndex)
    scrollToActiveImage(newActiveIndex);

  }

  /** Va a la imagen siguiente. Si llegó al final, va al comienzo.*/
  function nextImage() {
    let newActiveIndex = activeIndex + 1
    if (newActiveIndex > propertyImages.length - 1) {
      newActiveIndex = 0
    }
    setActiveIndex(newActiveIndex)
    scrollToActiveImage(newActiveIndex);
  }

  /** Mueve la galería a la izquierda, si llegó al comienzo, va al final.*/
  function scrollGalleryLeft() {
    if (containerRef.current) {
      // Mueve arbitrariamente una 6 imágenes de 80px de ancho.
      const scrollAmount = 6 * 80;
      const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      // Si está en el comienzo, vuelve al final
      if (containerRef.current.scrollLeft === 0) {
        containerRef.current.scrollTo({
          left: maxScrollLeft,
          behavior: "smooth",
        });
      // Si no, se mueve la cantidad establecida.
      } else {
        containerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  }

  /** Mueve la galería a la derecha, si llegó al final, va al comienzo.*/
  function scrollGalleryRight() {
    if (containerRef.current) {
      // Mueve arbitrariamente una 6 imágenes de 80px de ancho.
      const scrollAmount = 6 * 80;
      const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      // Si está en el final, vuelve al comienzo:
      if (containerRef.current.scrollLeft === maxScrollLeft) {
        containerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
      // Si no, se mueve la cantidad establecida.
      else {
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <div className="max-w-[1000px] m-auto">
      {/* Título y datos */}
{/*       <div className="flex items-center my-4 gap-4 justify-between">

        <div className="flex flex-col ">
            <h1 className="text-4xl font-black text-darker"></h1>
            <div className="flex items-center gap-1">
              <span className="material-symbols-rounded me-0.5 text-3xl text-akzm_red_variant" >
                location_on
              </span>
              <h4 className="text-dark">{realEstateProperty.location}</h4>
              <Typography className="text-success ms-2">{realEstateProperty.propertyStatus}</Typography>
            </div>
        </div>

        <div className="flex flex-col">
          <UserRating userRatings={realEstateProperty.userRating} version="mini" currentUserRating={{voteValue:0}}/>
        </div>
      </div> */}

      <div className="container mx-auto">
        {/* <!-- Fila 1 --> */}
        <div className="flex">
          {/* <!-- Elemento 1 --> */}
          <div className="  w-3/4">
            <Typography variant="h2">{realEstateProperty.name}</Typography>
          </div>
          {/* <!-- Elemento 3 --> */}
          <div className=" inline-flex whitespace-nowrap w-1/4 justify-end">
            <Typography className="text-success ms-2">{realEstateProperty.propertyStatus}</Typography>
          </div>
        </div>

        {/* <!-- Fila 2 --> */}
        <div className="mt-2 flex ">
          {/* <!-- Elemento 2 --> */}
          <div className="w-8/12 flex items-end">
            <div className="inline-flex items-center">
              <span className="material-symbols-rounded me-0.5 text-3xl text-akzm_red_variant" >location_on</span>
              <Typography className="text-dark">{realEstateProperty.location}</Typography>
            </div>
          </div>
          {/* <!-- Elemento 4 --> */}
          <div className="flex items-end w-4/12">
            <div className="inline-flex items-end">
              <UserRating userRatings={realEstateProperty.userRating} version="mini" currentUserRating={{voteValue:0}}/>
            </div>
          </div>
        </div>
      </div>
      

      {/* Carrusel y galería */}
      <div className="flex flex-col select-none">        
        {/* Carrusel */}
        <div className="relative">
          <Button className="bg-gray-100/80 w-16 h-16 rounded-full shadow-none hover:shadow-none !absolute top-1/2 transform -translate-y-1/2 p-0 text-dark flex items-center justify-center" 
            onClick={() => previousImage()}>
            <span className="material-symbols-rounded text-6xl p-0 m-0">
              chevron_left
            </span>
          </Button>
          
          <img
            className="h-auto w-full max-w-full rounded-lg object-contain object-center"
            src={propertyImages[activeIndex]}
            alt=""
          />
          
          <Button className="bg-gray-100/80 w-16 h-16 rounded-full shadow-none hover:shadow-none !absolute top-1/2 transform -translate-y-1/2 end-0 p-0 text-dark flex items-center justify-center" 
            onClick={() => nextImage()}>
            <span className="material-symbols-rounded text-6xl p-0 m-0">
              chevron_right
            </span>
          </Button>
        </div>

        {/* Galería */}
        <div className="relative px-4 flex w-full scroll-smooth snap-x">
          <Button
            className="bg-gray-300 opacity-80 rounded-full !absolute top-1/2 transform -translate-y-1/2 left-1 p-0 text-dark w-10 h-10 flex items-center justify-center"
            onClick={scrollGalleryLeft}>
            <span className="material-symbols-rounded text-4xl p-0 m-0">
              chevron_left
            </span>
          </Button>
          
          <div ref={containerRef} className="flex gap-2 px-4 overflow-x-hidden w-full">
            {propertyImages.map((imageLink, index) => (
              <div ref={element => imageRefs.current[index] = element} key={index} className="my-2 px-0 w-32 h-20 min-w-[80px] flex-shrink-0 scroll-mx-2 snap-start">
                <img
                  onClick={() => updateImage(index)}
                  src={imageLink}
                  className={`h-full w-full cursor-pointer rounded-md object-contain object-center ${index == activeIndex ? "outline outline-offset-1 outline-3 outline-primary" : ""}`}
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
          
          <Button
            className="bg-gray-300 opacity-80 rounded-full !absolute top-1/2 transform -translate-y-1/2 right-1 p-0 text-dark w-10 h-10 flex items-center justify-center"
            onClick={scrollGalleryRight}>
            <span className="material-symbols-rounded text-4xl p-0 m-0">
              chevron_right
            </span>
          </Button>
        </div>
      </div>
    </div>

  );
}
