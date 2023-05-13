import express from "express";
import {
  fetchFiles,
  readFile,
  readFolder,
  writeFile,
} from "../controller/ftp.controller";
import { readRankMeDatabase } from "../controller/zcshell.controller";

const router = express.Router();

router.get("/ftp/fetchfiles", fetchFiles);
router.get("/ftp/db", readRankMeDatabase);
router.post("/ftp/readfile", readFile);
router.post("/ftp/writefile", writeFile);
router.post("/ftp/readfolder", readFolder);

module.exports = router;
