 const express=require('express');
 const colors=require('colors')
 const dotenv=require('dotenv').config();
 const {errorHandler}=require('./middleware/errorMiddleware')
 const connectDB=require('./config/db')
 const port=process.env.PORT || 5000;

 connectDB();
 
 const app=express();

 app.use(express.json())
 app.use(express.urlencoded({extended:false}))

//  app.get('/api/goals',(req,res)=>{
//     res.json({message:"Get goals"})
//  })

app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)
 app.listen(port,()=>console.log(`Server started on port ${port}`)) 