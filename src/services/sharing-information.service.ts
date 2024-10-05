import { SubjectManager } from "../utilities/subject-manager";

//Cualquiera que utilice este servicio va a poder acceder al canal de comunicacion que cramos con rxjs
export const sharingInformationService = new SubjectManager();