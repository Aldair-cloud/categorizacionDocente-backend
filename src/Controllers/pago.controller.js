const token = req.body.token;
const payment_method_id = req.body.payment_method_id;
const installments = req.body.installments;
const issuer_id = req.body.issuer_id;

var mercadopago = require("mercadopago");
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: token,
  description: "Blue shirt",
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: "john@yourdomain.com",
  },
};

// Guarda y postea el pago
mercadopago.payment
  .save(payment_data)
  .then(function (data) {
    // ...
    // Imprime el estado del pago
    Console.log(data.status);
  })
  .catch(function (error) {
    // ...
  });
