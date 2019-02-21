var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
  iam_apikey: '8AoUTs47EwFctA1tkJchwDXdCu1el7_aAvHm98JV8lAR',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

var text =  `Beans. I was trying to explain to somebody as we were flying in, that's corn. That's beans. And they were very impressed at my agricultural knowledge. Please give it up for Amaury once again for that outstanding introduction. I have a bunch of good friends here today, including somebody who I served with, who is one of the finest senators in the country, and we're lucky to have him, your Senator, Dick Durbin is here. I also noticed, by the way, former Governor Edgar here, who I haven't seen in a long time, and somehow he has not aged and I have. And it's great to see you, Governor. I want to thank President Killeen and everybody at the U of I System for making it possible for me to be here today. And I am deeply honored at the Paul Douglas Award that is being given to me. He is somebody who set the path for so much outstanding public service here in Illinois.
 
Now, I want to start by addressing the elephant in the room. I know people are still wondering why I didn't speak at the commencement.
 
The student body president sent a very thoughtful invitation. The students made a spiffy video. And when I declined, I hear there was speculation that I was boycotting campus until Antonio's Pizza reopened.
 
So I want to be clear. I did not take sides in that late-night food debate. The truth is, after eight years in the White House, I needed to spend some time one-on-one with Michelle if I wanted to stay married.

And she says hello, by the way. I also wanted to spend some quality time with my daughters, who were suddenly young women on their way out the door. And I should add, by the way, now that I have a daughter in college, I can tell all the students here, your parents suffer.`
//   + 'sales have been disappointing for the past three '
//   + 'quarters. We have a competitive product, but we '
//   + 'need to do a better job of selling it!'

var toneParams = {
  tone_input: { 'text': text },
  content_type: 'application/json'
};

toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
  if (error) {
    console.log(error);
  } else { 
    console.log(JSON.stringify(toneAnalysis, null, 2));
  }
});