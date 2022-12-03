const express = require("express");
const router = express.Router();
const vacaciones = require("../database/vacaciones");
const aventuras = require("../database/aventuras");
const guias = require("../database/guias");


router.get("/vacaciones", (req, res) => {
    res.json(vacaciones);
});


router.get("/aventuras", (req, res) => {
    res.json(aventuras);
});


router.get("/guias", (req, res) => {
    res.json(guias);
})



module.exports = router;