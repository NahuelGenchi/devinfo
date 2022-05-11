//CÓMO EMPEZAR A COMPILAR SASS//

1. Abrir la consola en esta carpeta con ctrl+'
    a. npm install nodemon node-SASS (npm install --save-dev  --unsafe-perm node-sass)
    b. npm init

2. Abrir el archivo package.json y editarlo
    a. A continuación de && exit 1" colocar una , presionar enter
    y pegar el siguiente texto:

"build-css": "node-sass --include-path scss scss/main.scss css/style.css",
"watch-css": "nodemon -e scss -x \"npm run build-css\""

3. Crear las carpetas con sus respectivos archivos
    a. scss/main.scss
    b. css/style.css

4. En la consola correr el comando
    a. npm run build-css //Por unica vez
    b. npm run watch-css

5. Cada vez que se quiera seguir compilando en SASS
    a. abrir la consola con ctrl+'
    b. npm run watch-css

//FIN//


https://onedebos.wordpress.com/2019/08/01/how-to-setup-sass-in-vscode/

To install SASS, follow the following steps.

1. Install node and npm.
2. Install SASS from your command line using npm install -g sass.
3. Once done, you need to install an extension in VSCode that watches your SCSS files and converts them to regular CSS each time you save. Download the Live SASS Compiler extension in VSCode.

1. Create an index.html file
2. Write a basic HTML Syntax. VSCode has a boilerplate shortcut for this. simply type “!” into the HTML file and then press the enter key.
3. Create a styles.scss file. When you create a .scss file, you will see a pink ‘s’ logo on the side of the file in your explorer window indicating that it’s a SASS file.

//END//

joapalobael.github.io/git_y_github/

Git ignore: ignorar carpetas y archivos de json

Escribir dentro los archivos que querés ignorar

node_modules/ : Si es una carpeta lo que vas a ignorar, escribí el nombre de la carpeta y terminalo con /
*.json :Si es una extensión de archivo, se escribe primero el * y luego la extensión incluyendo el .
style.css :Si es un archivo, se escribe el nombre del archivo con su extensión.

Si querés borrar algo que te habías olvidado o generaste el .gitignore después de haber agregado archivos a git:
Hace los pasos 1 y 2 de la misma manera
git rm -r --cached nombre_archivo_o_carpeta_olvidada
git commit -m 'Eliminada carpeta node_modules del repo'