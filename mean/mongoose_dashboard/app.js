const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8888, (response)=>{
  console.log('listening on port 8888');
})
