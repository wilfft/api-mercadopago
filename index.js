const express = require("express");
const app = express();
const MercadoPago = require("mercadopago");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

MercadoPago.configure({
  access_token:
    "TEST-600578558895422-120201-db0de9d632956cb5b4b8513e197b3649-642083845",
});

app.get("/pagar", async (req, res) => {
  let id = "" + Date.now();
  let emailPagador = "williammoraes57@gmail.com";
  let dados = {
    items: [
      (item = {
        id: id,
        title: "2x video games, 3x camisas",
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(150),
      }),
    ],
    payer: { email: emailPagador },
    external_reference: id,
  };

  try {
    var pagamento = await MercadoPago.preferences.create(dados);
    console.log(pagamento);
    return res.redirect(pagamento.body.init_point);
  } catch (err) {
    return res.send(err.message);
  }
});

app.post("/not", (req, res) => {
  console.log(req.query);
  res.send("OK");
});
