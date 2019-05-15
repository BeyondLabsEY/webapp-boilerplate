# webapp-boilerplate
A front-end web app to start a new project from scratch.

## Must have
Node + npm installed globally on your computer.

To check if Node is installed locally, type ```node -v``` in a terminal window or command prompt. This should print something like ```v10.1.0```.
It works the same to check if npm is also installed... Type ```npm -v``` and wait for something like ```6.9.0``` to be returned.

If none of the above works, follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) before you continue. Once everything's worked, keep going!

## First use
After cloning this repository, enter its root folder and type ```npm install``` in a terminal window. This will download and install all the required packages to make this application functional.

## Development environment
Open a terminal window and type ```npm run dev```. This will launch the application in a new browser's tab.
For every change you make in this project, the opened browser window will automatically update.

Now you can start coding... Have fun!

## Project structure

This project is fully automated. It uses [npm](https://www.npmjs.com/), [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) as engines to do the boring part... All you have to do is code!

About the development stack, this application was created using [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). The folder ```src``` contains all the resource you need to start developing your application. This is the place where you can store your assets and create your own components.

You can always change anything in this entire structure if you want to, obviously.

### Favicon generator
You can use [this favicon generator](https://realfavicongenerator.net/) to customize your application. It would help you with that little icon shown in your browser's tab or bookmarks list.

After you load your icon and set all the instructions, download the favicon package, unzip it and replace all files in the folder ```src/assets/favicon```. If necessary, update the ```favicon.js``` file according to your needs, all the magic happens there.

### Renaming

Don't forget to rename your project!

Update this project's name and description in the file ```package.json```. You may also wanna replace that ```<title>...</title>``` tag located in ```src/index.html``` to something more apropriate.

### Custom styles
The visual design of this application is based on Bootstrap, but with some overwritten presets. To go deeply into more details, enter the ```src/assets/scss/custom.scss``` file. You can also add your custom styles there.

## Production build
To bundle the application, type ```npm run build``` in a terminal window. This will generate a ```dist``` folder containing all the compiled code and production-ready files.

### Optionally
In the same terminal window, enter the newly generated ```dist``` folder by typing ```cd dist```.

Then type ```zip -r build.zip .``` to generate a compressed file called ```build.zip```. You can upload this file directly to the web server of your choice.