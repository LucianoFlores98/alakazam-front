import { Button } from "@material-tailwind/react";

const NavbarBottom = () => {

  return(
    <div className="w-full h-14 flex justify-between fixed z-20 items-center mx-auto px-8 bg-slate-50">

    {/** Ubicación COMPONENTE LOCATION */} 
      <Button className="bg-primary_2"> Ubicacion</Button>
    {/** end ubicacion*/}  
    
    {/** Filtro principal*/}  
    <div className="">

    </div>
    {/** end filtro principal*/} 
    {/** Ordenar por  */} 
    <div className="flex items-center h-5 space-x-1 text-small">

        {/** Dropdown AKI */}
    </div>
    {/** end ordenar por  */} 


    </div>

  );

}

export default NavbarBottom;