# Entorno (Front)

**Node**: 20.16.0 (LTS)

**React**: 18

**Tailwind CSS**

**Material Tailwind** (componentes)

**Material Symbols** (Íconos)

**Typescript** + **SWC**

**Docker & Docker compose**

**Puerto utilizado para el docker**: 3000

## Levantar Proyecto

****Se recomienda usar linux o WSL para docker debido a que a veces hay algunos errores al usar docker desktop.**

*(WSL es el subsistema de linux que se puede instalar en windows)*

1. Bajarse el proyecto del repo
2. Situarse en la raíz
3. Cambiar a rama develop `git checkout develop`
4. Levantar el contenedor`docker compose -f docker-compose-dev.yml up`
5. `pnpm i` 

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

---

## Reconstruir imagen

1. En la raiz del proyecto `docker compose -f docker-compose-dev.yml down` (rama develop)
2. Dentro de VS code dirigirse a la seccion de docker en la barra lateral
3. Una vez desplegada la seccion de docker y dirigirse en el listado de “imagenes/images”
    1. Dentro deberia haber una imagen llamada “alakazam-front-frontend”
    2. Click derecho sobre la misma y darle a eliminar
4. Luego de que haya sido eliminada ejecutar nuevamente `docker compose -f docker-compose-dev.yml up`
5. `pnpm i` 

---

## Actualizar cambios

Los cambios siempre se harán sobre la rama develop. Cuando queramos traer esos cambios a nuestras respectivas ramas de trabajo para actualizarlas debemos:

1. Cambiar a la rama develop `git checkout develop`(o con la interfaz de VS code)
2. Traer los cambios del repositorio `git pull` 
3. Dirigirnos nuevamente a nuestra rama `git checkout nombre-nuestra-rama` (o con la interfaz de VS code) 
4. “Actualizar/combinar” nuestra rama con la rama develop `git merge develop` 
5. En el caso de que existan conflictos, resolverlos a nivel local utilizando la seccion de git dentro de VS Code