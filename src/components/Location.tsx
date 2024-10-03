import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";

export function Location() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button className='items-center inline-flex' variant='text' size='sm' onClick={handleOpen}>
                <span className="material-symbols-rounded mr-2 text-primary_2 ">add_location_alt</span>
                Ingresar ubicación
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-96">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Ingresar Ubicacion
                        </Typography>
                        <Input label="Ubicación" size="lg" />
                        <img src="https://a.storyblok.com/f/117609/2028x1242/eb3996dc4a/integrating-google-maps-react.png" alt="" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className="bg-primary_2" onClick={handleOpen} fullWidth>
                            Seleccionar Ubicación
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

export default Location;