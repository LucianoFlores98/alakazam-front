import {
  Card,
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

const getVerificationIcon = (isVerified: boolean) =>
  isVerified ? "verified" : "brightness_empty";

const UserBanner: React.FC<Props> = ({
  userName,
  isVerified,
  userLocation,
  userImage,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex justify-center">
      <Card className="lg:w-auto sm:w-[20rem] p-4">
        <div className=" flex flex-col lg:flex-row gap-3 lg:items-center w-auto">
          <div className="text-center">
            <Button
              onClick={handleOpen}
              className="rounded-full p-0.5 bg-transparent"
            >
              <Avatar
                size="xxl"
                src={userImage}
                alt={"Foto de perfil de " + userName}
                className="ring-2 ring-info p-0.5 lg:size-36"
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
          <div className="text-left max-w-72 lg:max-w-96">
            <Typography className="text-2xl lg:text-3xl font-bold text-gray-900 inline">
              {userName}
              <span
                className={`material-symbols-rounded ${isVerified ? "text-info" : "text-nico"
                  } align-middle ml-2`}
              >
                {getVerificationIcon(isVerified)}
              </span>
            </Typography>

            <Typography className="text-xs text-secondary lg:text-sm flex items-center mt-1">
              <span className="material-symbols-rounded">location_on</span>
              {userLocation}
            </Typography>

            <div className="flex flex-wrap max-w-[18rem] lg:max-w-80 gap-1 mt-2">
              {/* {isVerified && (
                <Chip
                  variant="gradient"
                  className="bg-gradient-to-tr from-green-400 to-green-600"
                  value="Usuario Verificado"
                  size="sm"                
                />
              )} */}
              <Chip
                variant="filled"
                className="bg-info"
                value="Amable"
                size="sm"
              />
              <Chip
                variant="outlined"
                className="text-info border-info"
                value="Se ocupa"
                size="sm"
              />
              <Chip
                variant="ghost"
                className="bg-info bg-opacity-20 text-info"
                value="Confiable"
                size="sm"
              />
              <Chip
                variant="gradient"
                className="bg-gradient-to-tr from-light-blue-300 to-info"
                value="Volveria a alquilar"
                size="sm"
              />
            </div>
          </div>

          <div className="flex-col flex lg:w-auto items-center">
            <UserRating
              userRatings={userRatingDummyData}
              currentUserRating={currentUserRatingDummyData}
            />
            <Typography className="text-center text-info hover:underline mt-2 text-sm">
              <a href="#">Ver opiniones</a>
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserBanner;
