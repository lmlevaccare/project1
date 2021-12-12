const express = require ('express');
const path = require('path');
const fowlerMembers = require('./Members')
const app = express();




app.get('/api/members',(req, res) => {
res.json(fowlerMembers);
})

// app.get('/', (reg,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

//set static folder to run all the html files in the public directory 

app.use(express.static(path.join(__dirname,'public')));


const PORT= process.env.PORT || 5000;

app.listen();


app.listen(PORT, () => console.log(`Server Started on 5000 ${PORT}`));