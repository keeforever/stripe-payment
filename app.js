require('dotenv').config()
require('express-async-errors')

// express
const express = require("express")
const app =express()

// middleware
app.use(express.static('./public'))
app.use(express.json())

// stripe
const stripeController = require('./controllers/stripe')

app.route('/stripe').post(stripeController)

// routes
app.get('/checkout',(req,res)=>{res.send('checkout')})
// errors

// port
const port = process.env.PORT || 5000

const start = ()=>{
  app.listen(port,()=>{
    console.log(`Port ${port} connected successfully. `);
  })
}

start()