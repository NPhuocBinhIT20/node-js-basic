// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
// import connection from "./configs/connnectDB";

require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
