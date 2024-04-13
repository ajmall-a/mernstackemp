const express = require('express');
const morgan= require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./DB/Connection');
const PORT=process.env.PORT;
const userroute = require('./Routes/Useroute');
const postroute = require('./Routes/Postroute');

const app = express();
const path =require('path');
app.use(express.static(path.join(__dirname,'/build')));
app.use(morgan('dev'));
app.use(cors());

app.use('/api',userroute)
app.use('/api',postroute)
app.get('/*', function(req, res) { res.sendFile(path.join(__dirname ,'/build/index.html')); });






app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
}) 