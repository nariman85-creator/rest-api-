const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const passport =require('passport');
const config=require('./config/keys');
const morgan=require('morgan');
const authRouter=require('./routes/auth');
const analiticRouter=require('./routes/analytic');
const categoryRouter=require('./routes/category');
const orderRouter=require('./routes/order');
const positionRouter=require('./routes/position');


const app=express();
mongoose.connect(config.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongodb connected');
    
}).catch(err=>{
    console.log(err);
    
});
app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/auth',authRouter);
app.use('/api/analitic',analiticRouter);
app.use('/api/category',categoryRouter);
app.use('/api/order',orderRouter);
app.use('/api/position',positionRouter);
module.exports=app;