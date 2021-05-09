# A health app to reduce stress.

How to use app on your local device

## Setup and dependencies

The `create react app` depends on `Node` and lots of node_modules. 

You will need to have node installed (more info in https://nodejs.org) and then run `npm update` from the root folder of this project.

To run the code you can use on of the following commands:
* `npm start` : Starts the application in development mode. It will open a browser with the app

* `npm run build` : Creates the production code in the build folder. The command will give you the instructions on how to show the production code

## External tools

I tried not to use many external components and libraries in order to learn a bit more about the basics of React.

To follow is the list of packages that I added:
* `moment` : To deal with date and time in notes app, specifically in the formatting
* `react-router-dom` : To deal with the routes in notes app
* `react-newline-to-break`: To deal with the description new lines rendering to html
* `bootstrap` : Used the default template mainly just to make it look a bit nicer and responsive
* `react-snake-game` : I have used npm library of snake game in the Games section.
* `Quiz` : The quiz game was re created using this repository "https://github.com/AykutSarac/react-quiz"