const createDepartments = async () => {
  console.log(`CREATING DEPARTMENT`)
  try {
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