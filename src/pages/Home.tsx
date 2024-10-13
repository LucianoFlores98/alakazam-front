const PROPIEDADES = [
   //propiedad 1  
  {
    id: '1',
    title: 'Casa en Villa Sarita',
    location: 'Felix Aguirre 1519, Posadas',
    isRealState: false,
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
    inmobiliaria: 'Hugo Juanma',
    profileImage: "https://media.istockphoto.com/id/1148861340/es/foto/joven-hipster-macho-con-capucha-amarilla-sonriendo-y-posando-con-los-brazos-cruzados-sobre.jpg?s=1024x1024&w=is&k=20&c=HmRBRjuA5ut4Wu6g2w08_Iw4uUn7dFzrfB6sJKZyOBY=",
  },
  //propiedad 2
  {
    id: '2',
    title: 'Departamento Duplex en costa sur',
    location: 'Casa 180, Ruta 105',
    isRealState: true,
    images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '780.000',
    inmobiliaria: 'Zapani Inmobiliaria',
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
  },
  //propiedad 3  
  {
    id: '3',
    title: 'Casa de 3 dormitorios con Balcón',
    location: 'Alberdi, Posadas',
    isRealState: true,
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '1.250.000',
    inmobiliaria: 'Zapani Inmobiliaria',
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pGQCGrYgB1FBTZDtAZtQhK92T4KN0bW65g&s",
  },
  //propiedad 4
  {
    id: '4',
    title: 'Casa en La Eugenia',
    location: 'Casa 76, Ruta 105',
    isRealState: true,
    images: ['https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '20.000.000',
    inmobiliaria: 'Sate Sate B.R.',
    profileImage: "https://media.istockphoto.com/id/1465343359/es/vector/trabajo-en-equipo-continuo-y-logotipo-de-la-idea-de-solidaridad-humana.jpg?s=2048x2048&w=is&k=20&c=ohprvkA1wcb8KK7ZiAneWb4dp3U917xPY5Roir32628=",
  },
  //propiedad 5  
  {
    id: '5',
    title: 'Casa en A4',
    location: 'Chester Bennington 1, Posadas',
    isRealState: true,
    images: ['https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '805.000',
    inmobiliaria: 'Bono Vox Inmobiliaria',
    profileImage: "https://media.istockphoto.com/id/1361483901/es/vector/altavoz-de-sonido-logotipo-moderno-con-degradado-vector-ilustraci%C3%B3n-plantilla-icono-dise%C3%B1o.jpg?s=2048x2048&w=is&k=20&c=zEIBe_rtiheoDfGo73pDYfgK9DbEMy4hMyEzYY80t2Q=",
  },
  //propiedad 6
  {
    id: '6',
    title: 'Casa en Chacra 105',
    location: 'Freddy Vega 1600, Posadas',
    isRealState: true,
    images: ['https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '77.000.000',
    inmobiliaria: 'Capitán Levi BR',
    profileImage: "https://media.istockphoto.com/id/964781962/es/foto/tapa-armada-oficial-nave-almirante-marinero-capit%C3%A1n-naval-sombrero.jpg?s=2048x2048&w=is&k=20&c=Qe5ardr2d7DAZYEPZLGmeqpYveIQ0iGpdyIk63ZrcZk=",
  },
  ]


import OrderBy from "../components/OrderBy";
import { PublicySlider } from "../components/PublicySlider";
import Location from "../components/Location";
import CardProperty from "../components/CardProperty";
import { SideBarMini } from "../components/SideBarMini";
import { FilterSideBar } from "../components/FilterSideBar";
import { Card } from "@material-tailwind/react";


function Home() {

/*   const [morty, setMorty] = useState({} as any);
  const fetchMorty = async () =>{
    const {data} = await TestingService();
    setMorty(data);
  }
  
  useEffect(() => {
    try {
      fetchMorty();
    } catch(error) {
      console.log(error)
    }
  }, []) */

  return(
    <div className="flex flex-row w-full">
      
      <Card className="fixed h-screen w-40 flex flex-col py-2 px-2 z-10 overflow-y-auto" shadow={false}>
      <div className="flex flex-col items-center rounded-lg bg-gradient-to-tr from-primary to-primary_2" >
        <FilterSideBar />

      </div>
      <hr className=" " />
        <SideBarMini />
      </Card>

      <main className="flex flex-col w-full pl-40 space-y-3 pb-8 ">
        <PublicySlider />

        <div className="flex justify-between w-full px-8">
          <Location />
          <OrderBy />
        </div>

        <div className="flex pl-14 flex-wrap gap-4">
        {PROPIEDADES.map(({title, location, images, price, inmobiliaria, profileImage, isRealState})=>
        (
          <CardProperty title={title} location={location} images={images} price={price} inmobiliaria={inmobiliaria} profileImage={profileImage} isRealState={isRealState}/>
        ))}
        </div>
      </main>
    </div>
  );
}

export default Home;


{/*    <main className="flex flex-row w-full justify-between">

        <div className="flex flex-col items-start">
          <FilterSideBar />
          <hr className="border-t-1 border-gray-300/80 my-4 mx-6 " />
          <SideBarMini />
        </div>

        <div className="flex flex-wrap space-x-3 w-auto pb-8 justify-end" >



      </main> */}
