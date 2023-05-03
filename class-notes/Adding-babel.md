# Adding babel

## Introduction
Para esta actividad, se creara un directorio específico para el ***Backend***, permitiendo obtener un mejor estructura del projecto haciendolo ver mas profecional. como obejetivo de este apartado se creará un directorio específico para el ***Backend***.

## Methods
El primer paso para agregar ***Babel*** al proyecto es instalar las siguientes dependencias:

* @babel/cli
* @babel/core
* @babel/preset-env
* @babel-watch

Mediante el siguiente comando se instalarán las dependencias anteriormente mencionadas.

`npm i -D @babel/core@^7.13.15 @babel/cli@^7.13.14 @babel/preset-env@^7.13.15 babel-watch@^7.4.1`

Al finalizar la instalación, dentro del archivo Package.Json se observan las dependencias instaladas como se muestra continuación:

![Figure 1](/public/img/AB.png)

## Results
Al finalizar los pasos anteriores se optiene un directorio específico para el ***Backend***, permitiendo obtener un mejor estructura del projecto haciendolo ver mas profecional. La estructura final de la carpeta ***Server*** se observa a continuación.


## Discussions
Es necesario recordar que al mover estas carpetas y archivos dentro de ***Server*** se deberán modificar las rutas dentro de algunos archivos, también es importante que al ejecutar el modo ***Dev*** es necesario modificar por lo anterior mencionado.

