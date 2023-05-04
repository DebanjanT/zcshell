import path from "path";
import { USER_SERVER_DIR } from "../constants/locations.var";
const fs = require("fs");

export const fetchFiles = async (req, res) => {
  try {
    console.log(process.cwd());
    let fileList = new Array();
    const HOME_DIR = process.env.HOME;

    const content = fs
      .readdirSync(HOME_DIR, {
        withFileTypes: true,
        recursive: true,
      })
      .forEach((file) => {
        if (file.isDirectory()) {
          fileList.push({
            name: file.name,
            type: "folder",
            dir: path.join(HOME_DIR, file.name),
          });
        } else {
          fileList.push({
            name: file.name,
            type: "file",
            dir: path.join(HOME_DIR, file.name),
          });
        }
      });

    return res.status(200).json({
      initialDir: HOME_DIR,
      fileList: fileList,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: "error",
      message: "Could not fetch files",
      error: err,
    });
  }
};

export const readFile = async (req, res) => {
  try {
    const { FILE_PATH } = req.body;
    // const FILE_DIR = path.join(USER_SERVER_DIR, FILE_PATH);
    const data = fs.readFileSync(FILE_PATH, { encoding: "utf8", flag: "r" });
    return res.status(200).json({
      status: "success",
      message: "File fetched successfully",
      config: data,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: "Could not read file",
      error: err,
    });
  }
};

export const readFolder = async (req, res) => {
  try {
    // const HOME_DIR = process.env.HOME;
    // const FOLDER_PATH = req.query.fp;
    // const FOLDER_DIR = path.join(HOME_DIR + FOLDER_PATH);
    const { FOLDER_PATH } = req.body;

    let fileList = new Array();

    const content = fs
      .readdirSync(FOLDER_PATH, {
        withFileTypes: true,
        recursive: true,
      })
      .forEach((file) => {
        if (file.isDirectory()) {
          fileList.push({
            name: file.name,
            type: "folder",
            dir: path.join(FOLDER_PATH, file.name),
          });
        } else {
          fileList.push({
            name: file.name,
            type: "file",
            dir: path.join(FOLDER_PATH, file.name),
          });
        }
      });

    return res.status(200).json({
      fileList: fileList,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: "Could not read file",
      error: err,
    });
  }
};
