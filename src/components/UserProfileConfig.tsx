const UserProfileConfig = () => {
  return (
    <div className='p-4 border border-red-200 rounded-lg mx-2 my-2'>
        <div className='flex items-center space-x-2 mb-4'>
            <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
            >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
            <h2 className='text-gray-800 font-bold'>Mi Cuenta</h2>
        </div>

        <div className='mb-4'>
            <button className='block text-red-500 text-base font-medium mb-2 w-11/12 text-left px-1 shadow-[0px_7px_7px_rgba(240,75,75,0.4)] rounded-lg'>Mi perfil</button>
            <div className='flex items-center space-x-1 mx-4'>
            <button className='text-blue-800 text-xs font-medium'>EDITAR PERFIL</button>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4 text-blue-800'
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M3 21h4.5l11.232-11.232-4.5-4.5L3 16.5V21z' />
            </svg>
            </div>
        </div>

        <div className='text-gray-700'>
            <button className='block w-full text-left py-1 hover:text-red-400'>Información personal</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Seguridad y datos</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Mis opiniones</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Historial</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Tarjetas y pagos</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Contactos</button>
            <button className='block w-full text-left py-1 hover:text-red-400'>Ayuda</button>
        </div>
    </div>
  );
};

export default UserProfileConfig;
