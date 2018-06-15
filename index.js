const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
var cmb, a;
cmb = Combinatorics.power(['a','b','c']);


const PokerHand = require('poker-hand-evaluator');
const myPokerHand = new PokerHand('KS KH QC AH AD');
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => cmb.forEach(function(a){ res.send(a) })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
