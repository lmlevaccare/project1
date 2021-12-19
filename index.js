const express = require ('express');
const { engine } = require('express-handlebars');
// const moment = require('moment');
const path = require('path');
const logger = require('./middleware/logger');
const members = require ('./Members');

const app = express();

//handlebars middleware
// app.engine('handlebars',exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


app.engine('handlebars', engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');



//HANDLEBARS HOME PAGE ROUTE
app.get('/', (req, res) => {
    res.render('index', {title:'Members ONLY App',members});
});


//HOME PAGE ROUTE 

app.get('/', (req , res) => res.render ('index'));

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