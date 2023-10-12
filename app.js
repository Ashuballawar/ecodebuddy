const express=require('express');
const mongoose=require('mongoose')

require('dotenv').config()
const bodyParser=require('body-parser')
const path=require('path')

const app=express();
const userroutes=require('./routes/user')




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.use('/user',userroutes)

mongoose.connect(process.env.MONGODB_STRING)
.then(result=>{
   
         console.log('connected')
        app.listen(3000)
    
}).catch(err=>{
    console.log(err)
})

