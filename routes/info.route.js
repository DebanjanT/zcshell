import express from "express";
import { testScriptRun, zcshellInfo } from "../controller/info.controller";

const router = express.Router();

router.get("/info", zcshellInfo);
router.get("/testscript", testScriptRun);

module.exports = router;
