import { Card, Typography } from "@material-tailwind/react";

interface Props {
    trustLevel: string; //**Medidor de confianza */
    responsabilityLevel: string; //**Medidor de responsabilidad */
    rentalCount: string; //**Cantidad de veces que se alquilo */
    paymentMethod: string; //**Tipo de metodo de pago que utiliza */
}

const UserFeaturedInfo: React.FC<Props> = ({trustLevel, responsabilityLevel, rentalCount, paymentMethod}) => {

    return( 
        <Card className="flex flex-row items-center p-4 justify-between">
            <div className="flex flex-col items-center">
                <Typography className="text-secondary">Medidor de confianza:</Typography>
                <Typography className="font-bold text-success">{trustLevel}</Typography>
            </div>

            <span className="h-12 border-l border-gray-300 mr-1"></span>

            <div className="flex flex-col items-center">
                <Typography className="text-secondary">Perfil:</Typography>
                <Typography className="text-info">{responsabilityLevel}</Typography>
            </div>
            <span className="h-12 border-l border-gray-300 mr-1"></span>

            <div className="flex flex-col items-center">
                <Typography className="text-secondary">Inquilinos:</Typography>
                <Typography className="text-info">{rentalCount}</Typography>
            </div>

            <span className="h-12 border-l border-gray-300 mr-1"></span>

            <div className="flex flex-col items-center">
                <Typography className="text-secondary">Acepta:</Typography>
                <Typography className="text-success">{paymentMethod}</Typography>
            </div>
        </Card>
    );
}

export default UserFeaturedInfo;