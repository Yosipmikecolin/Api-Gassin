const express = require("express");
var cors = require('cors')
const app = express();


//VARIBALES DE ENTORNO
app.set("port", process.env.PORT || 5000);



//MIDLEWARES
app.use(express.json());
app.use(cors());


//ROUTES
app.use("/destinos", require("./routes/destinos.routes"))







//SERVIDOR
app.listen(app.get("port"), () => {
    console.log("Puerto", app.get("port"))
})