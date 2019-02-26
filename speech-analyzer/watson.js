const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var text = "";


router.post('/custom-text-search', (req,res)=>{

  text =  JSON.stringify(req.body.data);
  console.log(text);



var toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
  iam_apikey: '8AoUTs47EwFctA1tkJchwDXdCu1el7_aAvHm98JV8lAR',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

// var text =  `I am having a great day today.`


var toneParams = {
  tone_input: { 'text': text },
  content_type: 'application/json'
};

function tone(text){
  var ibmResponse = ""
  if(text == ""){
    console.log("none")
  }
  else {
    toneAnalyzer.tone(toneParams, function(error, toneAnalysis){
      if (error) {
            console.log(error);
          } else { 
            ibmResponse = JSON.stringify(toneAnalysis, null, 2);
            documentTone(ibmResponse)
          }
    })
  }
}

function documentTone(ibmInput){
  console.log(ibmInput);
  console.log(ibmInput["document_tone"]);

  // for(var i = 0;  i < ibmInput.length; i++){
  //   if (i == "document_tone"){
  //     console.log(i);
  //   }}

}

// Calling Watson API with user input
tone(text)

  res.send('xyz');
})

  module.exports = router;