const express = require("express");
const app = express();
const info = require("./routes/info");

app.use("/info", info);

app.use("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Tudo funcionando",
    });
});

module.exports = app;
