import { Button, Card, Typography } from "@material-tailwind/react";

const UserProfileConfig = () => {
  return (
    <Card className='p-4 mx-2 my-2'>
        <div className='flex space-x-2 mb-4'>
            <Typography variant='h5' className='text-gray-800 font-bold'>Mi Cuenta</Typography>
        </div>

        <div >
            <Button variant="text" className='flex justify-start py-2 px-2' fullWidth>
                <Typography>Editar Perfil</Typography>
            </Button>
        </div>
        <hr className="border-t-1 border-gray-300/80 my-2 mx-2 " />


        <div >
            <Button variant="text" className='text-left py-2 px-2' fullWidth>
                <Typography>Información personal</Typography>
            </Button>
            <Button variant="text" className='text-left py-2 px-2 'fullWidth>
                <Typography>Seguridad y datos</Typography>
            </Button>
            <Button variant="text" className='text-left py-2 px-2 'fullWidth>
                <Typography>Mis opiniones</Typography>
            </Button>
            <Button variant="text" className='text-left py-2 px-2 'fullWidth>
                <Typography>Historial</Typography>
            </Button>
            <Button variant="text" className='text-left py-2 px-2  'fullWidth>
                <Typography>Contactos</Typography>
            </Button>
            <Button variant="text" className='text-left justify-start space-x-2 py-2 px-2 flex' fullWidth>
                <Typography>Ayuda</Typography>
            </Button>

        </div>
    </Card>
  );
};

export default UserProfileConfig;
