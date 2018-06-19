const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
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
        var a;
        var cmb = Combinatorics.combination(cnv, 5);
        var combi = [];
        //var combToString = [];
        var i = 0;
        while(a = cmb.next())
        {
          combi.push(a);
          //combToString[i].push(combi[i].join().replace(/\,/ig, " "));
          //myPokerHand = new PokerHand(combToString[a]);
        }
        // var combToString = combi[1].join().replace(/\,/ig, " "); //join = tostring() // replacing "," to " " and i = ignore case sensitive, g = global
        const myPokerHand = new PokerHand(combToString);
        res.send(myPokerHand);
        var combToString = [];
        for(var i = 0; i < combi.length; i++)
        {
          combToString.push(combi[i].join().replace(/\,/ig, " "));
        }

        //res.send(combToString);
  })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
