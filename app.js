const axios = require('axios');

const express = require('express');
const app = express();
const apiFtUrl = 'https://api.ft.com/content/search/v1';
const port = process.env.PORT || 3000

app.get('/signup/:id', async (req, res) => {
    const { data } = await axios.post(apiFtUrl, {
        queryString: "banks",
        resultContext: {
            aspects: ['title', 'lifecycle', 'location', 'summary', 'editorial']
        }
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': '59cbaf20e3e06d3565778e7b7aeb55cf55a24adf82b8d09d67cc6d71'
        }
    });
    console.log(req.params.id)
    res.json(data);
});

app.get('/', (req, res) => res.send('Hello!'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});