//Top level import
const util = require("util");
const exec = util.promisify(require("child_process").exec);

export const zcshellInfo = async (req, res) => {
  try {
    let nodeExec;
    const { stdout, stderr } = await exec("node -v");
    const { stdout: stdout2, stderr: stderr2 } = await exec("npm -v");

    return res.status(200).json({
      status: "success",
      zcs_api_version: "v1.0.0",
      install_location: `${process.cwd()}`,
      supported_game: "csgo",
      node_version: stdout,
      npm_version: stdout2,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      zcs_api_version: "v1.0.0",
      install_location: `${process.cwd()}`,
      message: err,
      warning:
        "status:error means that the api is not working properly, please try to reinstall the api or contact with support",
    });
  }
};

export const testScriptRun = async (req, res) => {
  try {
    const { qr } = req.query;
    // const { stdout, stderr } = await exec(qr);
    const { stdout, stderr } = await exec("bash location.sh");
    const result = stdout.replaceAll("\n", " ");
    const temp = result.split(" ");
    return res.status(200).json({
      status: "success",
      message: temp,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
