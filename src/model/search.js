const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.all(`SELECT * FROM pages`);

    await db.close();

    return data;
  },
};
