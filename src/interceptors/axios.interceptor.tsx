import axios, { AxiosRequestConfig } from "axios"
import { getValidationError } from "../utilities";
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
  //Actualizamos nuestro header para que en cada petición utilice el token que le demos
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = "laskdasdlk";
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };
  axios.interceptors.request.use((request) => {
    if(request.url?.includes("assets")) return request; //para no enviar el token siempre, podemos verificar si la pagina es publica o en este claso si es un asset publico, que retorne nomas la request
    return updateHeader(request);
  });

  //RESPONSE
  //El use va a utilizar 2 funciones, una para la respuesta en si y la otra para el manejo de errores (simil al try catch)
  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidationError(error.code)) //Con esto manejamos los errores en el Interceptor, NO en los componentes
      console.log("error", error)
      return Promise.reject(error) //SI ocurre un error, MATA a la respuesta
    }
  );
};