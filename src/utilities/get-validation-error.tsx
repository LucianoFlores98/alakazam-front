import { TypeWithKey } from "../models"

// Recibiremos el error code y depende de cual sea,
export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = { //Va a recibir errores de mensajes
    "ERR_NETWORK": "Se rompio la red",
  };

  return codeMatcher[errorCode];
}