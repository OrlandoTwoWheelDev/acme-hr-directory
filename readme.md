# Full Stack Application

General info I've compiled after messing up last night 
and adding notes to the project today during class. 
Giving me a better view on the multitude of parts 
and how they fit together.

Will need to push to GitHub and use feature branches. 
This will help keep parts that work secure, will also 
keep from having troubles pushing to GitHub with too much 
information. Basically, keeping everything secure incase something happens.

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

## Main.jsx
  - remove strictMode
  - then import BrowserRouter
    - replace strictMode tags surrounding APP
    with BrowserRouter
  - this adjusts enable client side routing of React application

## App.jsx
  - import useEffect
  - use the useEffect in the const app to then add in
  and run an async function that will fetch the items from 
  the API(the backend that was made above)
  - you will also need the empty array at the end of the useEffect
  so that you don't get an infinite loop
    - `useEffect(( ) => { }, [])`
  - Fetch and have useState that you can use to have a
  value, setValue; that you can use to setValue(fetched items)
  - in the return, we will need to RETURN the 
  `<li key={singleValue.id}>{singleValue.name}</li>`
  - also need to import Routes, Route, useState, useEffect
    - these will be imported at various times so that they can define 
    the code that is input

## ListValues.jsx
  - will need to create this file for each thing you're trying 
  to build
  - will need to export them from that page and then import them
  to the app.jsx
  - these will also be a use of useParams in order to extract 
  certain information that you're looking for
    - `const{ id } = useParams();`
  - these are very simple and straightforward
  - rinse and repeat

## Display Details
  - to display details of a listed item when clicked, you will need
  to add an onCLick into the li
  - `onClick{ ( ) => onClick( )}`

## Linking Values 
  - you will need to link the li so that when clicked it'll send you
  to the page you had created of ListValues.jsx
  - uses `to= {'URL(or folder) ${singleValue}'}`
  - curly braces are used to display the jsx values. If not there will 
  be an error in the code when ran

## Routes, Route, Link
  - these are used to show the routes of ListValues
  - they also create a link for those ListValues

