const express = require("express");

const app = express();

const logMiddleWare = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  return next();
};

app.use(logMiddleWare);

app.get("/", (req, res) => {
  return res.send(`Bem Vindo(a), ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.send(`Bem vindo(a), ${req.params.name}`);
});

app.listen(3000);
