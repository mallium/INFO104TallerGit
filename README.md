# INFO104 Taller Git
GIT nos permite desarrollar software en forma colaborativa. Básicamente permite distribuir, sincronizar, monitorear y **versionar** nuestros proyectos de software. 

## Instalar GIT
Primero debes tener GIT instalado en tu máquina. Si tienes MacOS o linux es posible que GIT esté ya en tu máquina. Prueba abriendo un termina o consola y escribe ($ representa que estás en línea de comandos, el intérprete de comandos)

`$ git version`

Si no tienes GIT, puedes revisar como instalarlo de acuerdo con tu plataforma en las guías de [github para instalación](https://github.com/git-guides/install-git).

## Clonar (clone) un repositorio
Con git podemos crear repositorios o 'clonar' repositorios. Un repositorio es una versión versionada del código de un proyecto. Un proyecto puede tener 1 o más repositorios. Primero clonaremos un repositorio de ejemplo. Para clonar un repositorio necesitamos tener varias cosas: 
- La URL o identificador del repositorio que vamos a clonar. El repositorio que clonaremos está alojado en github, y su direccción es : **https://github.com/mallium/INFO104TallerGit.git**
- Nuestra cuenta github para poder hacer cambios en el repositorio. El repositorio de ejemplo es **público**, lo que significa que no necesitarás tus credenciales (usuario/contraseña) para clonar el repositorio, pero si las necesitarás para 'subir' tus cambios.
- Estar en la carpeta donde vamos a 'descargar' el repositorio clonado. Recuerda, el repositorio está en github, en la nube, y queremos descargarlo. Entonces, primero abre un terminal o consola y muévete a la capeta en que quieres que el repositorio quede. En mi caso me muevo a una carpeta INFO104/repositorios. 
 
Luego clona el repositorio con la siguiente instrucción:

`$ git clone https://github.com/mallium/INFO104TallerGit.git`

Debieras ver indicadores que están bajando los archivos de repositorio.
Puedes revisar el repositorio en tu sistema de archivos: ir a la carpeta. Verás que hay una carpeta oculta .git. No vayas a borrar esta carpeta!!! Contiene toda la información de versionamiento.

Clonar un repositorio implica 'descargarlo' a tu máquina, pero también establecerlo como repositorio **local**. El repositorio es local porque en tu propia máquina tienes una copia del repositorio versionado. En este punto es importante entender que tu copia local del repositorio no está automáticamente sincronizada con el repositorio en github. En general, para versionar cambios (modificación de archivos, agregar archivos, eliminar archivos) primero debes agregar estos cambios al repositorio local y luego al repositorio remoto. Son dos pasos diferentes!

## Realizando cambios y versionando en el repositorio local
Lo siguiente que haremos será hacer modificaciones en los archivos. Por ejemplo crear un archivo de texto nuevo. 

Crea un archivo con tu nombre.txt en la raiz del repositorio. Luego, en la consola y estando en la carpeta del proyecto, ejecuta el comando 

`$ git status`

Verás que hay archivos que deben ser **agregados**

Agrega el archivo al repositorio con el comando

`$ git add nombre.txt`

Esta acción de agregar (add) sólo informa a git que estos cambios se van a sincronizar. El paso crítico es hacer el **commit**, que en el fondo termina por agregar el archivo (o los cambios hechos) en la versión actual del repositorio local. Para hacer el commit debes en el terminal ejecutar 

`$ git commit -m "mi commit"`

- El texto "mi commit" es un mensaje que debe describir los cambios a hacer commit. Los mensajes de commit son requisito y son súper útiles una vez que todos están trabajando en el repositorio porque permiten reconocer fácilmente que ha cambiado en cada commit. 

**Importante**. Hacer un commit almacena los cambios (versiona) en el repositorio local, no en el remoto. El repositorio original en github, hasta el momento, permanece sin cambios. 

## Enviando la versión actualizada del repositorio local al repositorio remoto
Para publicar nuestros cambios en repositorio compartido, el remoto, debemos hacer un **push**:

`$ git push origin main`

El comando **git push** toma dos argumentos: **origin** y **main** que se refieren al repositorio original (en github) y su _rama_ **main**.
En este momento git puede pedirte tu nombre de usuario github y tu contraseña. 

## Actualizando el repositorio local
Cuando trabajamos en equipos de desarrollo, varios desarrolladores/as van subiendo sus cambios al repositorio remoto. Por supuesto, si dos desarrolladores cambian los mismos archivos, al subir los cambios (push) habrán **conflictos**. Los conflictos pueden volverse engorrosos, asi que primero veamos si podemos organizarnos para minimizarlos! 

La primera estrategia es que siempre cuando empecemos a trabajar en el código, descarguemos los últimos cambios. Esto lo hacemos con el comando **pull**:

`$ git pull origin main`

Si el repositorio remoto tiene cambios que nosotros no tenemos, se descargarán estos cambios y nuestro repositorio local quedará actualizado. Pero **cuidado** que si hemos hecho cambios en el local, aparecerá un conflicto :S

La segunda estrategia es trabajar en **ramas** o **branches**. Un **branch** es otra copia del repositorio que sigue una línea de desarrollo paralelo. La idea es versionar los cambios que hagamos en un rama en particular y poder seguir con este desarrollo sin influir en el estado de la rama main (o _master_). Cuado estos cambios ya están _maduros_, probados, entonces podremos hacer un **merge** o juntar los cambios con el repositorio principal (master o main). 

Esta instrucción crea el branch _complemento_ (el nombre es sólo un ejemplo)

` $ git checkout -b complemento`

En realidad se crea el branch en el repositorio local. Si el branch existe en el repositorio remoto, entonces git actualizará tu carpeta con los archivos del branch correspondiente. Moverse entre branches significa cambiar archivos, pero git lo maneja! 

Ahora haremos algunos cambios, por ejemplo agregaré un archivo complementos.txt (crear el archivo con algún contenido en la carpeta del proyecto) en el proyecto y lo versionaré:

`$ git add complementos.txt`
`$ git commit -m "agregado archivo con complementos"`

Ahora nuestro branch está registrado en nuestro repositorio local y localmente actualizado. Para subir el branch (no siempre querremos hacer esto) al repo remoto:

`git push -u origin complemento`

Notar como referencia al branch _complemento_ de _origin_ y no a _main_. El branch _complemento_ no existe en el repo remoto, pero será creado. Para moverse de un branch a otro podemos usar el comando git checkout.

`$ git checkout main`  nos devuelve al branch main

`$ git banch`  nos muestra los branches del repo y en cual estamos

## Mas información
[Libro de git en español](https://git-scm.com/book/es/v2)

