# 🔰 Trabajo integrador del módulo 5 - Api Memes.


![INTRO](https://pbs.twimg.com/media/GJ0_BOZXAAAuwVj?format=jpg&name=medium)

## 🔸Introducción:

En este trabajo se construyó una api desde cero, usando distintas herramientas de *nodeJS*, *express* y otras dependencias como **zod**, **randomUUID** y encriptación de las contraseñas para brindar mayor seguridad.

Se crearon dos archivos JSON que almacenan datos de **usuarios** y otro para almacenar los datos de la temática seleccionada: **memes**.

Se proyectó la idea de hacer una red social, donde los usuarios puedan realizar distintas acciones sobre los memes y los usuarios. Para ello ***es necesario tener una cuenta***, luego loguearse con usuario y contraseña. Esto les administrará un ***token*** único para cada usuario y cada sesión iniciada, que será fundamental para realizar las acciones que el usuario desee.

***

## 📍EJECUCIÓN DEL SISTEMA:

 Para ejecutar estos procesos, poder ver la información solicitada y realizar las distintas acciones del sistema, debemos levantar el servidor con un comando de node.
Aquí se podrán apreciar los comandos de ejecución que se enviarán por consola:
 
| COMANDO DE EJECUCIÓN | TIPO DE ACCESO      | 
| -------------------- | :-----------------: | 
| npm run start        | USUARIOS            |       
| npm run dev          | DESARROLLADORES     |       
| npm run build        | COMPILADO/PRODUCCIÓN|      


### 📍 INSTRUCCIONES PARA EL USUARIO.

#### 🟢 Para los ***usuarios***, estas acciones requieren tener la sesión iniciada:

* Para obtener toda la lista de usuarios.
* Para obtener la información de un usuario en particular.
* Para modificar los datos de mi propio usuario.
* Para borrar mi usuario.
* Para cerrar la sesión.
  
#### 🟢 Para realizar las siguientes modificaciones en ***memes***, se requiere tener la sesión iniciada:

* Para crear un nuevo meme.
* Para modificar los datos de un meme.
* Para borrar un meme.
* Para likear un meme.

#### 🔴 Acciones de ***usuarios*** que no requieren iniciar sesión:

* Registrar un usuario.
* Hacer el *login* de una cuenta. Para esta acción **se requiere estar registrado**.

#### 🔴 Acciones sobre ***memes*** que se pueden realizar sin estar registrado o sin iniciar sesión:

* Mostrar toda la lista de memes.
* Buscar un meme por su ID.
* Mostrar el top 5 de memes *más likeados*.

#### 🟡 Otras acciones que se pueden realizar sin registro y sin iniciar sesión:

* Mostrar la versión de la api.
* Mostrar un **ping** que muestre la información del servidor y su configuración.

***
## 🔹 NOTAS PARA DESARROLLADORES:
Los desarrolladores que deseen probar el sistema, deben contar con nodeJs y se instelarán las dependecias adjuntas en el **packaje.json**. Se podrá hacer un PING con la herramienta OS de node, con el endpoint correspondiente. Aunque también el sistema ya tiene agregado otro ping para cada petición con la dependencia **Morgan**.
Al compilar con el comando, y ejecutar desde el sistema compilado mejora la calidad y la rapidez de las respuestas a las peticiones.

## 🔹 ERD PARA EL FLUJO DE FUNCIONAMIENTO DE LA API:
![ERD](https://pbs.twimg.com/media/GJ-aSn4WAAEGxef?format=jpg&name=large)

## 🔹 EJEMPLOS DE ENDPOINTS:

***

### 📋 <u> Fuentes y documentación: </u> ###

* LINK PARA IMAGENES ➡️ [Know Your Meme.](https://knowyourmeme.com/)
* EMOJIS PARA PERSONALIZAR LAS RESPONSES ➡️[Emojipedia.](https://emojipedia.org/)
* VIDEO QUERYPARAMS ➡️ [Queryparams Express.](https://www.youtube.com/watch?v=--TQwiNIw28&t=315s)
* FORMATO DE UN PING ➡️ [Ping en una api.](https://www.dotcom-monitor.com/wiki/es/knowledge-base/api-ping/)
* INFO PARA EL PING ➡️ [Ping con un IP.](https://kinsta.com/es/base-de-conocimiento/como-hacer-ping-a-una-direccion-ip/)
* DOCUMENTACIÓN OS EN NODEJS ➡️ [Documentación nodeJS - OS.](https://nodejs.org/api/os.html)
* INFO DE OS PARA UTILIZAR NETWORKINTERFACES ➡️ [NetworkInterfaces os NodeJS](https://www.geeksforgeeks.org/node-js-os-networkinterfaces-method/)
* DOCUMENTACIÓN DE ZOD ➡️ [Documentacion npm zod.](https://www.npmjs.com/package/zod)
* QUERY PARAMS ➡️ [Implementación de Query Params en express.](https://keepcoding.io/blogque-significa-el-req-query-en-express-js/)
* TIPOS DE ESQUEMAS ERD ➡️ [ERD Diagrams.](https://vertabelo.com/blog/vertabelo-tips-good-er-diagram-layout)
* ERD tool ➡️ [ER diagram tool.](https://www.lucidchart.com/pages/landing/er-diagram-software?utm_source=google&utm_medium=cpc&utm_campaign=_chart_en_tier3_desktop_search_nb_exact-phrase_&km_CPC_CampaignId=2083826535&km_CPC_AdGroupID=76733733037&km_CPC_Keyword=erd%20diagram&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=476146097723&km_CPC_TargetID=aud-812368091438:kwd-329821251308&km_CPC_Country=1000042&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gXSNc6olH2AAUk_HdJKkm-rIVuSEGnTdLLqwGBQ0cgij4Yl1YTLUecaAnEAEALw_wcB)
* MODELO EJEMPLO ERD [ERD Example.](https://assets-global.website-files.com/62db30bc372ce21ab184bf7b/65e6077777c97133ca569d04_entity.png)
* MODELO EJEMPLO ERD [ERD Example.](https://images.edrawsoft.com/articles/er-diagram-example/one-to-many-erd.png)
***

- 📝Autor: Ailén Páez.
- 💼[Linkedin](https://www.linkedin.com/in/paezailenj/)
