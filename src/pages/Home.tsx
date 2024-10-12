const PROPIEDADES = [
  //propiedad 1  
  {
    id: '1',
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
  },
  //propiedad 2
  {
    id: '2',
    title: 'Departamento Duplex en costa sur',
    location: 'Casa 180, Ruta 105',
    images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '780.000',
    inmobiliaria: 'Zapani Inmobiliaria'
  },
  //propiedad 3  
  {
    id: '3',
    title: 'Casa de 3 dormitorios con Balcón',
    location: 'Alberdi, Posadas',
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '1.250.000',
    inmobiliaria: 'Zapani Inmobiliaria'
  },
  //propiedad 4
  {
    id: '4',
    title: 'Casa en La Eugenia',
    location: 'Casa 76, Ruta 105',
    images: ['https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '20.000.000',
    inmobiliaria: 'Sate Sate B.R.'
  },
  //propiedad 5  
  {
    id: '5',
    title: 'Casa en A4',
    location: 'Chester Bennington 1, Posadas',
    images: ['https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '805.000',
    inmobiliaria: 'Bono Vox Inmobiliaria'
  },
  //propiedad 6
  {
    id: '6',
    title: 'Casa en Chacra 105',
    location: 'Freddy Vega 1600, Posadas',
    images: ['https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    price: '77.000.000',
    inmobiliaria: 'Capitán Levi BR'
  },
  ] 

import { SidebarWithBurgerMenu } from "../components/SidebarWithBurgerMenu";
import OrderBy from "../components/OrderBy";
import { PublicySlider } from "../components/PublicySlider";
import Location from "../components/Location";
import CardProperty from "../components/CardProperty";
import { SideBarMini } from "../components/SideBarMini";


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
    <div className="">
      <PublicySlider />
      <div className="flex justify-between pr-6 my-2">
        <div>
          <Location />
        </div>

        <div className="flex gap-4">
          <SidebarWithBurgerMenu />
          <OrderBy />
        </div>
      </div>
      <main className="flex flex-row ">
        <div className="">
          <SideBarMini />
        </div>
        <div className="flex flex-wrap w-full gap-6 pl-10">

        {PROPIEDADES.map(({title, location, images, price, inmobiliaria})=>
        (
          <CardProperty title={title} location={location} images={images} price={price} inmobiliaria={inmobiliaria}/>
        ))}
        </div>

      </main>

    </div>
  );
}

export default Home;