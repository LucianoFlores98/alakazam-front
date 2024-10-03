/* import { useEffect, useState } from "react";
import { TestingService } from "../services/testing.services";
 */
/* const PROPIEDADES = [
  //propiedad 1  
  {
    id: '1',
    title: 'Casa en Villa Sarita',
    location: 'Felix Aguirre 1519, Posadas',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '850.000',
    inmobiliaria: 'FS Servicios inmobiliarios'
  },
  //propiedad 2
  {
    id: '2',
    title: 'Tipo de inmueble',
    location: 'Casa 180, Ruta 105',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '780.000',
    inmobiliaria: 'Zapani Inmobiliaria'
  },
  //propiedad 3  
  {
    id: '3',
    title: 'Cantidad de habitaciones',
    location: 'Alberdi, Posadas',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '1.250.000',
    inmobiliaria: 'Zapani Inmobiliaria'
  },
  //propiedad 4
  {
    id: '4',
    title: 'Casa en La Eugenia',
    location: 'Casa 76, Ruta 105',
    image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '200.000.000',
    inmobiliaria: 'Sate Sate B.R.'
  },
  //propiedad 5  
  {
    id: '5',
    title: 'Casa en A4',
    location: 'Chester Bennington 1, Posadas',
    image: 'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '805.000',
    inmobiliaria: 'Bono Vox Inmobiliaria'
  },
  //propiedad 6
  {
    id: '6',
    title: 'Casa en Chacra 105',
    location: 'Freddy Vega 1600, Posadas',
    image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '77.000.000',
    inmobiliaria: 'Capitán Levi BR'
  },
  ] */

import { BookingCard } from "../components/BookingCard";
import { FilterSideBar } from "../components/FilterSideBar";
import { FiltroPrueba } from "../components/FiltroPrueba";
import OrderBy from "../components/OrderBy";

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
    <div className="max-w-full bg-gray-100 pt-2 mx-auto">
      <div className="flex justify-end pr-6 gap-4 mb-2">
        <FiltroPrueba />
        <FilterSideBar  />
        <OrderBy />
      </div>
      <main className="flex flex-wrap gap-2 pl-2">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </main>

    </div>
  );
}

export default Home;