// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
