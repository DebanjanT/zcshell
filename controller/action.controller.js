import { ansiConverter } from "../utils/ansiConverter";
const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const startServer = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/start_server.sh");

    return res.status(200).json({
      status: "success",
      message: ansiConverter(stdout),
    });
  } catch (err) {
    if (
      err.stderr == "" ||
      err.stderr ==
        "jq: error (at <stdin>:0): Cannot iterate over null (null)\n" ||
      err.stderr == "jq: error (at <stdin>:0): Cannot iterate over null (null)"
    ) {
      return res.status(200).json({
        status: "partial success",
        message: ansiConverter(err.stdout),
      });
    }
    return res.status(400).json({
      error: ansiConverter(err.stderr),
    });
  }
};

export const stopServer = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/stop_server.sh");

    return res.status(200).json({
      status: "success",
      message: ansiConverter(stdout),
    });
  } catch (err) {
    if (
      err.stderr == "" ||
      err.stderr ==
        "jq: error (at <stdin>:0): Cannot iterate over null (null)\n" ||
      err.stderr == "jq: error (at <stdin>:0): Cannot iterate over null (null)"
    ) {
      return res.status(200).json({
        status: "partial success",
        message: ansiConverter(err.stdout),
      });
    }
    return res.status(400).json({
      error: err,
    });
  }
};

export const serverDetails = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/server_details.sh");

    if (!stderr) {
      return res.status(200).json({
        status: "success",
        message: ansiConverter(stdout),
      });
    }
  } catch (err) {
    if (
      err.stderr == "" ||
      err.stderr ==
        "jq: error (at <stdin>:0): Cannot iterate over null (null)\n" ||
      err.stderr == "jq: error (at <stdin>:0): Cannot iterate over null (null)"
    ) {
      return res.status(200).json({
        status: "partial success",
        message: ansiConverter(err.stdout),
      });
    }
    return res.status(400).json({
      error: err,
    });
  }
};

export const serverMonitor = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/server_monitor.sh");

    if (!stderr) {
      return res.status(200).json({
        status: "success",
        message: ansiConverter(stdout),
      });
    }
  } catch (err) {
    if (
      err.stderr == "" ||
      err.stderr ==
        "jq: error (at <stdin>:0): Cannot iterate over null (null)\n" ||
      err.stderr == "jq: error (at <stdin>:0): Cannot iterate over null (null)"
    ) {
      return res.status(200).json({
        status: "partial success",
        message: ansiConverter(err.stdout),
      });
    }
    return res.status(400).json({
      error: err,
    });
  }
};
