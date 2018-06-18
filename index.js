const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var Combinatorics = require('js-combinatorics');
var cmb = Combinatorics.combination([A, B, C, D, E, F, G], 5);



const PokerHand = require('poker-hand-evaluator');
const myPokerHand = new PokerHand('KS KH QC AH AD');
express()
  .use(express.static (path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  /*.get('/user/:userID', function (req,res)
 {
    res.send(req.params);
 })*/
 .get('/', (req, res) =>
 {
   
 })

  .get('/poker/:hand', (req, res) =>
       {
        res.send(req.params.hand);
//var id = req.params.id
        
        var combi = [];
        while(a = cmb.next())
        {
          combi.push(a);
        }
        res.send(combi);
            })
       
  

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
