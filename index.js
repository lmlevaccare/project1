const express = require ('express');
const path = require('path');
const fowlerMembers = require('./Members')
const app = express();
const fetch =require('node-fetch')

const gtag= 'G-EHDX9LC20M'

// const gtag= 'https://analytics.google.com/analytics/web/provision/?name=lauren+fowler#/p296575308/reports/reportinghub?params=_u..nav%3Dmaui%26_u..insightCards%3D%5B%7B%22question%22:%22track%22%7D%5D'

app.get('/', async function (req, res) {
    await fetch (
        `https://www.google-analytics.com/collect?v=1&t=pageview&tid=${gtag}&cid=555&dp=tube`,
        {
            headers: {
                'user-agent':
                  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
              },
        }
    )
    return res.send ('do i work?')
})

app.get('/api/members',(req, res) => {
    await fetch (
        `https://www.google-analytics.com/collect?v=1&t=pageview&tid=${gtag}&cid=555&dp=%2Fhome`,
        {
            headers: {
                'user-agent':
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'

            },
        }
    )
   return res.json(fowlerMembers);
})



// app.get('/', (reg,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

//set static folder to run all the html files in the public directory 

app.use(express.static(path.join(__dirname,'public')));


const PORT= process.env.PORT || 5000;

app.listen();


app.listen(PORT, () => console.log(`Server Started on 5000 ${PORT}`));