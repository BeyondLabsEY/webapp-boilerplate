# webapp-boilerplate
A front-end web app to start a new project from scratch.

## Must have
Node + NPM installed globally on your computer.

To check if Node is installed locally, type ```node -v``` in a terminal window or command prompt. This should print something like ```v10.1.0```.
It works the same to check if NPM is also installed... Type ```npm -v``` and wait for something like ```6.9.0``` to be returned.
But if none of the above works, follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) before you continue. Once everything's worked, keep going!

## First use
After cloning this repository, enter its root folder and type ```npm install``` in a terminal window. This will download and install all the required packages to make this application functional.

## Structure

### Favicon generator
You can use [this favicon generator](https://realfavicongenerator.net/) to customize you application. It would help you with that little icon shown in your browser's tab.

After you load your icon and set all the instructions, download the favicon package, unzip it and replace all files in the folder ```src/assets/favicon```. If necessary, update the ```favicon.js``` file according to your needs, all the magic happens there.

## Development environment
Open a terminal window and type ```npm run dev```. This will bootstrap the application in a new browser's tab.
For every change you make on this project, the opened browser window will automatically update.

Now you can start coding... Have fun!

## Production build
To bundle the application, type ```npm run build``` in a terminal window. This will generate a ```dist``` folder containing all the compiled code and production-ready files.

### Optionally
In the same terminal window, enter the newly generated ```dist``` folder by typing ```cd dist```.
Then type ```zip -r build.zip .``` to generate a compressed file called ```build.zip```. You can upload this file directly to the web server of your choice.