var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable All CORS Requests, use corsOptions if you want to all allowed list
app.use(cors());
// body parser
app.use(express.json());
app.use(express.static('dist'));

console.log(__dirname);

// MeaningCloud configurations
const API_KEY = process.env["API_KEY"];


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
});


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/test', function (req, res) {
    console.log('get TEST url ');

    res.send(mockAPIResponse)
});

app.post('/get-article', async function (req, res) {
    // console.log('article_url!', req.body.article_url);
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
    // const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=https://www.frontiersin.org/articles/10.3389/fneur.2021.775781/abstract&lang=en`;

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${req.body.article_url}&lang=en`;
    try {
        const response = await axios(url);
        // console.log('server response ! ', response.data.sentence_list[0]);
        res.json({
            status: 200,
            data: response.data,
            message: 'article fetched successfully'
        })
    } catch (error) {
        console.log('error while making api request ', error);
        res.json({
            status: 'error',
            message: 'some error occurred please try again !'
        })
    }
});
