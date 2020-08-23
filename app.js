const express = require("express");
const app = express();
const morgan = require("morgan");
const info = require("./routes/info");

app.use(morgan("dev"));
app.use("/info", info);

app.use((req, res, next) => {
    const error = new Error("There's an error");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.send({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;
