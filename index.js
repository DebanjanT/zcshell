import express from "express";
import cors from "cors";
require("dotenv").config();
import path from "path";
const morgan = require("morgan");
import { readdirSync } from "fs";

// ** create express app
const app = express();

// ** express middleware (execute before sending response to client)
// use limit to express to allow user image upload upto 5mb , this is required to avoid "payload too large error" while api hit
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
//morgan for debug requestsß
app.use(morgan("dev"));
const folder = path.basename(process.cwd());

const port = process.env.PORT || 8000;

app.get("/zcshell/info", async (req, res) => {});

readdirSync("./routes").map((r) =>
  app.use("/zcshell/v1", require(`./routes/${r}`))
);

app.listen(port, () => {
  console.log(`[zcshell] Express serving on port ${port}`);
});
