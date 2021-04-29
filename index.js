const express = require("express");
const cors = require("cors");
// if (!process.env.PORT) {
//   require("./Secrets");
// }
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(express.json()); //data from json
app.use(express.urlencoded({ extended: true })); //data from form
app.use(express.static("public"));

const path = require("path");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}.`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
