import { TypeWithKey } from "../models"

// Recibiremos el error code y depende de cual sea,
export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = { //Va a recibir errores de mensajes
    ERR_NETWORK: 'Se rompió la red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    ERR_NAME_NOT_RESOLVED :'Link erroneo'
  };

  return codeMatcher[errorCode];
}