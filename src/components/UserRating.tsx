/*
Agregar esto a App() para probar, también fue agregado a la página Profile:
---------------------------------------------------------------------- 
import { currentUserRatingDummyData } from "./data/currentUserRating"
import { userRatingDummyData } from "./data/userRatings"
import { UserRating } from "./components/UserRating";


return ( 
  <UserRating
  userRatings={userRatingDummyData} 
  currentUserRating={currentUserRatingDummyData}
  />
)
---------------------------------------------------------------------- 
*/

import { useState } from "react";
import { Progress, Rating, Typography } from "@material-tailwind/react";
import { UserRating as UserRatingType } from "../types/userRating";
import { CurrentUserRating as CurrentUserRatingType } from "../types/currentUserRating";

interface UserRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  userRatings: UserRatingType;
  currentUserRating: CurrentUserRatingType;
  version:string // Si viene "Mini" en versión, el componente se modifica para una versión chica donde no se peude modificar y solo se ve el promedio, las estrellas y el total de votos.
}

export function UserRating({ userRatings, currentUserRating, version, className }: UserRatingProps) {
  // Calificaciones sobre el usuario de la calificación. 
  const [ratings, setRatings] = useState(userRatings);
  // Calificación del usuario actual.  
  const [currentRating, setCurrentRating] = useState(currentUserRating)

  /** Realiza todas las acciones necesarias al darle una calificación a un usuario.
   * 
   * * Actualiza los votos.
   * * Calcula el nuevo promedio.
   * * Actualiza el estado de las calificaciones.
   * @param value la calificación dada.
   */
  function rateUser(value: number) {
    // Nueva variable para ratings.
    const newRatings: UserRatingType = JSON.parse(JSON.stringify(ratings))
    // Nueva variable para currentRatings.
    const newCurrentRating: CurrentUserRatingType = JSON.parse(JSON.stringify(currentRating))

    // Si había votado previamente, resta el voto anterior.
    if (currentRating.voteValue) {
      newRatings[currentRating.voteValue]--;
    }
    // Si no había votado, agrega un voto.
    else {
      newRatings.totalVotes++
    }
    // Modifica el voto actual.
    newCurrentRating.voteValue = value
    // Suma el nuevo voto.
    newRatings[newCurrentRating.voteValue]++
    // Calcula el nuevo promedio.
    newRatings.average = parseFloat(getAverageRating(newRatings).toFixed(1)) 
    // Actualiza los votos del usuario.
    setRatings(newRatings)
    // Actualiza el voto del usuario actual.
    setCurrentRating(newCurrentRating)
  }

  /** Calcula el promedio de los votos.
   * 
   * @param newRatings: calificaciones modificacdas sobre el usuario.
   * @returns promedio de los votos.
   */
  function getAverageRating(newRatings:UserRatingType){
    // Calcula el valor total de todos los votos.
    const votesValue =
      5 * newRatings[5] +
      4 * newRatings[4] +
      3 * newRatings[3] +
      2 * newRatings[2] +
      1 * newRatings[1];

    // Si no hubo votos, retorna cero.
    if (newRatings.totalVotes === 0) {
      return 0;
    }
    // Calcula el promedio.
    const average = votesValue / newRatings.totalVotes;
    return average
  }

  /** Retorna un ícono con el estilo especificado.
   * 
   * @param filled si debe ser un ícono con relleno.
   * @param iconColor color a usar para el ícono.
   * @returns 
   */
  function getIcons(filled:boolean, iconColor: string) {
    return (
      <span className={`material-symbols-rounded me-0.5 ${filled ? "filled_icon" : ""} text-3xl ${iconColor}`} >
        star
      </span>
    )
  }

  return (
      <section className={`${className} flex flex-col w-[17rem] gap-2 transition-all select-none`}>
        {/* Sección promedio y estrellas de clasificación.*/}
        <div className={`flex items-center ${version === "mini" ? "gap-2" : "gap-4"} font-bold`}>
          <Typography className={`font-extrabold ${version === "mini" ? "text-md" : "text-5xl"} text-primary`}>
            {ratings.totalVotes > 0 ? ratings.average : "N/A"}
          </Typography>
        <div className={`flex ${version === "mini" ? "items-center gap-4" : "flex-col grow"}`}>
            <span className="grow">
              {
                ratings.average && (
                  // El componente Rating solo acepta números enteros en su valor.
                  <Rating
                    value={Math.trunc(ratings.average)}
                    readonly={version === "mini" ? true : false}
                    onChange={(value) => rateUser(value)}
                    ratedIcon={getIcons(true, currentRating.voteValue ? "text-primary_2" : "text-primary")}
                    unratedIcon={getIcons(false, currentRating.voteValue ? "text-primary_2" : "text-primary")} />
                )
              }
            </span>
            <Typography className={`font-medium text-sm ${version === "mini" ? "" : "ms-1 mt-[-0.5rem]"} text-dark`}>
              {ratings.totalVotes > 0 ? `${ratings.totalVotes} votos` : "Sin votos"}
            </Typography>
          </div>
        </div>
        {/* Sección de las barras de votos, se oculta en la versión mini.*/ }
        <div className={`grow flex flex-col ${version === "mini" ? "hidden" : ""}`}>
          <span className="flex items-center gap-1">
          <Progress className="saturate-0" variant="gradient" color="blue-gray" value={ratings[5] / (ratings.totalVotes / 100)} size="sm" />
            <Typography className="font-small text-xs text-akzm_gray">5</Typography>
            <Typography className="font-small text-xs text-akzm_gray">{getIcons(true, "akzm_gray text-xs")}</Typography>
          </span>
          <span className="flex items-center gap-1">
            <Progress className="saturate-0" variant="gradient" color="blue-gray" value={ratings[4] / (ratings.totalVotes / 100)} size="sm" />
            <Typography className="font-small text-xs text-akzm_gray">4</Typography>
            <Typography className="font-small text-xs text-akzm_gray">{getIcons(true, "akzm_gray text-xs")}</Typography>
          </span>
          <span className="flex items-center gap-1">
          <Progress className="saturate-0" variant="gradient" color="blue-gray" value={ratings[3] / (ratings.totalVotes / 100)} size="sm" />
            <Typography className="font-small text-xs text-akzm_gray">3</Typography>
            <Typography className="font-small text-xs text-akzm_gray">{getIcons(true, "akzm_gray text-xs")}</Typography>
          </span>
          <span className="flex items-center gap-1">
          <Progress className="saturate-0" variant="gradient" color="blue-gray" value={ratings[2] / (ratings.totalVotes / 100)} size="sm" />
            <Typography className="font-small text-xs text-akzm_gray">2</Typography>
            <Typography className="font-small text-xs text-akzm_gray">{getIcons(true, "akzm_gray text-xs")}</Typography>
          </span>
          <span className="flex items-center gap-1">
          <Progress className="saturate-0" variant="gradient" color="blue-gray" value={ratings[1] / (ratings.totalVotes / 100)} size="sm" />
            <Typography className="font-small text-xs text-akzm_gray">1</Typography>
            <Typography className="font-small text-xs text-akzm_gray">{getIcons(true, "akzm_gray text-xs")}</Typography>
          </span>
        </div>
      </section>
  );
}
