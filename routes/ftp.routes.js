import express from "express";
import {
  fetchFiles,
  readFile,
  readFolder,
  writeFile,
} from "../controller/ftp.controller";

const router = express.Router();

router.get("/ftp/fetchfiles", fetchFiles);
router.post("/ftp/readfile", readFile);
router.post("/ftp/writefile", writeFile);
router.post("/ftp/readfolder", readFolder);

module.exports = router;
