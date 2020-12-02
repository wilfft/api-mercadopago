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
  var id = req.query.id; // recebe o id da compra
  setTimeout(() => {
    var filtro = {
      "order.id": id,
    }; //pesquisa no banco de dados do mercadopago
    MercadoPago.payment
      .search({ qs: filtro })
      .then((data) => {
        var pagamento = data.body.results[0];
        if (pagamento != undefined) {
          console.log(pagamento);
          console.log(pagamento.external_reference); //id criado da venda
          console.log(pagamento.status); //aprovado ou nao
          if (status === "approved") {
            //Banco.definirComoPago(pagamento.external_reference)
            //alguma funçao no bancoq ue vai localizar o id do pedido
          } else console.log("pagamento nao existe");
        }
      })
      .catch((err) => console.log(err));
  });
  20000;
  res.send("OK");
});

//tempo pra pesquisar no bd do MP antes
