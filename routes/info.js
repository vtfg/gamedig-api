const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    const ip = req.query.ip;
    const port = req.query.port;

    res.status(200).send({
        ip,
        port,
    });
});

module.exports = router;
