import path from "path";
import { USER_SERVER_DIR } from "../constants/locations.var";
const fs = require("fs");

export const fetchFiles = async (req, res) => {
  try {
    console.log(process.cwd());
    let fileList = new Array();

    const content = fs
      .readdirSync(USER_SERVER_DIR, {
        withFileTypes: true,
        recursive: true,
      })
      .forEach((file) => {
        if (file.isDirectory()) {
          fileList.push({
            name: file.name,
            type: "folder",
          });
        } else {
          fileList.push({
            name: file.name,
            type: "file",
          });
        }
      });

    return res.status(200).json({
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
