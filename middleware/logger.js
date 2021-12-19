// INIT middleware function takes in ( reg, res, next) eveytime a reg middleware function runs 
const moment= require('moment');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
};

module.exports=logger;