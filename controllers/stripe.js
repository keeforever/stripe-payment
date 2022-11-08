const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeAudit = async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: "inr",
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeAudit;
