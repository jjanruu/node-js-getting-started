const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
var a;
var myPokerHand = [];
const PokerHand = require('poker-hand-evaluator');

express()
  .use(express.static (path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) =>
  {
    //const myPokerHand = new PokerHand('KS KH QC AH AD');
    //res.send(myPokerHand.scores);
  })
  .get('/poker/:hand', (req, res) =>
  {
        var temp = req.params.hand;
        var cnv = JSON.parse("[" + temp + "]"); // to array
        var cmb = Combinatorics.combination(cnv, 5);
        var combi = [];

        while(a = cmb.next())
        {
          combi.push(a);
          myPokerHand[a] = new PokerHand(combi(a));
        }
        res.send(myPokerHand);
//var id = req.params.id
  })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
