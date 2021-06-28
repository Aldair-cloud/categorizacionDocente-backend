import express from "express";
import morgan from "morgan";
import allRoutes from "./allRutas";


const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//RUTAS
app.use("/CAD", allRoutes);

//SDK de Mercado de Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-4599473864722744-062705-f87dac10aaf598c16314431524bd9226-781932593",
});

app.get("/pagos", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      global.id = response.body.id;
    })
    .catch(function (error) {
      console.log(error);
    });
});
const allrutas = require("./allRutas");
app.use(allrutas);

const { pg } = require("./database");

//DATABASE

export default app;
