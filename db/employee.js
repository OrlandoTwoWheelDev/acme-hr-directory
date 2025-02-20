const createEmployees = async (employeename) => {
  console.log(`CREATING EMPLOYEES`);
  try {
    await client.query(`
      INSERT INTO employees (name)
      VALUES('${employeename}')
      `);
  } catch (err) {
    console.log(err);
  }
}


//creating a route for the front end
const getAllEmployees = async () => {
  try {
    const { } = await client.query(`
      SELECT * FROM employees;`)
  } catch (err) {
    console.log(err);
  }
  console.log(`GETTING ALL EMPLOYEES`);
}

module.exports = {
  createEmployees
}
//curly braces for multiple OBJECTS 


//invoking
getAllEmployees();