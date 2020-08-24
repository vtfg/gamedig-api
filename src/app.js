const express = require("express");
const app = express();
const morgan = require("morgan");
const info = require("./routes/info");

app.use(morgan("dev"));
app.use("/info", info);

app.use(() => {
    const error = new Error("There's an error");
    error.status = 404;
});

app.use((error, res) => {
    res.status(error.status || 500);

    return res.send({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;
