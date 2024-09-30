import { UserRating } from "./userRating";

/**  Simula los datos de una propiedad:
  * Nombre.
  * Ubicación.
  * Lista de imágenes.
  * Opiniones de su usuario.
  * Estado de la propiedad: en venta, si se alquila, etc.
*/
export interface RealEstateProperty {
  name:string,
  location: string,
  images: string[],
  userRating: UserRating,
  propertyStatus: string,
}
