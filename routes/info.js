const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const Gamedig = require("gamedig");

    const game = req.query.game;
    const ip = req.query.ip;
    const port = req.query.port;
    var response;

    Gamedig.query({
        type: game,
        host: ip,
        port: port,
    })
        .then((state) => {
            response = state;
        })
        .catch((error) => {
            res.status(404).send({
                error: "Server is offline",
            });
        });

    setTimeout(() => {
        res.send({
            info: response,
        });
    }, 2000);
});

module.exports = router;
