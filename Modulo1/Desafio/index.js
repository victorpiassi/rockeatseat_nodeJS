const express = require("express");
const nunjunks = require("nunjucks");

app = express();

nunjunks.configure("modulo1/desafio/views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");
app.use(express.urlencoded({ extended: false }));

/* USANDO MIDDLEWARE
const queryMw = (req, res, next) => {
  if (req.query.age) {
    return next();
  } else {
    return res.redirect("/");
  }
};*/

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/minor", (req, res) => {
  return res.render("minor", { age: req.query.age });
});

app.get("/major", (req, res) => {
  return res.render("major", { age: req.query.age });
});

app.post("/check", (req, res) => {
  if (parseInt(req.body.age) < 18) {
    return res.redirect(`/minor?age=${req.body.age}`);
  } else if (parseInt(req.body.age) >= 18) {
    return res.redirect(`/major?age=${req.body.age}`);
  } else {
    return res.redirect("/");
  }
});

app.listen(3000);
