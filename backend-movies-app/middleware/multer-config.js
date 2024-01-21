const multer = require("multer");
const path = require("path");
//import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: "../movies-app/public/images",
  // ....../images/2500.jpg
  //vers le dossier movies-app de notre frontend
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
    // uuidv4    callback(null, uuidv4() + path.extname(file.originalname));

    // 17564564545.jpg
  },
});

const upload = multer({ storage });

module.exports = upload.single("image");
