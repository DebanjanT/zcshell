import express from "express";
import {
  serverDetails,
  serverMonitor,
  startServer,
  stopServer,
} from "../controller/action.controller";

const router = express.Router();

router.get("/server/start", startServer);
router.get("/server/stop", stopServer);
router.get("/server/details", serverDetails);
router.get("/server/monitor", serverMonitor);

module.exports = router;
