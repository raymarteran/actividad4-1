# Actividad 4.1. Proyecto: API. GitHub Search Users
<p>e-actividad 4.1: Aplicar conocimientos en ejercicio practico de JS.</p>
<br>
<h2> Colaborador </h2><ul>
<li>Raymar Teran  <i>C.I: 25.604.593</i></li>
</ul>
<br>

<h2>Introducción</h2>
<p>Esta aplicación consiste en un buscador de usuarios utilizando la API de GitHub. Donde debemos cumplir con:</p> 
<ul>
	<li>Diseño Responsive</li>
	<li>Cambiar entre tema Claro y Oscuro</li>
	<li>Buscar usuarios de GitHub por su nombre de usuario</li>
	<li>Ver información relevante del usuario basada en su búsqueda</li>
	<li>Establecer esquema de color en función de sus preferencias de computadora</li>
</ul>

<br>
<h2>Tecnologías y Herramientas empleadas </h2>
<p>Nuestra aplicación se compone de <b>HTML</b>, <b>CSS</b> y <b>JS</b></p>
<p>Estas herramientas empleadas son: la API de GitHub, que puedes encontrar aquí: <i>https://api.github.com/</i> ; también se usa Reactjs, el cual es una librería Javascript diseñada para crear interfaces de usuario.</p>
<p>En este punto lo dividiremos en dos partes: la primera con las herramientas empleadas el <b>Frontend</b> de la página web; y una segunda parte con esas herramientas empleadas para el <b>Backend</b> de la página web.</p>


<br>

<h2>Instalación y Arranque del Sistema</h2>
<p>Para iniciar el arranque <i>(teniendo en cuenta que posee la herramienta empleada instala en su escritorio)</i>, ha de realizar lo siguiente:
</p>
<ol><li>Entra a mi repositorio llamado <b><i>/raymarteran/actividad4-1</i></b> al cual tienes acceso, presionando <i> "Code" </i>  donde nos dirigimos a <i>"Open With GitHub Desktop"</i>, y presionamos <i>"abrir"</i> a la ventana. Se abrirá GitHub de escritorio con el siguiente aviso <i>" Cant find /raymarteran/actividad4-1"</i>, presionamos <i>"Clone Again"</i> con esto se clonará el repositorio dentro de tu computador y así poder trabajar en él.</li>
<li>Abre la carpeta del repositorio en Visual Studio Code, si te aparece una opción que te pregunta si confías en los autores del archivo presiona <i>Sí</i>.</li></ol>

<h3>Arranque del Servidor</h3>
<ol>
	<li>En vista de que empleamos <i>.gitingnore</i> para ocultar archivos como la carpeta de <b>node_modules</b>, primero ha de instalar <i>npm</i> de manera que se descarguen todos los archivos necesarios para el funcionamiento de la app. Esto lo podrá hacer con <i><b>$ npm i</b></i>.</li>
	<li>En el momento en que se instale correctamente <i>npm</i> podemos iniciar la app con Reactjs con el comando <i><b>$ npm start</b></i> con el cual llamará a <i>react-scripts start</i> y comenzará a correr la aplicación,</li>
	<li> Por último este automáticamente abrirá tu navegador, pero si no es así dirigite a él y escribe en la URL <b><i>http://localhost:3000/</i></b>.</li>
</ol>