const express = require("express");
var path = require('path');
const multer = require('multer')
var cors = require('cors')
const app = express();



//VARIBALES DE ENTORNO
app.set("port", process.env.PORT || 5000);


//CONFIGURACION DE MULTER 
const storage = multer.diskStorage({
    destination: path.join(__dirname, "storage"),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})



app.use(multer({
    storage: storage,
    dest: path.join(__dirname, "storage")
}).single("avatar"))




//MIDLEWARES
app.use(express.json());
app.use(cors());







//ROUTES
app.use("/destinos", require("./routes/destinos.routes"));
app.use("/upload", require("./routes/images.routes"));







//SERVIDOR
app.listen(app.get("port"), () => {
    console.log("Puerto", app.get("port"))
})