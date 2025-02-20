const { createDepartments } = require('/db/department')
const { createEmployees } = require('/db/employee')
const client = require('/db/client.js') //importing so it can connect
app.use(express.json()); //needed for 

//This goes first, because without it, it can't 
// create something that already exists
const dropTables = async () => {
  try {
    //talk to the database with client.query
    await client.query(` 
      DROP TABLE IF EXISTS employees;
      DROP TABLE IF EXISTS departments;
      `);
  } catch (err) {
    console.log(err)
  }
};

const createTable = async () => {
  try {
    //talk to the database with client.query
    await client.query(`
      CREATE TABLE departments(
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL UNIQUE);

      CREATE TABLE employees(
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL, 
      department_id INTEGER REFERENCES department(id)
      );
      `);
  } catch (err) {
    console.log(err)
  }
};

const syncAndSeed = async () => {

  console.log(`CONNECTING TO DB`);
  await client.connect();
  console.log(`CONNECTED TO DB`);

  console.log(`DROPPING TABLES`);
  await dropTables();
  console.log(`DROPPED TABLES`);

  console.log(`CREATING DEPARTMENTS`);
  await createDepartments('Parts');
  await createDepartments('Marketing');
  await createDepartments('Comedy');
  console.log(`DEPARTMENT CREATED`);

  console.log(`CREATING EMPLOYEES`);
  await createEmployees('Rosa');
  await createEmployees('Amy');
  await createEmployees('Jake');
  await createEmployees('Gina');
  await createEmployees('Hitchcock');
  await createEmployees('Sully');
  console.log(`EMPLOYEES CREATED`);

  console.log(`CREATING TABLES`);
  await createTable();
  console.log(`TABLES CREATED`);
  await client.end();
}
syncAndSeed();
