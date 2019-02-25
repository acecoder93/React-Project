const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var text = ""


router.post('/custom-text-search', (req,res)=>{

  text =  req.body.data;



  res.send('xyz');
})






// var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// var toneAnalyzer = new ToneAnalyzerV3({
//   version_date: '2017-09-21',
//   iam_apikey: '8AoUTs47EwFctA1tkJchwDXdCu1el7_aAvHm98JV8lAR',
//   url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
// });

// var text =  `I am having a great day today.`


// var toneParams = {
//   tone_input: { 'text': text },
//   content_type: 'application/json'
// };

// // create a Get request for api route to retrieve speech data

//   toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
//     if (error) {
//       console.log(error);
//     } else { 
//       console.log(JSON.stringify(toneAnalysis, null, 2));
//     }
//   });


  module.exports = router;