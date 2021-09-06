const app=require('./app');


const port=process.env.PORT||5000;



app.listen(port,(err)=>{
    if(err){
        console.error(err);
    }
    console.log(`Server to started or port:${port}`);
    
})



