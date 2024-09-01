import { Link } from 'react-router-dom';
import FavIcon from '../components/FavIcon';

interface Props {
  id:string;
	title: string;
	location: string;
	image: string;
  price: string;
  inmobiliaria:string;
}

//falta imagen
const CardProperty: React.FC<Props> = ({ id, title, location, image, price, inmobiliaria }) => {

  return(
    <div className="relative mx-2 w-72 min-w-72 mb-2 text-darker">
      {/** Linkeable */} 
        {/** Card content container */} 
        <div className="shadow-xl border rounded-lg bg-white">

          {/** Header Card */}
          <header className="flex justify-center relative rounded-lg overflow-hidden h-52">

            {/**Carousel Images */} 
            <div className="transition-transform duration-700 transform ease-in-out hover:scale-105 w-full">
              <div className='absolute inset-0 bg-cover' style={{backgroundImage: `url(${image})`}}
              ></div>
            </div>
  
            {/**Caracteristicas principales  */} 
            <div className="absolute flex justify-center bottom-0 mb-3">
              <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                <p className="flex items-center font-medium text-darker">
                <span className="material-symbols-rounded">bed</span>
                  3 + 1
                </p>
  
                <p className="flex items-center font-medium text-darker">
                  <span className="material-symbols-rounded">garage</span>
                  2
                </p>
  
                <p className="flex items-center font-medium text-darker">
                <span className="material-symbols-rounded">bathtub</span>
                  3
                </p>
              </div>
            </div>
  
            {/**Badge  */} 
            <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-darker text-sm font-medium text-light select-none">
                Recomendado
            </span>

            {/**Fav button  */} 
            <span className="absolute top-0 right-0 inline-flex mt-1 ml-1 px-3 py-2 z-10 ">
              <FavIcon />
            </span>

          </header>
  
          {/**Card Main content  */} 
          <main className="px-2 pb-2">
          
            {/**Header Main content  */} 
            <header className="mt-2">
              {/**Ubicación */}
              <h2 className="font-medium text-lg md:text-xl text-darker line-clamp-1 ml-2" title="New York">
                {title}
              </h2>

              <div className="flex items-center ml-2">
                <span className="material-symbols-rounded w-5 h-5 text-primary_2">pin_drop</span>
                <p title="New York, NY 10004, United States" className="text-md text-darker line-clamp-1">
                  {location}
                </p>
              </div>

            </header>

            {/**Caracteristicas principales  */}
              <Link to={`/publication/${id}`}>
            <main className="grid grid-cols-2 grid-rows-2 gap-1 mt-5 ml-2">
              {/**Caracteristica 1  */} 
              <div className="flex flex-nowrap items-center">
              <span className="material-symbols-rounded w-7 h-7 mr-1">home</span>
              <p className="line-clamp-1 text-sm">
                  Casa
                </p>
              </div>

              {/**Caracteristica 2  */} 
              <div className="flex flex-nowrap items-center">
              <span className="material-symbols-rounded w-7 h-7 mr-1">contract</span>
                <p className="line-clamp-1 text-sm">
                  Contrato anual
                </p>
              </div>

              {/**Caracteristica 3 */}  
              <div className="flex flex-nowrap items-center">
              <span className="material-symbols-rounded w-7 h-7 mr-1">pets</span>
                <p className="line-clamp-1 text-sm">
                  Mascotas
                </p>
              </div>

              {/** Caracteristica 4 */} 
              <div className="flex flex-nowrap items-center">
              <span className="material-symbols-rounded w-7 h-7 mr-1">request_page</span>
                <p className="line-clamp-1 text-sm">
                  Requisitos Altos
                </p>
              </div>
            </main>
              </Link>

            {/**Footer Card container  */}
            <Link to="/real-state" className="relative inline-block w-full">
            <footer className="grid grid-cols-2 mt-5 h-13">
              {/** Linkeable */}
                {/**Inmobiliaria Container */} 
                <div className="flex flex-col">
                  {/**Logo y verificacion Container  */} 
                  <div className="relative flex items-center">

                    {/**Logo  */}
                    <img src="/public/alakazam.png" alt="inmo" className="rounded-full w-6 h-6 cover md:w-8 md:h-8"/>

                    {/**Verificación Perfil */}
                    <div className="flex items-center text-info">
                    <span className="material-symbols-rounded text-md mr-px">verified</span>
                    <p className="text-xs">Perfil Verificado</p>
                      <span className="flex items-center">
                      </span>
                    </div>

                  </div>

{/**Divisor */}
          <span></span>
                  {/**Nombre Locatario  */}
                  <p className="ml-2 text-darker line-clamp-1 text-wrap mt-1 text-xs">
                    {inmobiliaria}
                  </p>

                </div>

                {/** Precio Container */} 
                <div className="flex items-center justify-center">

                  {/** Precio */}
                  <div className="inline-block font-semibold text-primary_2 whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase">
                      $
                    </span>
                    <span className="text-xl text-primary_2">{price}</span>/m
                  </div>

                </div>

                {/** Fin Linkeable */}
              </footer>
            </Link>
            {/** Fin Footer Card */}
          </main>
          {/** Fin Main content */}
        </div>
        {/** Fin Card content container*/} 
    </div>
    
  );

}

export default CardProperty;