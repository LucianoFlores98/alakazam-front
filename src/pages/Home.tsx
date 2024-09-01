import CardProperty from "../components/CardProperty";

const PROPIEDADES = [
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
    title: 'Casa en La Eugenia',
    location: 'Casa 180, Ruta 105',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '780.000',
    inmobiliaria: 'Zapani Inmobiliaria'
  },
  //propiedad 3  
  {
    id: '3',
    title: 'Dpto en Aguacates',
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
  ]

function Home() {
  return(
    <div className="flex max-w-full flex-wrap h-max bg-gray-100">
			{PROPIEDADES.map(({id ,title, location, image, price, inmobiliaria})=>
			(
				<CardProperty id={id} title={title} location={location} image={image} price={price} inmobiliaria={inmobiliaria}/>
			))}
    </div>
  );
}

export default Home;