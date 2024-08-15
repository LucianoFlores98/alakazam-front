# Entorno (Front)

**Node**: 20.16.0 (LTS)

**React**: 18

**Tailwind CSS**

**Material Tailwind** (componentes)

**Typescript** + **SWC**

**Docker & Docker compose**

**Puerto utilizado para el docker**: 3000

## Levantar Proyecto

****Se recomienda usar linux o WSL para docker debido a que a veces hay algunos errores al usar docker desktop.**

*(WSL es el subsistema de linux que se puede instalar en windows)*

1. Bajarse el proyecto del repo
2. Situarse en la raíz
3. Levantar el contenedor`docker compose -f docker-compose-dev.yml up`

Con eso sería suficiente para levantar el proyecto, nuestra imagen docker se encarga de preparar todo el entorno instalando todo lo necesario.

Luego podremos verificar que nuestros contenedores están levantados con `docker-compose ps` 

1. Debe aparecer nuestro contenedor llamado **react** donde está el front
2. Y un segundo que se llama **postgres**

No es necesario realizar esto cada vez que queramos levantar el proyecto. Luego solamente debemos en el **visual studio code** dirigirnos a la sección de **docker** y ejecutar **Start** al contenedor que deseemos (en este caso el proyecto front **react**)

### Posibles problemas para iniciar el contenedor

1. Verificar si se está ejecutando el servicio docker
    1. Si estamos en WSL ejecutar`sudo dockerd` 
        1. Una vez iniciado dejar abierta la terminal para que se ejecute el servicio
    2. En windows verificar si está abierto docker desktop

---

### Info adicional

- Acceder a nuestro contenedor`docker exec -it [nombre contenedor] bash`
- El equivalente de npx usando pnpm es: `pnpm dlx`
- Ejecutar aplicacion: `pnpm dev` (no es necesario usarlo porque docker se encarga de ejecutarlo)
- La aplicacion se servirá en el puerto 3000. Accederemos a la misma utilizando en el navegador *localhost:3000*