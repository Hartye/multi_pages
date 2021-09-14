const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
    CREATE TABLE pages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      img TEXT,
      description TEXT
    )
    `);

    await db.run(`
    INSERT INTO pages (
      title,
      img,
      description
    ) VALUES (
      "How this game is amazing",
      "/images/trueColorsAlex.png",
      "This is one of the most exiting and emotional games I've ever played, if your trying to find a game that keeps you focused all the time this is one is more than recommended"
    )
    `);

    await db.run(`
    INSERT INTO pages (
      title,
      img,
      description
    ) VALUES (
      "How the song were made",
      "/images/trueColors.png",
      "We all know that the ost is one of the most important things when it comes to entertainment, it makes part not only in the player experience but also in how people face your product"
    )
    `);

    await db.close();
  },
};

initDb.init();
