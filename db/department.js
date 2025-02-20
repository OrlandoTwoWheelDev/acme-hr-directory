const createDepartments = async () => {
  console.log(`CREATING DEPARTMENT`)
  try {
    //to talk to the database
    await client.query(`
      INSERT INTO departments(name)
      `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createDepartments
}
//curly braces for multiple OBJECTS 