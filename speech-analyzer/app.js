const express = require('express')
const app = express();
const watson = require('./watson')
const cors = require('cors');

// const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
// const discovery = new DiscoveryV1({ version: '2019-02-01' });

// Middleware
app.use(cors());

// Routes
app.use(require('./watson'));




app.listen(3001, ()=>{
    console.log('Listening on port 3001');
})


