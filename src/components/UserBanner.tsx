import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
    Avatar,
    Button,
    Dialog,
} from "@material-tailwind/react";
import { currentUserRatingDummyData } from "../data/currentUserRating";
import { userRatingDummyData } from "../data/userRatings";
import { UserRating } from "./UserRating";
import React from "react";

interface Props {
    userName: string;
    isVerified: boolean;
    userLocation: string;
    userImage: string;
    userTag: {
        idTag: string;
        nameTag: string;
    };
}

const UserBanner: React.FC<Props> = ({
    userName,
    isVerified,
    userImage,
    userTag,
}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className="flex justify-center">
            <Card className="lg:w-auto sm:w-[20rem] p-4">
                <div className=" flex flex-col lg:flex-row gap-3 lg:items-center w-auto">
                    <div className="text-center">
                        <Button onClick={handleOpen} className="rounded-full p-0.5 bg-transparent">
                            <Avatar
                                size="xxl"
                                src={userImage}
                                className="ring-2 ring-blue-700 p-0.5 lg:size-36"
                            />
                        </Button>
                        <Dialog open={open} handler={handleOpen} size="xs">
                            <img
                                alt="nature"
                                className="h-full w-full rounded-lg object-cover object-center"
                                src={userImage}
                            />
                        </Dialog>
                    </div>

                    {/* Información del usuario */}
                    <div className="text-left lg:ml-4">
                        <Typography className=" text-2xl lg:text-3xl font-bold text-gray-900">
                            {userName}
                        </Typography>
                        {isVerified ? (
                            <Typography className="text-info flex gap-2" >Cliente verificado <span className="material-symbols-rounded">verified</span></Typography>
                        ) : (
                            <Typography className="text-danger">Cliente no verificado :C</Typography>
                        )}

                        <div className="flex flex-wrap max-w-[17rem] gap-1 py-2 mt-3">
                            <Chip variant="filled" className="bg-info" value="Capo" />
                            <Chip variant="outlined" className="text-info border-info" value="Idolo" />
                            <Chip variant="ghost" className="bg-info bg-opacity-20 text-info" value="Master" />
                            <Chip variant="gradient" color="blue" value="Lince" />
                            <Chip variant="outlined" className="text-info border-info" value="Ete se sale" />
                        </div>
                    </div>

                    {/* Ratings centrados a la derecha */}
                    <div className="lg:w-auto lg:flex lg:justify-center lg:items-center">
                        <UserRating
                            userRatings={userRatingDummyData}
                            currentUserRating={currentUserRatingDummyData}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};


export default UserBanner;
