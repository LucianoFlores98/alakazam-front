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
        <h4 className='text-red-400 text-lg font-semibold'>Actividad reciente</h4>
        <button className='text-red-400 text-sm font-medium'>Ordenar por: Más nuevos</button>
      </div>
      
      <div className='border border-red-200 rounded-lg px-2 py-2'>
        {activities.map((item, index) => (
          <div key={index} className='mb-2'>

            <span className='text-gray-600 font-medium mr-2'>{item.fecha}</span>
            <span className='text-gray-800'>{item.actividad} </span>

            {item.link && (
              <a href="#" className='text-blue-500 hover:underline'>
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
