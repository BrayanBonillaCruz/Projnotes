# Build script

## Introducción
En este apartado se observará la creación del ***Script build***, este comando indicará a babel que lea todo el contenido del directorio ***Server*** y que genere la salida en el directorio ***Dist***.

## Metodos
Dentro del archivo ***Package.Json***, en la sección de ***Scripts*** se  crearán dos, el primero de estos tendrá como nombre ***Clean***, el cual eliminara el archivo ***Dist*** en caso de existir, el segundo ***Script*** se llamara ***Build*** este ejecutara el ***Script Clean***   este comando indicará a ***Babel*** que lea todo el contenido del directorio ***Server*** y que genere la salida en el directorio ***Dist***. El contenido de estos ***Scripts*** se observan a continuacion: 

![Figure 1](/public/img/BS.png)

## Resultados
Al ejecutar el comando ***Npm run build***, en el directorio rais se creara una carpeta con el nombre ***Dist*** como se observa continuación:

![Figure 2](/public/img/BS1.png)

## Discusión
***Babel*** permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.