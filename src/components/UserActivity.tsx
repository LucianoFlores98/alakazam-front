import { Button, Typography } from "@material-tailwind/react";

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
      
      <div className='border border-darker/50 rounded-lg px-2 py-2'>
        {activities.map((item, index) => (
          <div key={index} className='mb-2'>

            <span className='text-danger font-medium mr-2'>{item.fecha}</span>
            <span className='text-dark'>{item.actividad} </span>

            {item.link && (
              <a href="#" className='text-info hover:underline'>
                {item.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default UserActivity;
