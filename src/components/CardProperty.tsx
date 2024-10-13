import { Link } from 'react-router-dom';
import FavIcon from '../components/FavIcon';
import { Avatar, Card, Carousel, Chip, Typography } from '@material-tailwind/react';

interface Props {
  id:string;
	title: string;
	location: string;
	images: string[];
  price: string;
  inmobiliaria:string;
  isRealState?: boolean;
  profileImage:string;
}

//falta imagen
const CardProperty: React.FC<Props> = ({ id, title, location, images, price, inmobiliaria ,isRealState, profileImage}) => {

  return(
    <Card className="relative w-[22rem] min-w-72 h-[470px]">
      {/** Linkeable */} 
          {/** Header Card */}
          <header className="flex justify-center relative overflow-hidden h-52">

            {/**Carousel Images */} 
            <Carousel
              className="rounded-md"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {images.map((url, index) => (
                <img key={index} src={url} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
              ))} 
            </Carousel>
            {/* </div> */}
            {/**Caracteristicas principales  */} 
            <div className="absolute flex justify-center bottom-0 mb-6">
              <div className="flex bg-white/70 px-2 py-1 space-x-3 rounded-lg overflow-hidden shadow">
                <Typography color="black" className="flex items-center font-bold">
                  <span className="material-symbols-rounded">bed</span>
                  3
                </Typography>
  
                <Typography color="black" className="flex items-center font-bold">
                  <span className="material-symbols-rounded">garage</span>
                  2
                </Typography>
  
                <Typography color="black" className="flex items-center font-bold">
                  <span className="material-symbols-rounded">bathtub</span>
                  3
                </Typography>
              </div>
            </div>
  
            {/**Badge  */} 
            <Chip size="sm" value="Recomendado" className='absolute top-0 left-0 inline-flex mt-3 ml-3' />


            {/**Fav button  */} 
            <span className="absolute top-0 right-0 inline-flex mt-1 ml-1 px-3 py-2 z-10 ">
              <FavIcon />
            </span>

          </header>
  
          {/**Card Main content  */} 
          <main className="px-2 pb-2 ">
          <Link to={`/publication/${id}`}>
            {/**Header Main content  */} 
            <header className="mt-2">
              {/**Ubicación */}
              <Typography variant="h5" className="text-dark leading-6	" >
                {title}
              </Typography>

              <div className="flex space-x-2 mt-2 ">
                <Chip size='lg' value={location} variant="ghost" 
                icon={
                  <span className="material-symbols-rounded text-danger items-center ">location_on</span>
                  } 
                />
              </div>

            </header>

            {/**Caracteristicas principales  */}
            <main className="grid grid-cols-2 grid-rows-2 gap-1 mt-5 ">
              {/**Caracteristica 1  */} 
              <Chip value="Expensas altas" size='lg' variant="ghost" icon={<span className="material-symbols-rounded items-center">attach_money</span>} />


              {/**Caracteristica 2  */} 
              <Chip value="Bajos Requisitos" size='lg' variant="ghost" color='green' icon={<span className="material-symbols-rounded items-center">contract</span>} />

              {/**Caracteristica 3 */}  
              <Chip value="Pet Friendly" size='lg' variant="ghost" color='green' icon={<span className="material-symbols-rounded items-center">pets</span>} />

              {/** Caracteristica 4 */} 
              <Chip value="Aumento Semestral" size='lg' variant="ghost" icon={<span className="material-symbols-rounded items-center">request_page</span>} />

            </main>
          </Link>

            {/**Footer Card container  */}
            <Link to="/profile" className="flex flex-row absolute bottom-4 items-end h-max w-full px-1">
                {/**Avatar */}
                <div className='w-auto flex items-center mt-4'>
                  <Avatar src={profileImage} alt="avatar" size='sm' />
                  <div className='flex flex-col flex-wrap'>
                    <Typography variant="h6" className="leading-4 ml-2 text-dark">{inmobiliaria}</Typography>
                    <Typography variant="small" color="blue" className="font-normal ml-2 ">
                      { isRealState? <span>Inmobiliaria</span> : <span>Dueño Directo</span>}
                      <span className="material-symbols-rounded text-info align-middle text-sm">verified</span>
                    </Typography>
                  </div>
                </div>
                {/**Precio */}
                <div className='ml-auto flex flex-col justify-end pr-3'>
                  <Typography variant="h4">${price}</Typography>
                </div>
            </Link>
            {/** Fin Footer Card */}
          </main>
          {/** Fin Main content */}
        {/** Fin Card content container*/} 
    </Card>
    
  );

}

export default CardProperty;
