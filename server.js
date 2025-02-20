const express = require('express');  //need npm i express first
const app = express();
app.use(express.json()); // used to convert requests

app.use(express.static('dist'));  //needed to ensure safe file is sent up to front end

app.get('./employees', (req, res) => {
  res.send(`${__dirname}/employees`); // will need the ${__dirname} to not throw an error
})

//getting the employees from the js file
app.get('/api/v1/employees', async (req, res) => {
  console.log(`getting foods`);
  const allEmployees = await getAllEmployees();
});


//getting a particular employee by id
app.get('api/v1/employees/:id', async (req, res) => {
  const { id } = req.params;
  const foundEmployee = await getEmployeeItem(id);


  res.send(foundEmployee);
})


//used to display errors
app.use((req, res) => {
  res.status(404).send(`PAGE NOT FOUND`);
});


//needed to create server for live website
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});


//this is for LOCAL ONLY
// app.listen(3000, () => {
//   console.log(`listening on 3000`);
// });

console.log(`welcome`);

//run it with "node server.js"
//or
//npm i nodemon
//run with nodemon server.js


//make sure you're connected to the database 
// or else there will be an error


//CUSTOM ERROR HANDLER, express knows 
// that it is due to having 4 parameters
app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});