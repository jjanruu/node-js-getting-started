const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
//var cmb = Combinatorics.combination(["A","B","C","D","E","F","G"], 5);
var a;

const PokerHand = require('poker-hand-evaluator');
const myPokerHand = new PokerHand('KS KH QC AH AD');
express()
  .use(express.static (path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/poker/:hand', (req, res) =>
  {
        var temp = req.params.hand;
        var cnv = JSON.parse("[" + temp + "]"); // to array
        var cmb = Combinatorics.combination(cnv, 5);
        var combi = [];
        while(a = cmb.next())
        {
          combi.push(a);
        }
        res.send(combi);
//var id = req.params.id
 })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
