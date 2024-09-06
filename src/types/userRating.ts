/* Simula los datos relacionados a las opiniones dadas sobre un usuario.
  El primer atributo es una index signature, parecido a un diccionario.
*/
export interface UserRating {
  [key: number]: number;
  totalVotes: number;
  average: number;
}
