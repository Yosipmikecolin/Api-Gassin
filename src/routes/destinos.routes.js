const express = require("express");
const router = express.Router();
const vacaciones = require("../database/vacaciones");
const aventuras = require("../database/aventuras");


router.get("/vacaciones", (req, res) => {
    res.json(vacaciones);
});


router.get("/aventuras", (req, res) => {
    res.json(aventuras);
});



module.exports = router;