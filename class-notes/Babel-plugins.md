# Babel plugins

## Introducción
En este apartado se implementará ***Babel plugin module resolver***, Este complemento le permite agregar nuevos directorios "raíz", configurando un alias personalizado para directorios.
## Metodos
En la terminal se debe ejecutar el siguiente comando:

`npm i -D babel-plugin-module-resolver`

Este comando permitirá instalar en las dependencias ***Babel plugin module resolver***. Al finalizar la instalación, dentro del archivo ***Babelrc*** se configurarán las rutas con su respectivo alias, esto se observa a continuación: 

![Figure 1](/public/img/BP.png)

## Resultados
Configurar alias para rutas permite evitar rutas como ***../../../server/app.js***, con el uso de alias esto queda de la siguiente manera:

![Figure 2](/public/img/BP1.png)

## Discusión
El uso de alias evita crear rutas como 
***../../../server/app.js***, conforme el proyecto va creciendo esto es inevitable, Para evadir esto se hace uso de ***Babel plugin module resolver***, permitiendo que los alias queden como ***@server/app.js***.