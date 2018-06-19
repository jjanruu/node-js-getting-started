const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
var a;
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
        }
        //res.send(combi[0]);
        //const myPokerHand = new PokerHand(combi[0]);
        var combToString = combi[0].join();
        var removeChar = combToString.replace(/\,/ig, " ");
        res.send("'"+removeChar+"'");
        //res.send(myPokerHand);
//var id = req.params.id
  })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
