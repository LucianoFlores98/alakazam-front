import React from "react";
import { Rating, Typography } from "@material-tailwind/react";
 
export function RatingMini() {
  const [rated, setRated] = React.useState(4);
 
  return (
    <div className="flex items-center gap-1 font-bold text-blue-gray-500 mb-1">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} readonly />
      <Typography color="blue-gray" className="font-medium text-sm text-blue-gray-500">
        (134 Votos)
      </Typography>
    </div>
  );
}