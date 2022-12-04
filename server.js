const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json())

app.use(cors());

// app.get('/', (req, res)=>{

//     // const response = await axios('htps://localhots:3000')

//     return res.json()
// })


app.listen('3000')