const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const myPokerHand = new PokerHand('KS KH QC AH AD');
const hisPokerHand = new PokerHand('AH KH QH JH TH');
express()
  
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(JSON.stringify(hisPokerHand.describe()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
