const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const PokerHand = require('poker-hand-evaluator');
const hisPokerHand = new PokerHand('AH KH QH JH TH');
express()
  
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(hisPokerHand.describe())
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
