const express = require("express");
const app = express();
const morgan = require("morgan");
const info = require("./routes/info");

app.use(morgan("dev"));
app.use("/info", info);

module.exports = app;
