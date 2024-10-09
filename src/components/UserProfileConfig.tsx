import { Button, Card, Typography } from "@material-tailwind/react";

const UserProfileConfig = () => {
  return (
    <Card className='p-4 mx-2 my-2'>
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
            <Typography variant='h5' className='text-gray-800 font-bold'>Mi Cuenta</Typography>
        </div>

        <div className='mb-4'>
            <Typography variant='h6' className='block text-red-500 text-base font-medium mb-2 w-11/12 text-left px-1 py-1 shadow-[0px_7px_7px_rgba(240,75,75,0.4)] rounded-lg'>Mi perfil</Typography>
            <Button variant="text" className='flex items-center space-x-2 mx-3'>
                <Typography variant='h6' className='text-blue-800 text-xs font-medium'>EDITAR PERFIL</Typography>
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
            </Button>
        </div>

        <div className='text-gray-700'>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Información personal</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Seguridad y datos</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Mis opiniones</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Historial</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Tarjetas y pagos</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Contactos</Button>
            <Button variant="text" className='block w-full text-left py-1 px-1 hover:text-akzm_red font-normal text-gray-800'>Ayuda</Button>
        </div>
    </Card>
  );
};

export default UserProfileConfig;
