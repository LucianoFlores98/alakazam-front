import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { currentUserRatingDummyData } from "../data/currentUserRating"
import { userRatingDummyData } from "../data/userRatings"
import { UserRating } from "./UserRating";

interface Props {
    userName: string;
    isVerified: boolean;
    userLocation: string;
    userImage: string;
    userTag: {
        idTag: string;
        nameTag: string;
    }
}

const UserBanner: React.FC<Props> = ({ userName, isVerified, userLocation, userImage, userTag }) => {


    return (
        <>
            <div>
                <Card className="w-full max-w-[20rem] p-8">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-2 rounded-none border-b border-gray-600 pb-2 text-center"
                    >
                        <Avatar
                            size="xxl"
                            src={userImage}
                            className="ring-2 ring-blue-700 p-0.5 my-1"
                        />
                        <div className="text-left">
                            <Typography className="text-3xl font-bold text-gray-900">{userName}</Typography>
                            {
                                isVerified ? (
                                    <Typography color="blue">Cliente verificado</Typography>
                                ) : (
                                    <Typography color="red">Cliente no verificado :C</Typography>
                                )
                            }
                        </div>
                    </CardHeader>
                    <CardBody className="p-0">
                        <div className="flex gap-1 py-2">
                            <Chip variant="filled" color="blue" value="Capo"/>
                            <Chip variant="outlined" color="blue" value="Idolo"/>
                            <Chip variant="ghost" color="blue" value="Master"/>
                            <Chip variant="gradient" color="blue" value="Lince"/>
                            <Chip variant="outlined" color="blue" value="Capo"/>
                        </div>
                        <UserRating
                            userRatings={userRatingDummyData}
                            currentUserRating={currentUserRatingDummyData}
                        />
                    </CardBody>
                </Card>
            </div>
        </>


    );
}

export default UserBanner;