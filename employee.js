const createEmployees = async() => {
  console.log(`CREATING EMPLOYEES`);
  try {
    await client.query(`
      INSERT INTO employees (name)
      VALUES('${employeename})
      `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createEmployees
}
