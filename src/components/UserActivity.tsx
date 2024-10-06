import {  Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const UserActivity: React.FC = () => {

  const activities = [
    { fecha: '14/7', actividad: 'Bajó el precio de su alquiler.', link: 'Ver publicación' },
    { fecha: '14/7', actividad: 'Lo contactó Marcos Galperin por un alquiler.', link: 'Ver alquiler' },
    { fecha: '14/7', actividad: 'Opinó sobre un inquilino.', link: 'Ver opinión' },
    { fecha: '13/7', actividad: 'Recibió una opinión de un inquilino.', link: 'Ver opinión' },
    { fecha: '13/7', actividad: 'Publicó un nuevo inmueble.', link: 'Ver publicación' },
    { fecha: '13/7', actividad: 'Por buen historial recibió un sticker por amabilidad.' },
  ];

  return (
    <div className='p-4 max-w-xl'>

      <div className='flex justify-between items-center mb-4'>
        <Typography variant="h6" className='text-darker font-semibold'>Actividad reciente</Typography>
      </div>
      
      <Card className=' px-2 py-2 space-y-2'>
        {activities.map((item, index) => (
          <div key={index} className='mb-2 flex flex-col'>

            <div className="flex items-center">
            <Typography variant="small" className='text-danger font-medium mr-2'>{item.fecha}</Typography>
            <Typography variant="small" className='text-dark'>{item.actividad} </Typography>
            </div>

            {item.link && (
              <Link to="/" className="hover:underline">
                <Typography variant="small" color="blue" className="text-center">{item.link}</Typography>
              </Link>
            )}

            <hr className="border-t-1 border-gray-300/80 mt-1 mx-6 " />

          </div>
        ))}
      </Card>
    </div>
  );
}


export default UserActivity;
