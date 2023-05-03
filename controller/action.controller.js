const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const startServer = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/start_server.sh");
    const result = stdout.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
    return res.status(200).json({
      status: "success",
      message: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export const stopServer = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/stop_server.sh");
    const result = stdout.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
    return res.status(200).json({
      status: "success",
      message: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export const serverDetails = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/server_details.sh");
    const result = stdout.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
    if (!stderr) {
      return res.status(200).json({
        status: "success",
        message: result,
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export const serverMonitor = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/server_monitor.sh");
    const result = stdout.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
    if (!stderr) {
      return res.status(200).json({
        status: "success",
        message: result,
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
