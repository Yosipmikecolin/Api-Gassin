const express = require("express");
const router = express.Router();
var path = require('path');

router.post("/img", (req, res) => {
    res.send(path.join(req.file.originalname));
    //console.log("Archivo", req.file)
})




module.exports = router;