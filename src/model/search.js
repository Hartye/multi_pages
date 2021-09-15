const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.all(`SELECT * FROM pages`);

    await db.close();

    return data;
  },

  async getPage(id) {
    const db = await Database();

    const data = await db.get(`SELECT * FROM pages WHERE id = ${id}`);

    await db.close();

    return data;
  },
};
