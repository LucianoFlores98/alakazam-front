import { Card, Button, Typography } from "@material-tailwind/react";

interface Props{
    image : string;
}
const UserRenterHistory: React.FC<Props> = ({image}) => {
    
    return(
        <Card className="flex flex-col items-center justify-between p-4">
            <Typography className="mb-3" variant="h5" color="black">Alquiler Actual</Typography>
            <figure className="flex justify-center items-center rounded-2xl">
                <img src={image} alt="Card Preview" className="rounded-2xl" />
            </figure>
                <Button className="bg-info w-full font-bold text-sm mt-4 p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform" fullWidth>Ver Publicación</Button>
        </Card>
    );
}

export default UserRenterHistory;