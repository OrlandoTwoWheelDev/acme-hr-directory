const { createDepartments } = require('./department')
const { createEmployees } = require('./employee')
app.use(express.json());

const dropTables = async () => {
  try {
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
  await createDepartments('Human Resources');
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
}
syncAndSeed();