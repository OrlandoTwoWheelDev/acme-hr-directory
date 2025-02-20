# Full Stack Application

General info I've compiled after messing up last night and adding notes to the project today during class. Giving me a better view on the multitude of parts and how they fit together.

Will need to push to GitHub and use feature branches. This will help keep parts that work secure, will also keep from having troubles pushing to GitHub with too much information. Basically, keeping everything secure incase something happens.

## sketch out the project
  - creates the big picture so that you know what all
  is needed in the production of the app

## install:
  - npm init -y
  - npm i express
  - npm i nodemon

- running:
  - nodemon run server.js

## build the database and connecting to it

- build up the tables and columns

- testing them in the terminal and with POSTMAN

- then push to GitHub

- then make the server with routes for the data 

- ensure server.js is connected to other files

## npm create vite@latest
  - clear up files not needed
  - rename server.js to server.cjs 
    - to not throw and error due to vite
  - adjust package.json by compiling them into one
  - adjust .gitignore by compiling them into one
  
- after all is set, everything can be dragged into ONE FOLDER
  - vite creates its own, so again we are compiling into one

- npm run build to create the dist folder so the front end 
  can read what we are passing into it
  - it will have the HTML that we want to send and use

 - then push to GitHub