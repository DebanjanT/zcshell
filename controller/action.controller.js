const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const startServer = async (req, res) => {
  try {
    const { stdout, stderr } = await exec("bash scripts/start_server.sh");
    return res.status(200).json({
      status: "success",
      message: stdout,
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
    return res.status(200).json({
      status: "success",
      message: stdout,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
