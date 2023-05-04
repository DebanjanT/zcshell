import { ansiConverter } from "../utils/ansiConverter";
import { readFileSync } from "fs";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const readConfig = async (req, res) => {
  try {
    // const { stdout, stderr } = await exec("pwd");

    const data = readFileSync(
      "/home/csgoserver/serverfiles/csgo/cfg/csgoserver.cfg",
      { encoding: "utf8", flag: "r" }
    );

    return res.status(200).json({
      status: "success",
      message: data,
      stringed: data.toString(),
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err,
    });
  }
};
