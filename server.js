const express = require('express');  //need npm i express first
const app = express();  //
app.use(express.json());

app.get('./', (req, res) => {
  res.send(`here`);
})

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