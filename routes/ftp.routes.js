import express from "express";
import { fetchFiles } from "../controller/ftp.controller";

const router = express.Router();

router.get("/ftp/fetchfiles", fetchFiles);

module.exports = router;
