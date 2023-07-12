const app = require('./app');

const dotenv = require('dotenv');
const connectedDatabase = require('./config/database');

//config

dotenv.config({path:'backend/config/config.env'});

// Connection to database
connectedDatabase();





app.listen(process.env.PORT,'localhost',()=>{
    console.log('server is working on port https://localhost:'+process.env.PORT);
})