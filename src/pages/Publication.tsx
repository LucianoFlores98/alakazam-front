import { useParams } from "react-router-dom";

function Publication() {

  //Nos traemos el ID de la publicacion para mostrarlo
  const {publicationId} = useParams()
  
  return(
    <div className="flex max-w-full flex-wrap h-max bg-gray-100">
      <h2>Publicacion {publicationId}</h2>
    </div>
  );
}

export default Publication;