const express = require('express')
const app = express();

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const discovery = new DiscoveryV1({ version: '2019-02-01' });



app.get('/', (req,res)=>{
    res.send('respond with a resource');

    res.json([{
        id: 1,
        username: "samsepi01"
    },{
        id: 2,
        username: "D01oresH4ze"}])
})


app.listen(3001, ()=>{
    console.log('Listening on port 3001');
})



// module.exports = app;
