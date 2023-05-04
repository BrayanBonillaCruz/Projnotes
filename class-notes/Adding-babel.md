# Adding babel

## Introducción
En este apartado se observará la implementación e instalación de ***Babel*** dentro del proyecto, ***Babel*** 
permite observar modificaciones realizadas en el código ***JavaScript*** sin necesidad de detener el servidor local y volver a encenderlo, también permite transpilar versiones anteriores de ***JavaScript***.

## Metodos
El primer paso para agregar ***Babel*** al proyecto es instalar las siguientes dependencias:

* @babel/cli
* @babel/core
* @babel/preset-env
* @babel-watch

Mediante el siguiente comando se instalarán las dependencias anteriormente mencionadas.

`npm i -D @babel/core@^7.13.15 @babel/cli@^7.13.14 @babel/preset-env@^7.13.15 babel-watch@^7.4.1`

Al finalizar la instalación, dentro del archivo Package.Json se observan las dependencias instaladas como se muestra continuación:

![Figure 1](/public/img/AB.png)

Una vez instaladas las dependencias, dentro del archivo ***Package.Json*** se tienen que configurar los ***Scripts*** ***Start*** y ***Dev*** como se observa a continuación:

~~~
  "scripts": {
    "start": "PORT=3000 APP_URL='http://localhost' DEBUG=projnotes node ./bin/www"
    "start": "PORT=3000 APP_URL='http://localhost' DEBUG=projnotes node ./server/bin/www",
    "dev": "PORT=3000 APP_URL='http://localhost' DEBUG=projnotes babel-watch --watch ./server/views ./server/bin/www"
  }
~~~

En el directorio raíz se creará un archivo con el nombre .Babelrc, este archivo llevará la configuración que se muestra continuación: 

~~~
 "presets" : [
        [
            "@babel/preset-env",{
                // Los targets son las plataformas donde se ejecutara el codigo final
                "targets" : { "node" : "current"}
            }
        ]
    ]
~~~

## Resultados
Al editar el ***Script*** ***Dev*** con ***Babel***, permitirá observar modificaciones realizadas en el código ***JavaScript*** sin necesidad de detener el servidor local y volver a encenderlo. 


## Discusión
***Babel*** permite observar modificaciones realizadas en el código ***JavaScript*** sin necesidad de detener el servidor local y volver a encenderlo, también permite transpilar versiones anteriores de ***JavaScript***.

