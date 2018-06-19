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
        //var combToString = combi[0].join().replace(/\,/ig, " "); //join = tostring() // replacing "," to " " and i = ignore case sensitive, g = global
        //const myPokerHand = new PokerHand(combToString);
        //res.send(myPokerHand);
        var combToString = [];
        for(var i = 0; i < combi.length; i++)
        {
          combToString.push(new PokerHand(combi[i].join().replace(/\,/ig, " ")));
        }
        var months = [{"hand":["TS","JS","QS","KS","AS"],"score":1,"rank":"ROYAL_FLUSH"},{"hand":["TS","JS","QS","KS","5H"],"score":6682,"rank":"HIGH_CARD"},{"hand":["TS","JS","QS","AS","5H"],"score":6354,"rank":"HIGH_CARD"},{"hand":["TS","JS","KS","AS","5H"],"score":6234,"rank":"HIGH_CARD"},{"hand":["TS","QS","KS","AS","5H"],"score":6198,"rank":"HIGH_CARD"},{"hand":["JS","QS","KS","AS","5H"],"score":6190,"rank":"HIGH_CARD"},{"hand":["TS","JS","QS","KS","QC"],"score":3821,"rank":"ONE_PAIR"},{"hand":["TS","JS","QS","AS","QC"],"score":3776,"rank":"ONE_PAIR"},{"hand":["TS","JS","KS","AS","QC"],"score":1600,"rank":"STRAIGHT"},{"hand":["TS","QS","KS","AS","QC"],"score":3767,"rank":"ONE_PAIR"},{"hand":["JS","QS","KS","AS","QC"],"score":3766,"rank":"ONE_PAIR"},{"hand":["TS","JS","QS","5H","QC"],"score":3870,"rank":"ONE_PAIR"},{"hand":["TS","JS","KS","5H","QC"],"score":6682,"rank":"HIGH_CARD"},{"hand":["TS","QS","KS","5H","QC"],"score":3834,"rank":"ONE_PAIR"},{"hand":["JS","QS","KS","5H","QC"],"score":3826,"rank":"ONE_PAIR"},{"hand":["TS","JS","AS","5H","QC"],"score":6354,"rank":"HIGH_CARD"},{"hand":["TS","QS","AS","5H","QC"],"score":3789,"rank":"ONE_PAIR"},{"hand":["JS","QS","AS","5H","QC"],"score":3781,"rank":"ONE_PAIR"},{"hand":["TS","KS","AS","5H","QC"],"score":6198,"rank":"HIGH_CARD"},{"hand":["JS","KS","AS","5H","QC"],"score":6190,"rank":"HIGH_CARD"},{"hand":["QS","KS","AS","5H","QC"],"score":3772,"rank":"ONE_PAIR"}];
months.sort(function(obj1, obj2) {
  // Ascending: first age less than the previous
        res.send(obj1.score - obj2.score);
});
        //res.send(combToString);
  })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
