const filesCtrl = {};
import mv from "mv";
import fs from "fs";

filesCtrl.postFile = async (req, res) => {

  let EDFile = req.files.files;

  EDFile.mv("./files/" + EDFile.name, (err) => {
    if (err) return res.status(500).send({ message: err });

    return res.status(200).send({ message: "File upload" });
  });
};

filesCtrl.getfiles = async (req, res) => {
  const lenghtid = req.params.id.length;
  var file = "./files/id-" + req.headers.name;

  return res.status(200).download(file);
};

filesCtrl.putfiles = async (req, res) => {
  const oldFileName = "id-" + req.params.id + "-" + req.body.name;
  let newFile = req.files.files;
  newFile.mv("./files/" + "id-" + req.params.id + "-" + newFile.name, (err) => {
    if (err) return res.status(500).send({ message: err });
  });
  fs.unlinkSync("./files/" + oldFileName);
  return res.status(200).send({ ok: "ok" });
};

export default filesCtrl;
