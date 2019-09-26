const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
// Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
requireDir("./src/models");

// Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);
