import express from "express";
import { startServer, stopServer } from "../controller/action.controller";

const router = express.Router();

router.get("/server/start", startServer);
router.get("/server/stop", stopServer);

module.exports = router;
