import express from "express";
import { fetchFiles, readFile, readFolder } from "../controller/ftp.controller";

const router = express.Router();

router.get("/ftp/fetchfiles", fetchFiles);
router.post("/ftp/readfile", readFile);
router.get("/ftp/readfolder", readFolder);

module.exports = router;
