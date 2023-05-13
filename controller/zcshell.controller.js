import { USER_SERVER_DIR } from "../constants/locations.var";
const sqlite3 = require("sqlite3").verbose();

export const readRankMeDatabase = async (req, res) => {
  try {
    const RANKME_DB_PATH = `${USER_SERVER_DIR}serverfiles/csgo/addons/sourcemod/data/sqlite/rankme.sq3`;

    const db = new sqlite3.Database(RANKME_DB_PATH);

    db.on("error", (err) => {
      return res.status(400).json({
        error: err,
      });
    });

    db.all("SELECT * FROM rankme", (error, rows) => {
      if (error) {
        console.log("database read error=>", error);
        return res.status(400).json({
          error: error,
        });
      }
      return res.status(200).json({
        status: "success",
        data: rows,
      });
    });
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({
      error: err,
    });
  }
};
