'use strict';
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// const path = require('path'); 
// const session = require('express-session');
const corsOpts = {
    origin: '*',
    methods: ['GET','POST','DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type',],};

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors(corsOpts));

 mongoose.connect(
    'mongodb+srv://root:root@fos.qdtcl.mongodb.net/fos?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>
        console.log('connected to DB!')
)

//const MongoStore = require('connect-mongo')(session);

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

// // Advanced usage
// const connection = mongoose.createConnection('mongodb+srv://root:root@fos.qdtcl.mongodb.net/fos?retryWrites=true&w=majority',
// {useNewUrlParser: true, useUnifiedTopology: true});


// const sessionStore = new MongoStore({
//     mongooseConnection : connection,
//     collection: 'sessions'
//   });

// app.use(session({
//       secret : 'some secret',
//       resave : false,
//       saveUninitialized : true,
//       store : sessionStore,
//       cookie:{
//           maxAge : 1000 * 60 * 60 * 24
//       }
//   })),

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

const orderDetailsRouter = require('../Node/routers/orderDetails')
app.use('/orderDetails', orderDetailsRouter)

const tableRouter = require('../Node/routers/table')
app.use('/table', tableRouter)

const feedbackRouter = require('../Node/routers/feedback')
app.use('/feedback', feedbackRouter)

const orderRouter = require('../Node/routers/order')
app.use('/order', orderRouter)

const menuRouter = require('../Node/routers/menu')
app.use('/menu', menuRouter)

const staffRouter = require('../Node/routers/staff')
app.use('staff', staffRouter)

app.listen(8080)