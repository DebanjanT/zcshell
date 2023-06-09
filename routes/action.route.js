import express from "express";
import {
  serverDetails,
  serverMonitor,
  startServer,
  stopServer,
} from "../controller/action.controller";
import { readConfig, writeConfigTest } from "../controller/config.controller";

const router = express.Router();

router.get("/server/start", startServer);
router.get("/server/stop", stopServer);
router.get("/server/details", serverDetails);
router.get("/server/monitor", serverMonitor);

//Config reader routes
router.get("/config/read", readConfig);
router.post("/config/write", writeConfigTest);

module.exports = router;
