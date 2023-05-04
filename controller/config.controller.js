import { SERVER_FILE } from "../constants/locations.var";
import { ansiConverter } from "../utils/ansiConverter";
import { readFileSync, writeFileSync } from "fs";
const { Config } = require("cfg-reader");

const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const readConfig = async (req, res) => {
  try {
    const data = readFileSync(SERVER_FILE, { encoding: "utf8", flag: "r" });
    return res.status(200).json({
      status: "success",
      message: "Config fetched successfully",
      config: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err,
    });
  }
};

export const writeConfigTest = async (req, res) => {
  try {
    const { configData } = req.body;
    if (!configData)
      return res.status(400).json({
        error: "No config data received",
      });
    writeFileSync(SERVER_FILE, configData);
    return res.status(200).json({
      status: "success",
      message: "Config updated successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err,
    });
  }
};
