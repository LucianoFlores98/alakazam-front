import {Button, Card} from "@material-tailwind/react";

const ICONS = [
  {
    iconName: "home",
    label: "Casa"
  },
  {
    iconName: "apartment",
    label: "Apartamento"
  },
  {
    iconName: "meeting_room",
    label: "Sala de reuniones"
  },
  {
    iconName: "store",
    label: "Tienda cercana"
  },
  {
    iconName: "pets",
    label: "Acepta mascotas"
  },
  {
    iconName: "outdoor_garden",
    label: "Jardín"
  },
  {
    iconName: "child_care",
    label: "Apto para niños"
  },
  {
    iconName: "person",
    label: "Capacidad para una persona"
  },
  {
    iconName: "female",
    label: "Alojamiento para mujeres"
  },
  {
    iconName: "floor",
    label: "Piso elevado"
  },
  {
    iconName: "pool",
    label: "Con piscina"
  },
  {
    iconName: "wifi",
    label: "Wi-Fi incluido"
  },
  {
    iconName: "fitness_center",
    label: "Gimnasio"
  },
  {
    iconName: "garage",
    label: "Estacionamiento disponible"
  },
  {
    iconName: "local_cafe",
    label: "Cafetería cercana"
  },
  {
    iconName: "directions_bus",
    label: "Cerca del transporte público"
  },
  {
    iconName: "security",
    label: "Seguridad 24 horas"
  }
];


interface Props {
  iconName?:string;
  label?:string;
}

export const SideBarMini: React.FC<Props> = ({iconName, label}) => {
  return (
    <Card  className=" h-full max-w-1/4 rounded-sm flex flex-col " shadow={false} >
      <div className="flex flex-col items-center">
        {
          ICONS.map(({iconName,label}) =>(
            <Button variant="text" className="flex flex-col" fullWidth>
            <span className="material-symbols-rounded mb-1" >{iconName}</span>
            {label}
          </Button>
          ))
        }



      </div>
    </Card>
  );
}