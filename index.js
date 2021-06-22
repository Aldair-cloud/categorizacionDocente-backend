const express = require("express");
const app = express();
const multer = require("multer");
const mimeTypes = require("mime-types");
const cors = require("cors");

app.use(cors());

const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: function (req, file, cb) {
    cb("", file.originalname + "." + mimeTypes.extension(file.mimetype));
  },
});

const upload = multer({
  storage: storage,
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/view/index.html");
});

app.post("/files", upload.single("archivo"), (req, res) => {
  res.send("Todo bien");
});

app.listen(8080, () => console.log("server start"));
