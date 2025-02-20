const express = require('express');
const app = express();
app.use(express.json());

app.get('./', (req, res) => {
  res.send(`here`);
})

app.listen(3000, () => {
  console.log(`listening on 3000`);
});

console.log(`welcome`);