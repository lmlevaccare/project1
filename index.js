const express = require ('express');
const { suppressDeprecationWarnings } = require('moment');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

//body parser middleware for post req (use to send json post)
app.use(express.json());

// to handle form submission

app.use(express.urlencoded({extended: false}))

app.use(logger)



app.get('/', (reg,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
})

//set static folder to run all the html files in the public directory 

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members', require('./routes/apiMember'));


const PORT= process.env.PORT || 5000;

app.listen();


app.listen(PORT, () => console.log(`Server Started on 5000 ${PORT}`));